#### Vue3甘特图插件
> 基于Vue3的极简甘特图组件

![avatar](https://blog.ddamy.com/assets/img/gantt.jpeg)

### 使用方式
```js
import Gantt from 'vue3-gantt'
```

### 组件接收参数

| 参数名 | 取值 | 默认值 |说明 |
| ------ | ------ | ------ | ------ |
| data | Array[Object] | [] | 甘特图数据 |
| dateRangeList | Array | [] | 当前图表内的日期区间，此数组长度为2，内容为起始时间, 格式为'YYYY-MM-DD' |
| scheduleClick | Function | null | 点击日程的回调事件，接收一个日程详情参数 |
| scrollXEnd | Function | null | 横向滚动条滚动到底部的事件 |
| itemText | String | null | 表头描述文字 |
| dateText | String | null | 表头描述文字 |

### data配置 Array[Object]

| 参数名 | 取值  |说明 |
| ------ | ------ | ------ |
| type | 'alike'\|\|'normal' | 项目类型 |
| color | css颜色格式 | 当前项目背景色, type为'alike'时生效 |
| name | String | 当前项目名称 |
| schedule | Array[Object] | 项目日程 |

### schedule 项目日程配置

| 参数名 |说明 |
| ------ | -------------------- |
| id | 日程全局唯一id |
| name | 日程名称 |
| desc | 日程描述 |
| backgroundColor | 日程背景色 |
| textColor | 日程名称展示文字颜色 |
| days | 日程日期列表`Array`, 数组内容为合法的连续的日期，日期格式为 `YYYY-MM-DD` |
