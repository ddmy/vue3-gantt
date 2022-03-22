<template>
  <div class="gantt" id="Vue3Gantt">
    <div class="guide">
      <div class="desc">
        <span class="date">{{ dateText }}</span>
        <span class="item">{{ itemText }}</span>
      </div>
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="{
          'guide-name': true,
          'last-guide-name': index === data.length - 1
        }"
        :style="item.type === 'alike' && computedStyle(item)"
      >
        {{ item.name}}
      </div>
    </div>
    <div class="inner" @scroll="onScrollX($event)">
      <div class="date-list first-date-list">
        <div
          v-for="monthItem in rangeDate"
          :key="monthItem.year + '-' + monthItem.month"
          class="month-item"
        >
          <div class="month">{{ monthItem[0].year + '-' + monthItem[0].month }}</div>
          <div class="day-box">
            <div
              v-for="(dayItem, dayIndex) in monthItem"
              :key="dayItem.day + dayItem.week"
              :class="{
                'day-item': true,
                'first-day-item': dayIndex === 0,
                'date-active': activeDate === (dayItem.year + '-' + dayItem.month + '-' + dayItem.day)
              }"
            >
              <div class="day">{{ dayItem.day }}</div>
              <div class="week">{{ dayItem.week }}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="{
          'date-box': true,
          'alike': item.type === 'alike'
        }"
      >
        <div
          v-for="(dateItem, dateIndex) in renderWorks(item)"
          :key="dateIndex"
          :class="{
            'date-item': true,
            'date-item-work': dateItem.type === 'works',
            'date-active': dateItem.date === activeDate
          }"
          :style="computedStyle(item, dateItem)"
          :title="dateItem.type === `works` ? dateItem.desc : ``"
          @mousemove="event => dateItemMove(dateItem.type, event)"
          @mouseout="event => dateItemMoveOut(dateItem.type, event)"
          @click="scheduleClick(dateItem)"
        >
          <span v-if="dateItem.type === 'works'" class="work-desc">{{ scheduleTitle ? scheduleTitle(dateItem) : dateItem.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  computedDaysRange,
  fethDaysRange,
  splitDaysForMonth,
  todayInRange,
  fetchToday,
  workListSplitForRepeat
} from '../util/index.js'
import html2canvas from 'html2canvas'


const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: []
  },
  dateRangeList: {
    type: Array,
    required: true,
    default: []
  },
  dateText: {
    type: String,
    required: true
  },
  itemText: {
    type: String,
    required: true
  },
  activeDate: {
    type: String,
    default: ''
  },
  repeatMode: {
    // extract 将重叠部分抽取，单独生成独立的日程
    // cover 重叠部分按照征程日期排序覆盖
    type: Object,
    default: { mode: 'cover', backgroundColor: '#FFFFCC', textColor: '#336666', name: '重叠日程', desc: '这是多个日程' }
  },
  // 每个日程格子的宽度
  itemWidth: {
    type: Number,
    default: 40,
    validator(value) {
      return value >= 40
    }
  },
  itemHeight: {
    type: Number,
    default: 40,
    validator(value) {
      return value >= 40
    }
  },
  scheduleTitle: {
    type: Function,
    default: null
  }
})
const dateText = props.dateText
const itemText = props.itemText
const rangeDate = splitDaysForMonth(computedDaysRange(...props.dateRangeList))
const scheduleTitle = props.scheduleTitle

let data = props.data.map(item => {
  if (item.type === 'normal' && Array.isArray(item.schedule)) {
    item.schedule = item.schedule.sort((a, b) => new Date(a.days[0]).getTime() - new Date(b.days[0]).getTime())
    return item
  }
  return item
})


if (props.repeatMode.mode === 'extract') {
  data = workListSplitForRepeat(props.data, props.repeatMode)
}
const activeDate = props.activeDate || fetchToday()


const itemWidth = props.itemWidth
const itemHeight = props.itemHeight

