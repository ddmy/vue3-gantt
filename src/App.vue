<template>
  <h1>甘特图</h1>
  <button @click="exportImg">下载图片</button>
  <button @click="toggle">更换高亮</button>
  <button @click="prev">上一月</button>
  <button @click="next">下一月</button>
  <button @click="today">今天</button>
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
  />
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
dateRangeList.value = ['2022-02-01', '2022-02-28']

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

const onScheduleClick = item => {
  console.log('点击', item)
}

const gantt = ref(null)

const exportImg = () => {
  console.log('gantt', gantt)
  gantt.value.exportImg()
}

const alikeName = item => {
  return '▶️'+item.name
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
  const arr = fetchTodayMonthRange(new Date())
  dateRangeList.value = [arr[0], arr.at(-1)]
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
</style>