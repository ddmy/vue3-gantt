import LAY_EXCEL from 'lay-excel'
import { TinyColor } from '@ctrl/tinycolor';

  //将26进制转10进制
var ConvertNum = function (str) {
    var n = 0;
    var s = str.match(/./g);//求出字符数组
    var j = 0;
    for (var i = str.length - 1, j = 1; i >= 0; i--, j *= 26) {
        var c = s[i].toUpperCase();
        if (c < 'A' || c > 'Z') {
            return 0;
        }
        n += (c.charCodeAt(0) - 64) * j;
    }
    return n;
}

//将10进制转26进制
var Convert26 = function(num){
    var str="";
    while (num > 0){
        var m = num % 26;
        if (m == 0){
            m = 26;
        }
        str = String.fromCharCode(m + 64) + str;
        num = (num - m) / 26;
    }
    return str;
}

// 处理16进制简写色值，返回6位
const transColor = val => {
  const color = new TinyColor(val).toHexString()
  return color.substring(1)
}

export function exportExcel (file, rangeDate, list, dateText = '', itemText = '') {
  const { fileName = '数据' } = file
  console.log('导出excel', rangeDate, list)
  // 前三行日期范围
  let data = []
  const headArr = [{ name: `${dateText}-${itemText}` }, {}, {}]
  const headKeys = ['name']
  let monthMerageConfig = []
  const templateLine = { name: '' }
  rangeDate.forEach(item => {
    item.forEach(day => {
      headArr[0][`${day.year}-${day.month}-${day.day}`] = `${day.year}-${day.month}`
      headArr[1][`${day.year}-${day.month}-${day.day}`] = day.day
      headArr[2][`${day.year}-${day.month}-${day.day}`] = day.week
      headKeys.push(`${day.year}-${day.month}-${day.day}`)

      templateLine[`${day.year}-${day.month}-${day.day}`] = ''
    })
    // 计算顶部月份合并范围
    const prev = monthMerageConfig.at(-1) ? Convert26(ConvertNum(monthMerageConfig.at(-1).at(-1))) : 'A'
    const end = Convert26(ConvertNum(prev) + item.length)
    monthMerageConfig.push([Convert26(ConvertNum(prev) + 1), end])
  })
  // 处理顶部月份合并范围索引
  monthMerageConfig = monthMerageConfig.map(item => {
    item = item.map(index => index + 1)
    return item
  })
  data = data.concat(headArr)

  
  const totalDays = headKeys.length - 1

  // 循环计算数据列
  list.forEach(item => {
    const tmp = JSON.parse(JSON.stringify(templateLine))
    tmp.name = item.name
    tmp.type = item.type
    tmp.renderWorks = item.renderWorks
    data.push(tmp)
  })

  const dataMergeConfig = []
  /**
   * 记录需要设置的单元格样式
   * {
   *  type: 1,  // 1 设置背景色, 文字颜色
   *  backgroundColor, textColor: 设置的值
   *  range: 设置的范围
   * }
   */
  const setStyleList = []
  data.forEach((item, index) => {
    // excel中的行数
    const currentLine = index + 1
    // 默认占据整行的数据
    if (item.type === 'alike') {
      dataMergeConfig.push([`B${currentLine}`, `${Convert26(totalDays + 1)}${currentLine}`])
      // 设置单元格背景色
      setStyleList.push({
        type: 1,
        backgroundColor: 'F6F6F6',
        range: `A${currentLine}:${Convert26(totalDays + 1)}${currentLine}`
      })
    } else if (item.renderWorks) {
      item.renderWorks.forEach(renderItem => {
        if (renderItem.type === 'works') {
          // 当前日程的起始位置
          const startFindIndex = headKeys.findIndex(headItem => headItem === renderItem.days[0])
          const startIndex = Convert26((startFindIndex < 1 ? 1 : startFindIndex) + 1)
          // 当前日程结束位置 
          const endFIndIndex = headKeys.findIndex(headItem => headItem === renderItem.days.at(-1))
          const endIndex = Convert26((endFIndIndex < 1 ? headKeys.length - 1 : endFIndIndex) + 1)
          // 处理单元格合并
          dataMergeConfig.push([`${startIndex}${currentLine}`, `${endIndex}${currentLine}`])
          // 设置单元格背景色
          setStyleList.push({
            type: 1,
            backgroundColor: renderItem.backgroundColor.replace('#', ''),
            textColor: renderItem.textColor.replace('#', ''),
            range: `${startIndex}${currentLine}:${endIndex}${currentLine}`
          })
          // 设置单元格内容
          renderItem.days.forEach(day => {
            data[currentLine - 1][day] = renderItem.name
          })
        }
      })
    }
  })


  const merageConfig = [ ['A1', 'A3'], ...monthMerageConfig, ...dataMergeConfig ]
  // console.log('merageConfig--->', merageConfig, dataMergeConfig)
  // console.log('data--->', data)
  const resultData = LAY_EXCEL.filterExportData(data, headKeys)
  const mergeConf = LAY_EXCEL.makeMergeConfig(merageConfig)
  const colConf = LAY_EXCEL.makeColConfig({ A: 120, ZZZZ: 60 }, 60)
  const rowConf = LAY_EXCEL.makeRowConfig({ 1: 40, 99999: 40 }, 40)
  
  LAY_EXCEL.setExportCellStyle(resultData, null, {
    s: {
      alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
      border: {
        top: { style: 'thin', color: { rgb: 'E2E4E8' } },
        left: { style: 'thin', color: { rgb: 'E2E4E8' } },
        right: { style: 'thin', color: { rgb: 'E2E4E8' } },
        bottom: { style: 'thin', color: { rgb: 'E2E4E8' } },
      }
    }
  })

  // 批量应用单元格样式
  setStyleList.forEach(item => {
    if (item.type === 1) {
      LAY_EXCEL.setExportCellStyle(resultData, item.range, { 
        s: {
          fill: { bgColor: { indexed: 64 }, fgColor: { rgb: transColor(item.backgroundColor || 'FFFFFF')} },
          font: { color: { rgb: transColor(item.textColor || '000000') } },
          border: {
            top: { style: 'thin', color: { rgb: 'E2E4E8' } },
            left: { style: 'thin', color: { rgb: 'E2E4E8' } },
            right: { style: 'thin', color: { rgb: 'E2E4E8' } },
            bottom: { style: 'thin', color: { rgb: 'E2E4E8' } },
          },
          alignment: { horizontal: 'center', vertical: 'center', wrapText: true }
        }
      })
    }
  })

  // console.log(resultData)
  // return
  LAY_EXCEL.exportExcel({ sheet1: resultData },`${fileName}.xlsx`, 'xlsx', {
    extend: {
      '!cols': colConf,
      '!rows': rowConf,
      '!merges': mergeConf
    }
  })
}