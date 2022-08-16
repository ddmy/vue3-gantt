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
      schedule: [
        {
          id: 2223233,
          name: 'SSSS',
          desc: 'scsscscsc，收入提升30%',
          backgroundColor: '#369',
          textColor: '#fff',
          days: ['2022-02-15', '2022-03-02']
        },
      ]
    },
    {
      name: '小兵张嘎',
      type: 'normal',
      schedule: [
        {
          id: 2223233,
          name: 'SSSS',
          desc: 'scsscscsc，收入提升30%',
          backgroundColor: '#268',
          textColor: '#fff',
          days: ['2022-02-05', '2022-02-13']
        },
      ]
    },
    /////////////////
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
      schedule: [
        {
          id: 2223233,
          name: 'SSSS',
          desc: 'scsscscsc，收入提升30%',
          backgroundColor: '#369',
          textColor: '#fff',
          days: ['2022-02-15', '2022-03-02']
        },
      ]
    },
    {
      name: '小兵张嘎',
      type: 'normal',
      schedule: [
        {
          id: 2223233,
          name: 'SSSS',
          desc: 'scsscscsc，收入提升30%',
          backgroundColor: '#268',
          textColor: '#fff',
          days: ['2022-02-05', '2022-02-13']
        },
      ]
    },
  ],
}