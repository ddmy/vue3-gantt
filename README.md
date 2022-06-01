#### Vue3甘特图插件

> 基于Vue3的甘特图组件

![gantt](https://blog.ddamy.com/assets/img/gantt.jpeg)

[Demo在线预览](https://blog.ddamy.com/assets/demo/gantt/)

### 使用方式
```html
  <Gantt
    :data="data"
    itemText="项目"
    dateText="日期"
    :dateRangeList="dateRangeList"
  />
```
```js
import { ref } from 'vue'
import Gantt from 'vue3-gantt'
const dateRangeList = ref(['2022-01-01', '2022-03-05'])
const data = ref([
  {
    type: 'normal', // 代表
    color: '',
    name: '项目1',
    schedule: [
      {
        id: 333330,
        name: '900勇士同时在线庆祝活动',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: 'rgb(253, 211, 172)',
        textColor: 'rgb(245, 36, 9)',
        days: ["2022-01-15","2022-02-05"]
      },
      {
        id: 555550,
        name: 'XXXXXX',
        desc: '这个活动很重要，6666666营收数百万，跨部门合作的一个大项目，BOSS亲自下场坐镇指挥，大家一定要团结一心!',
        backgroundColor: '#28f',
        textColor: '#fff',
        days: ["2022-02-15","2022-02-25"]
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
        days: ["2022-02-25","2022-03-10"]
      }
    ],
  },
])
```

### 组件接收参数

| 参数名 | 类型 | 默认值 | 可选值 | 说明 |
| ------ | ------ | -------- | -- | ------------ |
| data | Array[Object] | [] | - | 甘特图数据 |
| dateRangeList | Array | [] | - | 当前图表内的日期区间，此数组长度为2，内容为起始时间, 格式为'YYYY-MM-DD' |
| itemText | String | null | - | 表头描述文字 |
| dateText | String | null | - | 表头描述文字 |
| activeDate | String | 今天 | - | 当前时间轴高亮显示的一天，（不会覆盖日程样式），'YYYY-MM-DD'格式时间字符串 |
| repeatMode | Object | 见下方 | - | 重叠日程展示模式配置 |
| itemWidth | Number | 40 | - | 日期格子的宽度，最小40 |
| itemHeight | Number | 40 | - | 日期格子的高度度，最小40 |
| scheduleTitle | Function | null | - | 日程上面展示的文本，function接收日程信息为参数，最终使用该方法返回值渲染 |
| borderColor | String | '#eee' | - | 表格边框颜色 |

> 组件内容宽度需要自行控制把握最小宽度

### 组件事件

| 参数名 | 类型 | 默认值 | 可选值 | 说明 |
| ------ | ------ | -------- | -- | ------------ |
| scheduleClick | Function | null | - | 点击日程的回调事件，接收一个日程详情参数 |
| scrollXEnd | Function | null | - | 横向滚动条滚动到底部的事件 |
| scrollYEnd | Function | null | - | 竖向滚动条滚动到底部的事件 |

### data配置 Array[Object]

| 参数名 | 取值  |说明 |
| ------ | ------ | ------ |
| type | 'alike'\|\|'normal' | 项目类型 |
| color | css颜色格式 | 当前项目背景色, type为'alike'时生效 |
| name | String | 当前项目名称 |
| schedule | Array[Object] | 项目日程 |

### schedule 项目日程配置

> 为了便于业务开发，可以在以下基础上任意拓展字段

| 参数名 |说明 |
| ------ | -------------------- |
| id | 日程全局唯一id |
| name | 日程名称 |
| desc | 日程描述 |
| backgroundColor | 日程背景色 |
| textColor | 日程名称展示文字颜色 |
| days | 日程日期列表`Array`, 数组内容为合法的连续的日期，日期格式为 `YYYY-MM-DD`,也可以简写为长度为2的数组，数组内容分别为起始日期 |

### repeatMode配置 Object

| 参数名 | 可选值 | 默认值 | 说明 |
| ------ | ------ | -------- | ---------- |
| mode | 'cover'\|\|'extract' | 'cover' | 重叠日程的处理方式，正常覆盖或者单独提取重复日程再组合, cover会忽略repeatMode其余选项 |
| backgroundColor | css颜色格式 | '#FFFFCC' | extract模式下的背景色 |
| textColor | css颜色格式 | '#336666' | extract模式下的文字颜色 |
| name | `String`\|\|`Function` | '重叠日程' | 重叠日程的展示文字，Function接收一个list参数，参数为重叠日程Array |
| desc | `String`\|\|`Function` | '这是多个日程' | 重叠日程的描述文字，Function接收一个list参数，参数为重叠日程Array |


### 组件实例对外暴露的方法

#### 导出当前甘特图的完整快照图片

```html
<Gantt
    ref="gantt"
    ...
/>
<button @click="exportImg">下载图片</button>
```
```js
const gantt = ref(null)

const exportImg = () => {
  gantt.value.exportImg()
}
```
> `exportImg` 方法接收一个布尔值, 如果为`false`, 则不会自动下载图片. `exportImg` 返回一个`Promise`, 成功状态会接收到图片的base64值