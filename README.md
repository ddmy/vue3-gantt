### Vue3 Gantt Chart Component

![gantt](https://blog.ddamy.com/assets/img/gantt.jpeg)

[简体中文](https://github.com/ddmy/vue3-gantt/blob/master/docs/README_zh.md)

### Introduction
A simplified Gantt chart component developed based on vue3.x:
- [x] Supports exporting the Gantt chart to an Excel file.
- [x] Supports exporting the Gantt chart as an image.
- [x] Supports displaying overlapping schedules.
- [x] Supports dynamic configuration for responsive updates.
- [x] Responsive layout, compatible with small screens.

> If you encounter any issues during use, feel free to raise issues 😊.

[Demo Online Preview](https://blog.ddamy.com/assets/demo/gantt/)

### Usage
```html
  <Gantt
    :data="data"
    itemText="Project"
    dateText="Date"
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
    name: 'Project 1',
    schedule: [
      {
        id: 333330,
        name: '900 Warriors Simultaneous Online Celebration Event',
        desc: 'This event is very important, generating millions of revenue. It is a cross-departmental collaboration and a major project with the CEO personally present to command. Everyone must work together!',
        backgroundColor: 'rgb(253, 211, 172)',
        textColor: 'rgb(245, 36, 9)',
        days: ["2022-01-15","2022-02-05"]
      },
      {
        id: 555550,
        name: 'XXXXXX',
        desc: 'This event is very important, generating millions of revenue. It is a cross-departmental collaboration and a major project with the CEO personally present to command. Everyone must work together!',
        backgroundColor: '#28f',
        textColor: '#fff',
        days: ["2022-02-15","2022-02-25"]
      },
    ],
  },
  {
    type: 'normal',
    color: '',
    name: 'Meteor Butterfly Sword',
    schedule: [
      {
        id: 222221,
        name: 'Chinese New Year Event',
        desc: 'This event is very important, generating millions of revenue. It is a cross-departmental collaboration and a major project with the CEO personally present to command. Everyone must work together!',
        backgroundColor: '#482',
        textColor: '#fff',
        days: ["2022-02-25","2022-03-10"]
      }
    ],
  },
])
```

### Component Props

| Key | Type | Default | Description |
| ------ | ------ | -------- | ------------ |
| data | Array[Object] | [] | antt chart data |
| dateRangeList | Array | [] | The date range within the current chart. This array should have a length of 2, with elements as the start and end date in the format 'YYYY-MM-DD'. |
| itemText | String | null | The header description for the items in the Gantt chart. |
| dateText | String | null | The header description for the dates in the Gantt chart. |
| activeDate | String | Today | The day to be highlighted on the timeline (does not override schedule styles). Format: 'YYYY-MM-DD'. |
| repeatMode | Object | See below | Configuration for handling overlapping schedules. |
| itemWidth | Number | 40 | - | The width of date cells, minimum 40. |
| itemHeight | Number | 40 | - | The height of date cells, minimum 40. |
| scheduleTitle | Function | null | - | A function to display custom text above the schedule. It receives the schedule information as a parameter and should return the text to be rendered. |
| borderColor | String | '#eee' | - | The color of the table borders. |

> The content width of the component needs to be controlled manually to ensure the minimum width.

### Component Events

| Event | Type | Description |
| ------ | ------ | ------------ |
| scheduleClick | Function | Callback event when clicking on a schedule. Receives the schedule details as a parameter. |
| scrollXEnd | Function | Event triggered when the horizontal scrollbar reaches the end. |
| scrollYEnd | Function | Event triggered when the vertical scrollbar reaches the end. |

### Data Configuration: data Array[Object]

| Key | Value  | Description |
| ------ | ------ | ------ |
| type | 'alike'\|\|'normal' | The project type (display style). |
| color | CSS color format | Background color for the current project. Applicable when the type is 'alike'. |
| name | String | The name of the current project. |
| schedule | Array[Object] | The project schedules. |

### Schedule Configuration: schedule Object

> For easier development, you can extend additional fields based on the following.

| Key | Description |
| ------ | -------------------- |
| id | A globally unique ID for the schedule. |
| name | The name of the schedule. |
| desc | Description of the schedule. |
| backgroundColor | Background color for the schedule. |
| textColor | Text color for the schedule name. |
| days | Array of Schedule Dates | The array contains valid and consecutive dates in the format YYYY-MM-DD. Alternatively, it can be represented as an array of two elements denoting the start and end dates. |

### repeatMode Configuration: Object

| Key | Options | Default | 说Description明 |
| ------ | ------ | -------- | ---------- |
| mode | 'cover'\|\|'extract' | 'cover' | Handling mode for overlapping schedules. 'cover' will simply overlap schedules, while 'extract' will extract and group overlapping schedules separately. |
| backgroundColor | CSS color format | '#FFFFCC' | Background color for the extracted schedules in 'extract' mode. |
| textColor | CSS color format | '#336666' | 	Text color for the extracted schedules in 'extract' mode. |
| name | `String`\|\|`Function` | 'Overlapping Schedules' | Text to display for overlapping schedules. If it's a function, it receives a list of overlapping schedules as a parameter. |
| desc | `String`\|\|`Function` | 'These are multiple schedules.' | Description to display for overlapping schedules. If it's a function, it receives a list of overlapping schedules as a parameter. |


### Component Instance Methods

#### Export Full Snapshot Image of the Current Gantt Chart

```html
<Gantt
    ref="gantt"
    ...
/>
<button @click="exportImg">Download Image</button>
```

```js
const gantt = ref(null)

const exportImg = () => {
  gantt.value.exportImg({ download: true, waterValue: 'Made by YiJio' })
}
```
> The exportImg method accepts an Object to configure the behavior of exporting the image. It returns a Promise, and upon successful completion, it receives the base64 value of the image.
> | Parameter | Optional Values | Default Value | Description |
> | ------ | ------ | -------- | ---------- |
> | download | `Boolean` | `true` | Whether to automatically download the image. |
> | waterValue | `String` | `''` | Watermark text to be added to the image. If empty, no watermark will be added. Customizing the text style is not supported at the moment. |


#### Exporting Current Gantt Chart to Excel

```html
<Gantt
    ref="gantt"
    ...
/>
<button @click="exportGanttExcel">Export Excel</button>
```
```js
const gantt = ref(null)

const exportGanttExcel = () => {
  gantt.value.exportGanttExcel({ fileName: 'TestList' })
}
```
> The exportGanttExcel method receives an Object named file to configure the export file information.
> | Parameter | Optional Values | Default Value | Description |
> | ------ | ------ | -------- | ---------- |
> | fileName | `String` | '数据' | The name of the exported file. |
