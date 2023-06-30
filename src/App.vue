<template>
  <div class="content">
    <div class="head">
      <h1>甘特图</h1>
      <button @click="exportImg">下载带水印图片</button>
      <button @click="exportGanttExcel">导出Excel</button>
      <button @click="toggle">更换高亮</button>
      <button @click="prev">上一月</button>
      <button @click="next">下一月</button>
      <button @click="today">今天</button>
    </div>
    <div class="box">
      <div class="link"><a href="https://github.com/ddmy/vue-gantt">github</a></div>
      <Gantt
        ref="gantt"
        :data="data"
        itemText="游戏/项目"
        dateText="日期"
        :activeDate="activeDate"
        :itemWidth="width"
        :itemHeight="height"
        :scheduleTitle="scheduleTitle"
        :dateRangeList="dateRangeList"
        :repeatMode="repeatConfig"
        :alikeName="alikeName"
        @scheduleClick="onScheduleClick"
        @scrollYEnd="onScrollYEnd"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Gantt from './components/Gantt.vue'
import { fethDaysRange, fetchThreeDays, fetchTodayMonthRange, fetchPrevMonthRange, fetchNextMonthRange } from './util/index.js'

import DATA from './assets/data'

const dateRangeList = ref([])
const activeDate = ref('2022-02-14')
const currentRange = fetchThreeDays()
// dateRangeList.value = [currentRange[0], currentRange.at(-1)]
dateRangeList.value = ['2022-02-11', '2022-04-05']

const repeatConfig = reactive({
  mode: 'extract',
  backgroundColor: '#009999',
  textColor: '#CCFFFF',
  name: list => {
    return list.map(item => item.name).join('+')
  },
  desc: list => {
    return list.map(item => item.desc).join('@@@')
  }
})

const scheduleTitle = item => {
  return item.name + 'function'
}

const width = ref(80)
const height = ref(40)


const data = ref(DATA.data2)

const onScheduleClick = (item) => {
  console.log('点击', item)
  alert(`${item.name}----${item.desc}`)
}

const gantt = ref(null)

const exportImg = () => {
  console.log('gantt', gantt)
  gantt.value.exportImg({
    download: true,
    waterValue: '测试水印效果'
  })
}

const alikeName = item => {
  return '▶️'+item.name
}

const onScrollYEnd = e => {
  console.log('|到底了')
}

const toggle = () => {
  activeDate.value = '2022-04-01'
  width.value = 100
  height.value = 60
  dateRangeList.value = ['2022-03-01', '2022-05-01']
  repeatConfig.backgroundColor = '#99CC33'
  repeatConfig.textColo = '#3399CC'
  data.value.pop()
}

const prev = () => {
  const arr = fetchPrevMonthRange(new Date(dateRangeList.value[0]))
  dateRangeList.value = [arr[0], arr.at(-1)]
}
const next = () => {
  const arr = fetchNextMonthRange(new Date(dateRangeList.value.at(-1)))
  dateRangeList.value = [arr[0], arr.at(-1)]
}
const today = () => {
  const now = new Date()
  const arr = fetchTodayMonthRange()
  activeDate.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  dateRangeList.value = [arr[0], arr.at(-1)]
}

const exportGanttExcel = () => {
    gantt.value.exportGanttExcel({ fileName: '测试信息' })
}



</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style scoped>
.content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.head {
  margin: 20px 0;
}
.head button {
  margin: 0 10px;
  padding: 0 20px;
  height: 40px;
}
.box {
  flex: 1;
}
.link {
  height: 80px;
  line-height: 80px;
  background-color: #eee;
}
</style>