// 计算当前盒子样式
const computedStyle = (parent, item) => {
  let res = {}
  if (parent.type === 'alike') {
    // 全部统一样式
    res = {
      ...res,
      backgroundColor: parent.color
    }
  }
  if (item && item.type === 'works') {
    res = {
      ...res,
      backgroundColor: item.backgroundColor,
      color: item.textColor,
      width: item.width + 'px',
      marginLeft: -item.left + 'px'
    }
  }
  return res
}

// 计算当前日程范围在指定日期范围应该渲染的宽度 (假设日程范围都是合法的)
const computeWordwidth = (schedule, days) => { 
  const hasFirst = todayInRange(schedule[0], [days[0].date, days[days.length - 1].date])
  const hasLast = todayInRange(schedule[schedule.length - 1], [days[0].date, days[days.length - 1].date])
  if (hasFirst && hasLast) return schedule.length * itemWidth
  if (!hasFirst && hasLast) {
    // 无头有尾
    return fethDaysRange(days[0].date, schedule[schedule.length - 1]).length * itemWidth
  } else if (hasFirst && !hasLast) {
    // 有头无尾
    return fethDaysRange(schedule[0], days[days.length - 1].date).length * itemWidth
  }
  return 0
}
// 检查当前日期是否是指定项目的日程
const _checkTodayIsWork = (today, schedule) => {
  return schedule.days.includes(today)
}
// 检查当前日期是否在最终结果列表上
const _checkTodayInResult = (today, result) => {
  return !!result.find(item => item.date === today)
}
// 检查当前日程是否已经添加到最终结果列表上
const _checkWorkInResult = (work, result) => {
  return !!result.find(item => item.id === work.id)
}
// 检查当前日期是否在指定的日程列表中
const _checkTodayInWorkList = (today, workList) => {
  return !!workList.find(item => item.days.includes(today))
}
// 检查当前日期是否在最终结果已经添加的日程列表中
const _checkTodayInAllWorkList = (today, result) => {
  const res = result.filter(item => item.type === 'works')
  return !!_checkTodayInWorkList(today, res)
}
// 把日期范围二维数组处理成适用于日程渲染的一维数组
const _flatDateRange = (dateRange) => {
  return dateRange.flat(1).map(item => {
    return {
      type: 'normal',
      date: String(item.year).padStart(4, '0') + '-' + String(item.month).padStart(2, '0') + '-' + String(item.day).padStart(2, '0')
    }
  })
}
// 检查两个日程的重叠范围
const _checkWorkRepeatRange = (workA, workB) => {
  return workA.days.filter(item => workB.days.includes(item))
}
// 从最终结果中找到指定日期所在的日程信息
const _findTodayForWork = (today, res) => {
  return res.find(item => item.type === 'works' && item.days.includes(today))
}
// 更新已有日程
const _updateScheduleItem = (scheduleItem, result) => {
  // 检查当前要更新进去的日程有没有重叠的部分
  const inWorkInfo = _findTodayForWork(scheduleItem.days[0], result)
  if (inWorkInfo && scheduleItem.id !== inWorkInfo.id) {
    // 获取重叠范围
    const repeatList = _checkWorkRepeatRange(inWorkInfo, scheduleItem)
    const start = scheduleItem.days.slice(repeatList.length)[0]
    const index = result.findIndex(item => item.date === start)
    result[index] = {
      type: 'works',
      date: scheduleItem.days[0],
      width: computeWordwidth(scheduleItem.days, result),
      left: repeatList.length * itemWidth,
      ...scheduleItem
    }
  } else {
    // 正常更新 (有头有尾)
    const index = result.findIndex(item => item.date === scheduleItem.days[0])
    result[index] = {
      type: 'works',
      date: scheduleItem.days[0],
      width: computeWordwidth(scheduleItem.days, result),
      left: 0,
      ...scheduleItem
    }
  }
  // 新增日程，需要同步删除更新日程列表，把原本为空的部分日程删掉
  result = result.filter(item => {
    if (item.type === 'normal' && scheduleItem.days.includes(item.date)) return false
    return true
  })
  return result
}

