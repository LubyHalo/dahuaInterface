// const navList1 = [{
//   navTitle: '访客接口',
//   index: '1',
//   link: '/',
//   subNavList: [{
//     navTitle: '访客预约',
//     index: '1-1',
//     // 1.访客预约
//     subNavList: [{
//       navTitle: '访客预约',
//       index: '1-1-1'
//     }, {
//       navTitle: '查询访客预约信息',
//       index: '1-1-2'
//     }, {
//       navTitle: '查询访客预约信息',
//       index: '1-1-3'
//     }, {
//       navTitle: '查询访客预约信息',
//       index: '1-1-4'
//     }]
//   }, {
//     navTitle: '访客信息',
//     index: '1-2',
//     // 2.访客信息
//     subNavList: [{
//       navTitle: '查询访客信息',
//       index: '1-2-1'
//     }, {
//       navTitle: '访客退卡',
//       index: '1-2-2'
//     }, {
//       navTitle: '统计在访人数',
//       index: '1-2-3'
//     }, {
//       navTitle: '查询单个访客信息',
//       index: '1-2-4'
//     }, {
//       navTitle: '修改访客卡号',
//       index: '1-2-5'
//     }]
//   }, {
//     navTitle: '访客黑名单',
//     index: '1-3',
//     // 3.访客黑名单
//     subNavList: [{
//       navTitle: '添加访客黑名单',
//       index: '1-3-1'
//     }, {
//       navTitle: '查询黑名单',
//       index: '1-3-2'
//     }, {
//       navTitle: '删除黑名单',
//       index: '1-3-3'
//     }, {
//       navTitle: '修改访客黑名单',
//       index: '1-3-4'
//     }]
//   }, {
//     navTitle: '访客记录查询',
//     index: '1-4',
//     // 4.访客记录查询
//     subNavList: [{
//       navTitle: '超时报表',
//       index: '1-4-1'
//     }, {
//       navTitle: '刷卡记录查询',
//       index: '1-4-2'
//     }]
//   }, {
//     navTitle: '岗亭管理',
//     index: '1-5',
//     // 5.岗亭管理
//     subNavList: [{
//       navTitle: '添加岗亭',
//       index: '1-5-1'
//     }, {
//       navTitle: '修改岗亭',
//       index: '1-5-2'
//     }, {
//       navTitle: '查询岗亭',
//       index: '1-5-3'
//     }, {
//       navTitle: '删除岗亭',
//       index: '1-5-4'
//     }]
//   }, {
//     navTitle: '日志管理',
//     index: '1-6',
//     // 6.日志管理
//     subNavList: [{
//       navTitle: '设备状态日志',
//       index: '1-6-1'
//     }, {
//       navTitle: '管理日志',
//       index: '1-6-2'
//     }]
//   }]
// }]

const navList = [{
  title: '访客接口',
  index: '1',
  link: '/',
  disabled: false,
  subNavList: [{
    title: '访客预约',
    index: '1-1',
    link: '/'
  }, {
    title: '访客信息',
    index: '1-2',
    link: '/'
  }, {
    title: '访客黑名单',
    index: '1-3',
    link: '/'
  }, {
    title: '访客记录查询',
    index: '1-4',
    link: '/'
  }, {
    title: '岗亭管理',
    index: '1-5',
    link: '/'
  }, {
    title: '日志管理',
    index: '1-6',
    link: '/'
  }]
}, {
  title: '考勤接口(x)',
  index: '2',
  link: '/',
  disabled: true,
  subNavList: [{
    title: '考勤点设置',
    index: '2-1',
    link: '/'
  }, {
    title: '考勤规则设置',
    index: '2-2',
    link: '/'
  }, {
    title: '班次设置',
    index: '2-3',
    link: '/'
  }, {
    title: '班组设置',
    index: '2-4',
    link: '/'
  }, {
    title: '排班设置',
    index: '2-5',
    link: '/'
  }, {
    title: '考勤调整',
    index: '2-6',
    link: '/'
  }, {
    title: '考勤日志',
    index: '2-7',
    link: '/'
  }, {
    title: '报表统计',
    index: '2-8',
    link: '/'
  }]
}, {
  title: '门禁接口',
  index: '3',
  link: '/',
  disabled: false,
  subNavList: [{
    title: '设备管理',
    index: '3-1',
    link: '/'
  }, {
    title: '开门计划',
    index: '3-2',
    link: '/'
  }, {
    title: '门组权限',
    index: '3-3',
    link: '/'
  }, {
    title: '按人授权',
    index: '3-4',
    link: '/'
  }, {
    title: '按门授权',
    index: '3-5',
    link: '/'
  }, {
    title: '发卡复核(x)',
    index: '3-6',
    link: '/'
  }, {
    title: '门通道控制',
    index: '3-7',
    link: '/'
  }, {
    title: '记录查询',
    index: '3-8',
    link: '/'
  }, {
    title: '设备状态日志',
    index: '3-9',
    link: '/'
  }, {
    title: '服务查询',
    index: '3-10',
    link: '/'
  }]
}, {
  title: '人员卡片接口',
  index: '4',
  link: '/',
  disabled: false,
  subNavList: [{
    title: '人员管理',
    index: '4-1',
    link: '/'
  }, {
    title: '卡片管理',
    index: '4-2',
    link: '/'
  }]
}, {
  title: '梯控接口(x)',
  index: '5',
  link: '/',
  disabled: true,
  subNavList: [{
    title: '梯控管理',
    index: '5-1',
    link: '/'
  }, {
    title: '梯控授权',
    index: '5-2',
    link: '/'
  }]
}, {
  title: '系统配置接口(x)',
  index: '6',
  link: '/',
  disabled: true,
  subNavList: [{
    title: '节假日配置',
    index: '6-1',
    link: '/'
  }, {
    title: '身份配置',
    index: '6-2',
    link: '/'
  }]
}, {
  title: '消费接口',
  index: '7',
  link: '/',
  disabled: false,
  subNavList: [{
    title: '营业单位管理',
    index: '7-1',
    link: '/'
  }, {
    title: '消费设备',
    index: '7-2',
    link: '/'
  }, {
    title: '规则设置',
    index: '7-3',
    link: '/'
  }, {
    title: '充值管理',
    index: '7-4',
    link: '/'
  }, {
    title: '日志查询',
    index: '7-5',
    link: '/'
  }, {
    title: '报表统计',
    index: '7-6',
    link: '/'
  }, {
    title: '参数设置',
    index: '7-7',
    link: '/'
  }, {
    title: '消费授权',
    index: '7-8',
    link: '/'
  }]
}, {
  title: '巡更接口(x)',
  index: '8',
  link: '/',
  disabled: true,
  subNavList: [{
    title: '巡更点设置',
    index: '8-1',
    link: '/'
  }, {
    title: '班组设置',
    index: '8-2',
    link: '/'
  }, {
    title: '线路设置',
    index: '8-3',
    link: '/'
  }, {
    title: '排班设置',
    index: '8-4',
    link: '/'
  }, {
    title: '记录查询',
    index: '8-5',
    link: '/'
  }, {
    title: '报表统计',
    index: '8-6',
    link: '/'
  }]
}]

export {
  navList
}
