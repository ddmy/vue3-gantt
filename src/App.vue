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

const dateRangeList = ref([])
const activeDate = ref('2022-02-14')
const currentRange = fetchThreeDays()
dateRangeList.value = [currentRange[0], currentRange.at(-1)]
// dateRangeList.value = ['2022-05-01', '2022-06-30']

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

/**
 * alike: 全部一样
 */
const data = ref([
  {
    type: 'alike', // 代表
    color: 'rgb(255,222,215)',
    name: '年度考核'
  },
  {
    type: 'normal', // 代表
    color: '',
    name: '完美世界',
    schedule: [
      {
        id: 333330,
        name: '900勇士同时在线庆祝活动',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: 'rgb(253, 211, 172)',
        textColor: 'rgb(245, 36, 9)',
        days: fethDaysRange('2022-01-15', '2022-02-05')
      },
      {
        id: 555550,
        name: '正月不剃头-重叠一个',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#28f',
        textColor: '#fff',
        days: fethDaysRange('2022-02-27', '2022-03-15')
      },
      {
        id: 222220,
        name: '春节活动',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#768',
        textColor: '#fff',
        days: fethDaysRange('2022-02-28', '2022-03-02')
      },
      {
        id: 111110,
        name: '中元节活动',
        desc: '这个活动很重要，营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#369',
        textColor: '#fff',
        days: fethDaysRange('2022-03-2', '2022-03-8')
      },
      {
        id: 44440,
        name: '三八妇女活动',
        desc: '这个活动很重要，营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#a59',
        textColor: '#fff',
        days: fethDaysRange('2022-03-26', '2022-04-20')
      },
    ],
  },
  {
    type: 'normal', // 代表
    color: '',
    name: '流星蝴蝶剑',
    schedule: [
      {
        id: 222221,
        name: '小年活动',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#482',
        textColor: '#fff',
        days: fethDaysRange('2022-02-25', '2022-03-10')
      },
      {
        id: 111111,
        name: '中元节活动',
        desc: '这个活动很重要，营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#389',
        textColor: '#fff',
        days: fethDaysRange('2022-02-10', '2022-03-13')
      },
      {
        id: 3333331,
        name: '情人节活动',
        desc: '浪漫情人节，让玩家冲大把大把的钱，营收破亿！！！冲冲冲！',
        backgroundColor: 'pink',
        textColor: '#333',
        days: fethDaysRange('2022-04-23', '2022-05-10')
      },
      {
        id: 444441,
        name: '双12冲冲冲！',
        desc: '双12是一年一度的割韭菜的季节，猎人们摩拳擦掌，按耐已久～',
        backgroundColor: '#000',
        textColor: '#fff',
        days: fethDaysRange('2022-02-1', '2022-03-01')
      },
    ],
  },
  {
    type: 'normal', // 代表
    color: '',
    name: '天涯明月刀',
    schedule: [
      {
        id: 333332,
        name: '庆元旦活动',
        desc: '这个活动很重要，营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#fa6',
        textColor: '#fff',
        days: fethDaysRange('2022-03-28', '2022-04-10')
      },
      {
        id: 111112,
        name: '中元节活动',
        desc: '这个活动很重要，营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#521',
        textColor: '#fff',
        days: fethDaysRange('2022-02-05', '2022-02-17')
      },
      {
        id: 444442,
        name: '好友回归活动',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#2dd',
        textColor: '#fff',
        days: fethDaysRange('2022-03-15', '2022-03-22')
      },
      {
        id: 222222,
        name: '元宵西游记联动',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#636',
        textColor: '#fff',
        days: fethDaysRange('2022-02-12', '2022-02-20')
      },
    ],
  },
])

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