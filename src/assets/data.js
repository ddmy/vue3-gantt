import { fethDaysRange } from '../util/index'
/**
 * alike: 全部一样
 */
export default {
  data1: [
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
  ],
  data2: [
    {
      name: '长线版本节点',
      color: '#f6f6f6',
      type: 'alike'
    },
    {
      name: '和平精英',
      type: 'normal',
      schedule: [
        {
          id: 1111,
          name: '元旦玩法+S级商业化',
          desc: '活跃提升20%，收入提升50%',
          backgroundColor: '#ffdebc',
          textColor: '#ff5d35',
          // days: ['2022-01-30', '2022-01-31', '2022-02-01', '2022-02-02']
          days: ['2022-01-30', '2022-02-07']
        },
        {
          id: 1112,
          name: 'S26新赛季，战令更新',
          desc: '活跃提升20%，收入提升30%',
          backgroundColor: '#ffdebc',
          textColor: '#ff5d35',
          days: ['2022-02-06', '2022-02-07', '2022-02-08', '2022-02-09']
        },
        {
          id: 1113,
          name: '新皮肤活动',
          desc: '活跃提升20%，收入提升30%',
          backgroundColor: '#ffdebc',
          textColor: '#ff5d35',
          days: ['2022-02-18', '2022-02-19', '2022-02-20', '2022-02-21', '2022-02-22', '2022-02-23', '2022-02-24']
        },
      ]
    },
    {
      name: '金铲铲之战',
      type: 'normal',
      schedule: [
        {
          id: 2221,
          name: '元旦玩法+S级商业化',
          desc: '活跃提升20%，收入提升50%',
          backgroundColor: '#003333',
          textColor: '#999999',
          days: ['2022-01-28','2022-01-29','2022-01-30', '2022-01-31', '2022-02-01']
        },
        {
          id: 2222,
          name: 'S26新赛季，战令更新',
          desc: '活跃提升20%，收入提升30%',
          backgroundColor: '#99AACC',
          textColor: '#336699',
          days: ['2022-01-30', '2022-01-31', '2022-02-01', '2022-02-02', '2022-02-03', '2022-02-04', '2022-02-05']
        },
        {
          id: 2223,
          name: '五星级活动',
          desc: '活跃提升20%，收入提升30%',
          backgroundColor: '#006633',
          textColor: '#CCCC66',
          days: ['2022-02-10', '2022-02-16']
        },
      ]
    },
    {
      name: '西游记',
      type: 'normal',
      schedule: [
        {
          id: 2221,
          name: '元旦玩法+S级商业化',
          desc: '活跃提升20%，收入提升50%',
          backgroundColor: '#003333',
          textColor: '#999999',
          days: ['2022-04-28','2022-05-01']
        },
        {
          id: 2222,
          name: 'S26新赛季，战令更新',
          desc: '活跃提升20%，收入提升30%',
          backgroundColor: '#99CCCC',
          textColor: '#336699',
          days: ['2022-03-20', '2022-04-05']
        },
        {
          id: 2223,
          name: 'FGDG级活动',
          desc: '活跃提升20%，收入提升30%',
          backgroundColor: '#CC6633',
          textColor: '#CCCC66',
          days: ['2022-02-26', '2022-03-11']
        },
      ]
    },
    {
      name: '水浒传',
      type: 'normal',
      schedule: [
        {
          id: 2221,
          name: '元旦玩法+S级商业化',
          desc: '活跃提升20%，收入提升50%',
          backgroundColor: '#003333',
          textColor: '#999999',
          days: ['2022-02-12','2022-02-21']
        },
        {
          id: 2222,
          name: 'S26新赛季，战令更新',
          desc: '活跃提升20%，收入提升30%',
          backgroundColor: '#99CCCC',
          textColor: '#336699',
          days: ['2022-02-23', '2022-03-05']
        },
        {
          id: 2223,
          name: 'RRRRR星级活动',
          desc: '活跃提升20%，收入提升30%',
          backgroundColor: '#006633',
          textColor: '#CCCC66',
          days: ['2022-02-16', '2022-02-19']
        },
      ]
    },
    {
      name: '三国演义',
      type: 'normal',
      schedule: []
    },
    {
      name: '平凡的世界',
      type: 'normal',
      schedule: [
        {
          id: 2223233,
          name: '无敌大马路',
          desc: 'scsscscsc，收入提升30%',
          backgroundColor: '#369',
          textColor: '#fff',
          days: ['2022-01-15', '2022-03-02']
        },
      ]
    },
    {
      name: '白鹿原',
      type: 'normal',
      schedule: []
    },
    {
      name: '小兵张嘎',
      type: 'normal',
      schedule: []
    },
    {
      name: '冲冲冲',
      type: 'normal',
      schedule: []
    },
    {
      name: '冲冲冲1',
      type: 'normal',
      schedule: []
    },
    {
      name: '冲冲冲2',
      type: 'normal',
      schedule: []
    },
    {
      name: '冲冲冲3',
      type: 'normal',
      schedule: []
    },
    {
      name: '冲冲冲4',
      type: 'normal',
      schedule: []
    },
    {
      name: '冲冲冲5',
      type: 'normal',
      schedule: []
    },
    {
      name: '冲冲冲6',
      type: 'normal',
      schedule: []
    },
  ],
  data3: [{"name":"游戏","color":"#f6f6f6","type":"alike"},{"name":"ttttt","type":"normal","schedule":[{"id":"1","labelScheduleId":"34","modeId":"1","step":"0","stepIndex":"0","stepType":"2","timeAuto":"0","subProAuto":"0","subProAll":"0","name":"ver","startTime":"2022-06-08 00:00:00","endTime":"2022-06-10 00:00:00","modeJson":{"tag":["130"],"id":"1","parent":"0","name":"test0","showExport":"0","labelScheduleId":"34","defaultTag":["130"],"gameType":"0","approve":"0","acceptanceType":"0","version":"1","status":"1","updateBy":"5A68A55F7AE8F2094D58A544171C89BF","updateTime":"2022-06-02 10:38:48","createBy":"5A68A55F7AE8F2094D58A544171C89BF","createTime":"2022-06-02 10:38:48"},"version":"1","updateBy":"14A945C43E84EB3CCB770417C104FDB7","updateTime":"2022-06-02 11:16:35","createBy":"14A945C43E84EB3CCB770417C104FDB7","createTime":"2022-06-02 11:16:35","tagArr":[{"nodeId":"1","id":"130","labelScheduleId":"34","name":"端游","mutex":"0","hide":"0","index":"0","bgColor":"#FF0000","wdColor":"#fff","createTime":"2022-06-02 15:12:34"}],"json":[{"id":"700","name":"节点标题","type":"3","modeId":"1","modeTypeId":"1","modeName":"test1111","required":"1","timeShow":"1","export":"","gameType":"","defaultName":"1111","timeAccurate":"","photoSize":"","multiple":"","option":"","index":"3","extend1":"","extend2":"","extend3":"","updateTime":"2022-06-02 10:38:48","createTime":"2022-06-02 10:38:48","value":"ver"}],"desc":"","backgroundColor":"#FF0000","textColor":"#fff","days":["2022-06-08","2022-06-09","2022-06-10"]},{"id":"2","labelScheduleId":"34","modeId":"1","step":"16","stepIndex":"1","stepType":"1","timeAuto":"0","subProAuto":"0","subProAll":"0","name":"1","startTime":"2022-06-01 00:00:00","endTime":"2022-06-02 00:00:00","modeJson":{"tag":["130","131"],"id":"1","parent":"0","name":"test0","showExport":"0","labelScheduleId":"34","defaultTag":["130"],"gameType":"0","approve":"1","acceptanceType":"0","version":"2","status":"1","updateBy":"4EC1C328D063E81DF77EC29F29D76689","updateTime":"2022-06-02 11:21:25","createBy":"5A68A55F7AE8F2094D58A544171C89BF","createTime":"2022-06-02 10:38:48"},"version":"2","updateBy":"4EC1C328D063E81DF77EC29F29D76689","updateTime":"2022-06-02 11:22:17","createBy":"4EC1C328D063E81DF77EC29F29D76689","createTime":"2022-06-02 11:22:17","tagArr":[{"nodeId":"2","id":"130","labelScheduleId":"34","name":"端游","mutex":"0","hide":"0","index":"0","bgColor":"#FF0000","wdColor":"#fff","createTime":"2022-06-02 15:12:34"},{"nodeId":"2","id":"131","labelScheduleId":"34","name":"手游","mutex":"0","hide":"0","index":"1","bgColor":"#00FFF7","wdColor":"#000000","createTime":"2022-06-02 15:12:34"}],"json":[{"id":"700","name":"节点标题","type":"3","modeId":"1","modeTypeId":"1","modeName":"test1111","required":"1","timeShow":"1","export":"","gameType":"","defaultName":"1111","timeAccurate":"","photoSize":"","multiple":"","option":"","index":"3","extend1":"","extend2":"","extend3":"","updateTime":"2022-06-02 11:21:25","createTime":"2022-06-02 10:38:48","value":"1"}],"desc":"","backgroundColor":"#FF0000","textColor":"#fff","days":["2022-06-01","2022-06-02"]},{"id":"3","labelScheduleId":"34","modeId":"1","step":"16","stepIndex":"1","stepType":"1","timeAuto":"0","subProAuto":"0","subProAll":"0","name":"1111","startTime":"2022-06-06 00:00:00","endTime":"2022-06-06 00:00:00","modeJson":{"tag":["130"],"id":"1","parent":"0","name":"test0","showExport":"0","labelScheduleId":"34","defaultTag":["130"],"gameType":"0","approve":"1","acceptanceType":"0","version":"2","status":"1","updateBy":"4EC1C328D063E81DF77EC29F29D76689","updateTime":"2022-06-02 11:21:25","createBy":"5A68A55F7AE8F2094D58A544171C89BF","createTime":"2022-06-02 10:38:48"},"version":"2","updateBy":"5A68A55F7AE8F2094D58A544171C89BF","updateTime":"2022-06-02 14:19:47","createBy":"5A68A55F7AE8F2094D58A544171C89BF","createTime":"2022-06-02 14:19:47","tagArr":[{"nodeId":"3","id":"130","labelScheduleId":"34","name":"端游","mutex":"0","hide":"0","index":"0","bgColor":"#FF0000","wdColor":"#fff","createTime":"2022-06-02 15:12:34"}],"json":[{"id":"700","name":"节点标题","type":"3","modeId":"1","modeTypeId":"1","modeName":"test1111","required":"1","timeShow":"1","export":"","gameType":"","defaultName":"1111","timeAccurate":"","photoSize":"","multiple":"","option":"","index":"3","extend1":"","extend2":"","extend3":"","updateTime":"2022-06-02 11:21:25","createTime":"2022-06-02 10:38:48","value":"1111"}],"desc":"","backgroundColor":"#FF0000","textColor":"#fff","days":["2022-06-06"]}]},{"name":"服务器","color":"#f6f6f6","type":"alike"},{"name":"角色扮演1","type":"normal","schedule":[{"id":"4","labelScheduleId":"37","modeId":"2","step":"16","stepIndex":"1","stepType":"1","timeAuto":"0","subProAuto":"0","subProAll":"0","name":"2","startTime":"2022-05-03 00:00:00","endTime":"2022-07-07 00:00:00","modeJson":{"tag":["137"],"id":"2","parent":"0","name":"凄凄切切q","showExport":"0","labelScheduleId":"37","defaultTag":["136"],"gameType":"0","approve":"1","acceptanceType":"1","version":"2","status":"1","updateBy":"4EC1C328D063E81DF77EC29F29D76689","updateTime":"2022-06-02 15:48:14","createBy":"5A68A55F7AE8F2094D58A544171C89BF","createTime":"2022-06-02 15:05:29","isUpdatePower":1,"isWalkFollowPower":0,"isFollowPower":0},"version":"2","updateBy":"4EC1C328D063E81DF77EC29F29D76689","updateTime":"2022-06-02 15:59:33","createBy":"4EC1C328D063E81DF77EC29F29D76689","createTime":"2022-06-02 15:58:18","tagArr":[{"nodeId":"4","id":"137","labelScheduleId":"37","name":"怀旧服","mutex":"0","hide":"0","index":"1","bgColor":"#000","wdColor":"#fff","createTime":"2022-06-02 14:28:31"}],"json":[{"id":"706","name":"节点标题","type":"3","modeId":"2","modeTypeId":"3","modeName":"节点标题","required":"1","timeShow":"1","export":"","gameType":"","defaultName":"请选择节点","timeAccurate":"","photoSize":"","multiple":"","option":"","index":"3","extend1":"","extend2":"","extend3":"","updateTime":"2022-06-02 15:48:14","createTime":"2022-06-02 15:05:29","value":"2"}],"desc":"","backgroundColor":"#000","textColor":"#fff","days":["2022-05-03","2022-05-04","2022-05-05","2022-05-06","2022-05-07","2022-05-08","2022-05-09","2022-05-10","2022-05-11","2022-05-12","2022-05-13","2022-05-14","2022-05-15","2022-05-16","2022-05-17","2022-05-18","2022-05-19","2022-05-20","2022-05-21","2022-05-22","2022-05-23","2022-05-24","2022-05-25","2022-05-26","2022-05-27","2022-05-28","2022-05-29","2022-05-30","2022-05-31","2022-06-01","2022-06-02","2022-06-03","2022-06-04","2022-06-05","2022-06-06","2022-06-07","2022-06-08","2022-06-09","2022-06-10","2022-06-11","2022-06-12","2022-06-13","2022-06-14","2022-06-15","2022-06-16","2022-06-17","2022-06-18","2022-06-19","2022-06-20","2022-06-21","2022-06-22","2022-06-23","2022-06-24","2022-06-25","2022-06-26","2022-06-27","2022-06-28","2022-06-29","2022-06-30","2022-07-01","2022-07-02","2022-07-03","2022-07-04","2022-07-05","2022-07-06","2022-07-07"]}]}]
}