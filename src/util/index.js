// 加工日期范围
export const computedDaysRange = (daysArr, endDay = null) => {
  let result = daysArr
  if (typeof endDay === 'string') {
    result = fethDaysRange(daysArr, endDay)
  }
  return result.map(item => fetchDayDetail(item))
}

// 获取指定日期详细信息
export const fetchDayDetail = (current) => {
  let currentDate = null
  if (typeof current === 'string') {
    currentDate = new Date(current)
  } else if (current instanceof Date) {
    currentDate = current
  }
  const weekName = ["日", "一", "二", "三", "四", "五", "六"]

  return {
    year: String(currentDate.getFullYear()).padStart(4, '0'),
    month: String(currentDate.getMonth() + 1).padStart(2, '0'),
    day: String(currentDate.getDate()).padStart(2, '0'),
    week: weekName[currentDate.getDay()]
  }
}

// 获取指定月份每一天日期 2022-02
export const fethDays = (str) => {
  const month = str.replace(/\//g, '-')
  const monthArr = month.split('-').map(item => Number(item))
  if (monthArr.length !== 2) throw new Error('获取月份日期参数错误:', str)
  const count = new Date(...monthArr, 0).getDate()
  return new Array(count).fill().map((item, index) => index + 1)
}

// 获取指定范围每一天的日期
export const fethDaysRange = (start, stop) => {
  const current = new Date(start.replace(/\//g, '-'))
  const end = new Date(stop)
  const result = []
  while (end >= current) {
    const res = fetchDayDetail(current)
    result.push(`${res.year}-${res.month}-${res.day}`)
    current.setDate(current.getDate() + 1)
  }
  return result
}

// 范围日期按 月份归类
export const splitDaysForMonth = (daysArr) => {
  const res = {}
  daysArr.forEach(item => {
    const name = item.year + '-' + item.month
    if (res[name]) {
      res[name].push(item)
    } else {
      res[name] = [item]
    }
  })
  return Object.values(res)
}

// 查询指定日期是否在指定范围内
export const todayInRange = (today, range) => {
  return fethDaysRange(...range).includes(today)
}

// 获取指定月份日期列表
export const fetchMonthRangeDay = (str) => {
  const dateList = String(str).replace('/', '-').split('-')
  if (dateList.length === 1) {
    dateList.unshift(new Date().getFullYear())
  }
  if (dateList[1] > 12) {
    throw new Error('月份错误!')
  }
  const count = new Date(...dateList, 0).getDate()
  return new Array(count).fill().map((item, index) => String(dateList[0]).padStart(4, '0') + '-' + String(dateList[1]).padStart(2, '0') + '-' + String(index + 1).padStart(2, 0))
}

export const fetchToday = () => {
  const now = new Date()
  const currentYear = String(now.getFullYear()).padStart(4, '0')
  const currentMonth = String(now.getMonth() + 1).padStart(2, '0')
  const currentDay = String(now.getDate()).padStart(2, '0')
  return `${currentYear}-${currentMonth}-${currentDay}`
}

export const fetchThreeDays = () => {
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() + 1
  const currentDate = `${currentYear}-${ String(currentMonth).padStart(2, '0')}`
  let prevDate = ''
  if (currentMonth === 1) {
    prevDate = `${String(currentYear - 1).padStart(4, '0')}-12`
  } else {
    prevDate = `${String(currentYear).padStart(4, '0')}-${String(currentMonth - 1).padStart(2, '0')}`
  }
  let nextDate = ''
  if (currentMonth === 12) {
    nextDate = `${String(currentYear + 1).padStart(4, '0')}-01`
  } else {
    nextDate = `${String(currentYear).padStart(4, '0')}-${String(currentMonth + 1).padStart(2, '0')}`
  }

  return [...fetchMonthRangeDay(prevDate), ...fetchMonthRangeDay(currentDate), ...fetchMonthRangeDay(nextDate)]
}

const dateSplitForValue = (data)  =>  {
  const start = data[0].days[0]
  const end = data.at(-1).days.at(-1)
  const res = {}
  fethDaysRange(start, end).forEach(key => {
       const current = data.map((item, index) => {
          if (item.days.includes(key)) return index
          return false
      }).filter(item => item !== false)
      if (current.length) {
        res[key] = current
      }
  })
  return res
}

export const workListSplitForRepeat = (arr, repeatMode) => {
  return arr.map(schedule => {
    if (schedule.type !== 'normal') return schedule
    const obj = dateSplitForValue(schedule.schedule)
    const values = Object.values(obj)
    const keys = Object.keys(obj)
    const resMap = [...new Set(values.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
    let result = new Array(resMap.length).fill({})
    result = result.map((item, index) => {
        let r = {}
        if (resMap[index].length === 1) {
            r = {
                ...schedule.schedule[resMap[index][0]],
                daysSource: schedule.schedule[resMap[index][0]].days
            }
        } else {
            const list = resMap[index].map(v => schedule.schedule[v])
            let desc = ''
            let name = ''
            if (typeof repeatMode.desc === 'function') {
              desc = repeatMode.desc(list)
            } else {
              desc = repeatMode.desc
            }
            console.log('#######', typeof repeatMode.name === 'function')
            if (typeof repeatMode.name === 'function') {
              name = repeatMode.name(list)
            } else {
              name = repeatMode.name
            }
            r = {
                desc,
                backgroundColor: repeatMode.backgroundColor,
                textColor: repeatMode.textColor,
                name,
                list,
            }
        }
        r.days = values.map((v, i) => {
            if (JSON.stringify(v) === JSON.stringify(resMap[index])) {
                return keys[i]
            }
        }).filter(v => v)
        return r
    })
    schedule.schedule = result
    return schedule
  })
}