// 生成当前游戏项目在当前日期范围的日程列表
const renderWorks = (game) => {
  const dateRange = _flatDateRange(rangeDate)
  // 如果当前游戏项目没有日程安排，直接返回默认的数据
  if (!game.schedule) return dateRange
  let res = []
  game.schedule.forEach(scheduleItem => {
    dateRange.forEach(dayItem => {
      // 当前日期是否是一个日程
      const isWork = _checkTodayIsWork(dayItem.date, scheduleItem)
      // 当前日期是否已经添加到最终结果
      const todayInResult = _checkTodayInResult(dayItem.date, res)
      // 当前日期是否在已添加的日程范围内
      const todayInAllWorkList = _checkTodayInAllWorkList(dayItem.date, res)
      // 是日程
      if (isWork) {
        // 当前日期没有被添加 && 当前日期不在已添加的日程范围内
        if (!todayInResult && !todayInAllWorkList) {
           // 第一次
            res.push({
              type: 'works',
              date: dayItem.date,
              width: computeWordwidth(scheduleItem.days, dateRange),
              left: 0,
              ...scheduleItem
            })
        } else if (!todayInResult && todayInAllWorkList) {
          // 当前日期没有被添加 && 当前日期在已添加的日程范围内
          // 获取所在的日程信息
          const inWorkInfo = _findTodayForWork(dayItem.date, res)
          if (scheduleItem.id !== inWorkInfo.id) {
            // 获取重叠范围
            const repeatList = _checkWorkRepeatRange(inWorkInfo, scheduleItem)
            res = _updateScheduleItem(scheduleItem, res)
          } else {
            // 所在日程信息和当前循环日程信息一致
            // 无需处理
          }
        } else if (todayInResult && !todayInAllWorkList) {
          // 当前日期已经被添加 && 当前日程不在已添加的日程范围内 (新增日程)
          // 获取已添加日期的位置，更新当前日期日程
          console.warn('当前日期已经被添加 && 当前日程不在已添加的日程范围内 (新增日程)')
          res = _updateScheduleItem(scheduleItem, res)
        } else {
          // 当前日期已经被添加 && 当前日期在已添加的日程范围内
          // 无需处理
          // console.log('当前日期已经被添加 && 当前日期在已添加的日程范围内')
        }
      } else {
        // 不是日程
        // 当前日期没有被添加 并且 没有在已添加日程范围
        if (!todayInResult && !todayInAllWorkList) {
          res.push(dayItem)
        } else if (!todayInResult && todayInAllWorkList) {
          // 当前日期没有添加 && 当前日期在已经添加的日程范围内
          // console.log('当前日期没有添加 && 当前日期在已经添加的日程范围内')
        } else {
          // 当前日期已经添加
          // console.log('当前日期已经添加', dayItem)
        }
      }
    })
  })
  return res
}

const dateItemMove = (type, event) => {
  if (props.repeatMode.repeatMode === 'extract') return
  if (type !== 'works') return
  if (event.target.tagName === 'SPAN') {
    event.target.parentElement.style.zIndex = 2
    event.target.parentElement.style.boxShadow = '0 0 5px 0px rgba(0, 0, 0, 0.2)'
  } else {
    event.target.style.zIndex = 2
    event.target.style.boxShadow = '0 0 5px 0px rgba(0, 0, 0, 0.2)'
  }
}
const dateItemMoveOut = (type, event) => {
  if (props.repeatMode.repeatMode === 'extract') return
  if (type !== 'works') return
  if (event.target.tagName === 'SPAN') {
    event.target.parentElement.style.zIndex = 1
    event.target.parentElement.style.boxShadow = 'none'
  } else {
    event.target.style.zIndex = 1
    event.target.style.boxShadow = 'none'
  }
}

const emit = defineEmits(['scheduleClick', 'scrollXEnd'])

const scheduleClick = item => {
  emit('scheduleClick', item)
}

