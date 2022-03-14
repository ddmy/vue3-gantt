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


export const fetchThreeDays = () => {
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() + 1
  const currentDate = `${currentYear}-${currentMonth}`
  let prevDate = ''
  if (currentMonth === 1) {
    prevDate = `${currentYear - 1}-12`
  } else {
    prevDate = `${currentYear}-${currentMonth - 1}`
  }
  let nextDate = ''
  if (currentMonth === 12) {
    nextDate = `${currentYear + 1}-1`
  } else {
    nextDate = `${currentYear}-${currentMonth + 1}`
  }

  return [...fetchMonthRangeDay(prevDate), ...fetchMonthRangeDay(currentDate), ...fetchMonthRangeDay(nextDate)]
}