<template>
  <h1>甘特图</h1>
  <Gantt
    :data="data"
    itemText="游戏/项目"
    dateText="日期"
    :dateRangeList="['2021/12/18', '2022/2/20']"
    @scheduleClick="onScheduleClick"
  />
</template>

<script setup>
import Gantt from './components/Gantt.vue'
import { fethDaysRange } from './util/index.js'




/**
 * alike: 全部一样
 */
const data = [
  {
    type: 'alike', // 代表
    color: 'rgb(255,222,215)',
    name: '长线游戏版本节点'
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
        days: fethDaysRange('2021-12-15', '2021-12-20')
      },
      {
        id: 222220,
        name: '春节活动',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#768',
        textColor: '#fff',
        days: fethDaysRange('2021-12-28', '2022-01-03')
      },
      {
        id: 555550,
        name: '正月不剃头-重叠一个',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#28f',
        textColor: '#fff',
        days: fethDaysRange('2022-01-03', '2022-01-10')
      },
      {
        id: 111110,
        name: '中元节活动',
        desc: '这个活动很重要，营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#369',
        textColor: '#fff',
        days: fethDaysRange('2022-01-12', '2022-01-23')
      },
      {
        id: 44440,
        name: '三八妇女活动',
        desc: '这个活动很重要，营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#a59',
        textColor: '#fff',
        days: fethDaysRange('2022-02-14', '2022-02-20')
      },
    ],
  },
  {
    type: 'normal', // 代表
    color: '',
    name: '流星蝴蝶剑',
    schedule: [
      {
        id: 111111,
        name: '中元节活动',
        desc: '这个活动很重要，营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#389',
        textColor: '#fff',
        days: fethDaysRange('2022-01-10', '2022-01-13')
      },
      {
        id: 3333331,
        name: '情人节活动',
        desc: '浪漫情人节，让玩家冲大把大把的钱，营收破亿！！！冲冲冲！',
        backgroundColor: 'pink',
        textColor: '#333',
        days: fethDaysRange('2022-01-13', '2022-01-28')
      },
      {
        id: 222221,
        name: '小年活动',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#482',
        textColor: '#fff',
        days: fethDaysRange('2021-12-23', '2021-12-28')
      },
      {
        id: 444441,
        name: '双12冲冲冲！',
        desc: '双12是一年一度的割韭菜的季节，猎人们摩拳擦掌，按耐已久～',
        backgroundColor: '#000',
        textColor: '#fff',
        days: fethDaysRange('2021-12-10', '2021-12-20')
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
        days: fethDaysRange('2021-12-29', '2022-01-10')
      },
      {
        id: 111112,
        name: '中元节活动',
        desc: '这个活动很重要，营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#521',
        textColor: '#fff',
        days: fethDaysRange('2022-01-05', '2022-01-17')
      },
      {
        id: 444442,
        name: '好友回归活动',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#2dd',
        textColor: '#fff',
        days: fethDaysRange('2022-01-15', '2022-01-22')
      },
      {
        id: 222222,
        name: '元宵西游记联动',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#636',
        textColor: '#fff',
        days: fethDaysRange('2022-01-28', '2022-02-03')
      },
    ],
  },
]

const onScheduleClick = item => {
  console.log('点击', item)
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