let timer = null
const onScrollX = event => {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    const target = event.target
    const width = Math.ceil(Math.max(target.clientWidth, target.scrollWidth))
    if ((target.scrollLeft + target.clientWidth) >= width) {
      emit('scrollXEnd', event)
    }
  }, 200)
}

const exportImg = async () => {
  return new Promise((resolve, reject) => {
    const inner = document.querySelector('#Vue3Gantt .inner')
    const box = document.querySelector('#Vue3Gantt')
    const guide = document.querySelector('.guide')
    inner.scrollLeft = inner.scrollWidth
    box.style.width = inner.scrollWidth + guide.clientWidth + 'px'
    html2canvas(box, {
      removeContainer: true,
    }).then(function(canvas) {
      console.log(canvas.toDataURL())
      box.style.width = '100%'
      const a = document.createElement('a')
      a.href = canvas.toDataURL()
      a.setAttribute('download', '日程图')
      a.click()
      resolve(a.href)
    })
  })
}

defineExpose({
  exportImg
})

</script>

<style>
.dom2img-result {
  display: none;
}
</style>

<style lang="less" scoped>
.gantt {
  --borderWidth: 1px;
  --borderColor: #eee;
  --border: 1px solid #eee;
  --fontSize: 14px;
  --fontColor: #333;
  --itemWidth: v-bind(itemWidth + 'px');
  --itemHeight: v-bind(itemHeight + 'px');
}
* {
  box-sizing: border-box;
}
.gantt {
  width: 100%;
  height: auto;
  user-select: none;
  box-sizing: border-box;
  border: var(--border);
  font-size: var(--fontSize);
  color: var(--fontColor);
  display: flex;
  .guide {
    flex-shrink: 0;
    width: 120px;
    height: 100%;
    border-right: var(--border);
    .desc {
      width: 120px;
      height: 120px;
      border-bottom: var(--border);
      position: relative;
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 169.7056274847714px;
        background-color: var(--borderColor);
        top: 0;
        left: 0;
        transform: rotate(45deg);
        transform-origin: 0 0;
      }
      .date {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .item {
        position: absolute;
        left: 5px;
        bottom: 20px;
      }
    }
    .guide-name {
      width: 100%;
      height: var(--itemHeight);
      border-bottom: var(--border); 
      padding: 2px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      &.last-guide-name {
        border-bottom: none;
      }
    }
  }
  .inner {
    width: 100%;
    overflow-x: auto;
    .date-list {
      width: 100%;
      height: 120px;
      display: flex;
      .month-item {
        width: auto;
        height: 100%;
        border-bottom: var(--border);
        display: flex;
        flex-direction: column;
        .month {
          flex: 1;
          border-left: var(--border);
          border-bottom: var(--border);
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .day-box {
          flex: 2;
          display: flex;
          .day-item {
            width: var(--itemWidth);
            .day {
              width: var(--itemWidth);
              height: 50%;
              border-left: var(--border);
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .week {
              width: var(--itemWidth);
              height: 50%;
              border-left: var(--border);
              border-top: var(--border);
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
        &:first-child {
          .month {
            border-left: none;
          }
          .day-box {
            .first-day-item {
              .day {
                border-left: none;
              }
              .week {
                border-left: none;  
              }
              border-left: none;
            }
          }
        }
      }
      &.first-date-list{
        border-left: none;
      }
    }
    .date-box {
      height: var(--itemHeight);
      display: flex;
      .date-item {
        flex-shrink: 0;
        width: var(--itemWidth);
        height: var(--itemHeight);
        border-left: var(--border);
        border-bottom: var(--border);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        .work-desc {
          width: 100%;
          height: 100%;
          line-height: calc(var(--itemHeight) / 2);
          text-align: center;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        &.date-item-work {
          cursor: pointer;
          position: relative;
          z-index: 1;
        }
        &:first-child {
          border-left: none;
        }
      }
      &:last-child {
        .date-item {
          border-bottom: none;
        }
      }
    }
    .date-active {
      background-color: #caf2ff;
    }
  }
}
</style>