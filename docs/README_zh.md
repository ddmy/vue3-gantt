### Vue3甘特图插件

![gantt](https://blog.ddamy.com/assets/img/gantt.jpeg)

### 简介
基于`vue3.x`开发的精简版甘特图
- [x] 支持导出甘特图Excel文件
- [x] 支持导出甘特图图片
- [x] 支持日程重叠展示
- [x] 支持动态配置响应更新
- [x] 响应式布局，兼容小屏幕展示

> 如果您在使用过程中遇到任何相关问题，欢迎您提 issues😊,

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
import 'vue3-gantt/dist/style.css'
const dateRangeList = ref(['2022-01-01', '2022-03-05'])
const data = ref([
  {
    type: 'normal',
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
    type: 'normal',
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

| 参数名 | 类型 | 默认值 | 说明 |
| ------ | ------ | -------- | ------------ |
| data | Array[Object] | [] | 甘特图数据 |
| dateRangeList | Array | [] | 当前图表内的日期区间，此数组长度为2，内容为起始时间, 格式为'YYYY-MM-DD' |
| itemText | String | null | 表头描述文字 |
| dateText | String | null | 表头描述文字 |
| activeDate | String | 今天 | 当前时间轴高亮显示的一天，（不会覆盖日程样式），'YYYY-MM-DD'格式时间字符串 |
| repeatMode | Object | 见下方 | 重叠日程展示模式配置 |
| itemWidth | Number | 40 | 日期格子的宽度，最小40 |
| itemHeight | Number | 40 | 日期格子的高度度，最小40 |
| scheduleTitle | Function | null | 日程上面展示的文本，function接收日程信息为参数，最终使用该方法返回值渲染 |
| borderColor | String | '#eee' | 表格边框颜色 |

> 组件内容宽度需要自行控制把握最小宽度

### 组件事件

| 参数名 | 类型 | 说明 |
| ------ | ------ | ------------ |
| scheduleClick | Function | 点击日程的回调事件，接收一个日程详情参数 |
| scrollXEnd | Function | 横向滚动条滚动到底部的事件 |
| scrollYEnd | Function | 竖向滚动条滚动到底部的事件 |

### data配置 Array[Object]

| 参数名 | 取值  |说明 |
| ------ | ------ | ------ |
| type | 'alike'\|\|'normal' | 项目类型(展示风格) |
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
  gantt.value.exportImg({ download: true, waterValue: 'YiJio制作' })
}
```
> `exportImg` 方法接收一个`Object`, 配置图片的导出行为, `exportImg` 返回一个`Promise`, 成功状态会接收到图片的base64值
> | 参数名 | 可选值 | 默认值 | 说明 |
> | ------ | ------ | -------- | ---------- |
> | download | `Boolean` | `true` | 是否自动下载图片 |
> | waterValue | `String` | `''` | 图片水印文字, 为空就不添加水印,暂不支持自定义文字样式 |


#### 导出当前甘特图Excel

```html
<Gantt
    ref="gantt"
    ...
/>
<button @click="exportGanttExcel">导出Excel</button>
```
```js
const gantt = ref(null)

const exportGanttExcel = () => {
  gantt.value.exportGanttExcel({ fileName: '测试列表' })
}
```
> `exportGanttExcel`接收一个对象`file`，配置导出文件的信息
> | 参数名 | 可选值 | 默认值 | 说明 |
> | ------ | ------ | -------- | ---------- |
> | fileName | `String` | '数据' | 导出文件名称 |
