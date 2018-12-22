/* eslint-disable */
const interfaceData = {
  '1-1': [{
    title: '访客预约',
    url: '/card/visitor/insertVisitor',
    type: 'post',
    params: {
      v_name: "访客1",
      v_phone: "13750856146",
      v_dw: "ws",
      v_address: "cccccc",
      v_certificateType: "身份证",
      v_certificateNumber: "320723199504243611",
      v_reason: "参观",
      v_personSum: 3,
      isv_id: 1,
      //v_time: Convert.ToDateTime("2018-03-12 00:00:00").ToString("o"),
      v_time: "2018-03-12T00:00:00.000Z",
      //v_lvTime: Convert.ToDateTime("2018-03-14 00:00:00").ToString("o"),
      v_lvTime: "2018-03-14T00:00:00.000Z",
      memo: "备注",
      status: 1,
    }
  }, {
    title: '查询访客预约信息',
    url: '/card/visitor/getVisitorData',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '修改访客预约信息',
    url: '/card/visitor/updateVisitor',
    type: 'post',
    params: {
      id: 6,
      v_name: "访客1改",
      v_phone: "13750856146",
      v_dw: "ws",
      v_address: "cccccc",
      v_certificateType: "身份证",
      v_certificateNumber: "320723199504243611",
      v_reason: "参观",
      v_personSum: 3,
      isv_id: 1,
      //v_time: Convert.ToDateTime("2018-03-12 00:00:00").ToString("o"),
      v_time: "2018-03-12T00:00:00.000Z",
      //v_lvTime: Convert.ToDateTime("2018-03-14 00:00:00").ToString("o"),
      v_lvTime: "2018-03-14T00:00:00.000Z",
      memo: "备注",
      status: 1,
    }
  }, {
    title: '修改访客状态信息',
    url: '/card/visitor/changeBookStatusByIds',
    type: 'post',
    params: {
      ids: "6",
      status: 1
    }
  }],
  '1-2': [{
    title: '查询访客信息',
    url: '/card/visitor/getVisitorData',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '访客退卡',
    url: '/card/visitor/returnCard/6',
    type: 'post',
    params: {
    }
  }, {
    title: '统计在访人数',
    url: '/card/visitor/countVisiting',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '查询单个访客信息',
    url: '/card/visitor/getVisitorSingleRecordById/7',
    type: 'post',
    params: {
    }
  }, {
    title: '访客发卡1',
    url: '/configGuide/addCard',
    type: 'post',
    params: {
      availableTimes: "255",
      cardCash: 0,
      cardCost: 0,
      cardDeposit: 0,
      cardNumber: "A1234568",
      cardPassword: "123456",
      cardStatus: "ACTIVE",
      cardType: 2,
      category: "0",
      endDate: "2019-10-10 23:59:59",
      startDate: "2017-02-23 18:18:51",
      subSystems: "1,3,4,5,6"
    }
  }, {
    title: '修改访客卡号(人卡绑定)2',
    url: '/card/visitor/updateVisitorCard',
    type: 'post',
    params: {
      id: 6,
      v_cardType: "2",
      v_CardNumber: "A1234568"
    }
  }, {
    title: '访客卡权限发放3',
    url: '/configGuide/giveUserDoorRight',
    type: 'post',
    params: {
      cardNumber: "A1234568",
      handle: "insert",
      timeQuantumId: 7,
      authorizeSource:"1",
      doorList: [
        {
          resourceCode: "1000004$7$0$0",
          cardNumber: "A1234568",
          privilegeType: 1

        },
        {
          resourceCode: "1000004$7$0$0",
          cardNumber: "A1234568",
          privilegeType: 1
        }]
    }
  }],
  '1-3': [{
    title: '添加访客黑名单',
    url: '/card/visitor/black/add',
    type: 'post',
    params: {
      v_name: "黑名单测试1",
      v_sex: "FEMALE",
      v_phone: "13750856464",
      v_certificateNumber: "3207231995364635",
      v_certificateType: "身份证",
      memo: "4343"
    }
  }, {
    title: '查询黑名单',
    url: '/card/visitor/black/bycondition/combined',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '删除黑名单',
    url: '/card/visitor/black/delete',
    type: 'post',
    params: {
      ids: ['4']
    }
  }, {
    title: '修改访客黑名单',
    url: '/card/visitor/black/update',
    type: 'post',
    params: {
      id: 4,
      v_name: "黑名单测试1",
      v_sex: "FEMALE",
      v_phone: "13750856463",
      v_certificateNumber: "320723199536463X",
      v_certificateType: "身份证",
      memo: "4343"
    }
  }],
  '1-4': [{
    title: '超时报表',
    url: '/card/visitor/getVisitorTimeOutData',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 100,
      v_box: 1
    }
  }, {
    title: '刷卡记录查询',
    url: '/card/accessControl/swingCardRecord/visitor/bycondition/combined',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }],
  '1-5': [{
    title: '添加岗亭',
    url: '/card/visitor/box/add',
    type: 'post',
    params: {
      v_boxName: "测试岗亭1",
      v_boxCode: "34343",
      v_boxIp: "10.10.10.10",
      status: 0,
      memo: "备注1"
    }
  }, {
    title: '修改岗亭',
    url: '/card/visitor/box/update',
    type: 'post',
    params: {
      id: 7,
      v_boxName: "测试岗亭1改",
      v_boxCode: "34343",
      v_boxIp: "10.10.10.10",
      status: 0,
      memo: "备注1"
    }
  }, {
    title: '查询岗亭',
    url: '/card/visitor/box/bycondition/combined',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 100
    }
  }, {
    title: '删除岗亭',
    url: '/card/visitor/box/delete',
    type: 'post',
    params: {
      ids: [4]
    }
  }],
  '1-6': [{
    title: '设备状态日志',
    url: '/card/visitor/getVisitorDeviceLog',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '管理日志',
    url: '/card/visitor/getVisitorSystemLog',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }],
  '3-1': [{
    title: '增加设备',
    url: '/card/accessControl/device',
    type: 'post',
    params: {
      manufacturer: "1",
      accessThirdPartyOpenDoor: "0",
      deviceName: "ceshi1",
      orgCode: "001",
      deviceModel: "2",
      accessChnNum: "1",
      deviceIp: "10.10.10.10",
      devicePort: "37777",
      deviceUser: "admin",
      devicePassword: "123456",
      serviceId: "7007",
      accessControlChannelList: [
        {
          channelSeq: 0,
          channelName: "ceshi1_通道1",
          validFlag: "1",
          status: "5",
          delayTime: "3",
          orgCode: "001",
          cardReaderList: [
            {
              name: "ceshi1_通道1_读卡器1",
              businessType: "1",
              openType: "8",
              code: 1
            },
            {
              name: "ceshi1_通道1_读卡器2",
              businessType: "2",
              openType: "8",
              code: 2
            }
          ]
        }
      ]
    }
  }, {
    title: '删除设备',
    url: '/card/accessControl/device/delete/batch',
    type: 'post',
    params: {
      accessControlDeviceIds: [9]
    }
  }, {
    title: '修改设备',
    url: '/card/accessControl/device/update',
    type: 'post',
    params: {
      id: 8,
      deviceCode: "1000014",
      manufacturer: "1",
      accessThirdPartyOpenDoor: "0",
      deviceName: "ceshi1",
      orgCode: "001",
      deviceModel: "2",
      accessChnNum: "1",
      deviceIp: "10.10.10.10",
      devicePort: "37777",
      deviceUser: "admin",
      devicePassword: "123456",
      serviceId: "7007",
      accessControlChannelList: [
        {
          channelSeq: 0,
          channelName: "ceshi1_通道1",
          validFlag: "1",
          status: "5",
          delayTime: "3",
          orgCode: "001",
          cardReaderList: [
            {
              name: "ceshi1_通道1_读卡器1",
              businessType: "1",
              openType: "8",
              code: 1
            },
            {
              name: "ceshi1_通道1_读卡器2",
              businessType: "2",
              openType: "8",
              code: 2
            }
          ]
        }
      ]
    }
  }, {
    title: '查询设备',
    url: '/card/accessControl/device/bycondition/combined',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '查询通道',
    url: '/card/accessControl/channel/bycondition/combined',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '清空重发设备权限',
    url: '/card/accessControl/device/clearCard',
    type: 'post',
    params: {
      accessControlDeviceIds: [8]
    }
  }],
  '3-2': [{
    title: '增加开门计划',
    url: '/card/accessControl/timeQuantum',
    type: 'post',
    params: {
      type: 1,
      name: "测试开门计划1",
      memo: "开门计划1",
      detail: {
        monday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        tuesday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        wednesday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        thursday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        friday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        saturday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        sunday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
      }
    }
  }, {
    title: '删除开门计划',
    url: '/card/accessControl/timeQuantum/delete',
    type: 'post',
    params: {
      ids: [7]
    }
  }, {
    title: '修改开门计划',
    url: '/card/accessControl/timeQuantum/update',
    type: 'post',
    params: {
      id: 7,
      type: 1,
      name: "测试开门计划1",
      memo: "开门计划1",
      detail: {
        monday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        tuesday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        wednesday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        thursday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        friday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        saturday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
        sunday: [ "00:00-23:59", "00:00-00:00", "00:00-00:00", "00:00-00:00" ],
      }
    }
  }, {
    title: '查看开门计划',
    url: '/card/accessControl/timeQuantum/7',
    type: 'get',
    params: {
    }
  }],
  '3-3': [{
    title: '增加门组权限',
    url: '/card/accessControl/doorGroup',
    type: 'post',
    params: {
      name: "测试门组权限",
      memo: "测试备注",
      doorGroupDetail: [
        {
          channelCode: "1000002$7$0$0"
        },
        {
          channelCode: "1000004$7$0$0"
        }
      ]
    }
  }, {
    title: '删除门组权限',
    url: '/card/accessControl/doorGroup/delete/batch',
    type: 'post',
    params: {
      doorGroupIds: [7]
    }
  }, {
    title: '修改门组权限',
    url: '/card/accessControl/doorGroup',
    type: 'post',
    params: {
      id: 5,
      name: "测试门组权限",
      memo: "测试备注",
      doorGroupDetail: [
        {
          channelCode: "1000002$7$0$0"
        },
        {
          channelCode: "1000004$7$0$0"
        }
      ]
    }
  }, {
    title: '查看门组权限',
    url: '/card/accessControl/doorGroup/5',
    type: 'post',
    params: {
    }
  }],
  '3-4': [{
    title: '查询人员授权',
    url: '/card/accessControl/doorAuthority/bycondition/combined',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 100
    }
  }, {
    title: '添加人员授权',
    url: '/card/accessControl/doorAuthority',
    type: 'post',
    params: {
      cardNumbers: [
        "11111111"
      ],
      timeQuantumId: "1",
      cardPrivilegeDetails: [
        {
          privilegeType: "1",
          resouceCode: "1000002$7$0$0"
        }
      ]
    }
  }, {
    title: '人员权限修改',
    url: '/card/accessControl/doorAuthority/update',
    type: 'post',
    params: {
      cardNumber: "11111111",
      timeQuantumId: "1",
      cardPrivilegeDetails: [
        {
          privilegeType: "1",
          resouceCode: "1000004$7$0$0"
        }
      ]
    }
  }, {
    title: '人员权限删除',
    url: '/card/accessControl/doorAuthority/delete/batch',
    type: 'post',
    params: {
      cardNums: ['11111111']
    }
  }, {
    title: '根据卡号查询人员权限',
    url: '/card/accessControl/doorAuthority/11111111',
    type: 'post',
    params: {
    }
  }],
  '3-5': [{
    title: '查询人员权限',
    url: '/card/accessControl/doorAuthority/ChannelWithAuthorizeStatus/bycondition/combined',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '按门按人授权',
    url: '/card/accessControl/doorAuthority/authorizeAllPersonByChannelCode',
    type: 'post',
    params: {
      timeQuantumId: "1",
      personIdsString: "1",
      channelCode: "1000002$7$0$0"
    }
  }, {
    title: '按门删除人员授权',
    url: '/card/accessControl/doorAuthority/removeAuthorizeAllPersonByChannelCode',
    type: 'post',
    params: {
      personIdsString: "1",
      channelCode: "1000002$7$0$0"
    }
  }, {
    title: '按部门按通道授权',
    url: '/card/accessControl/doorAuthority/authorizeAllDeptByChannelCode',
    type: 'post',
    params: {
      timeQuantumId: "1",
      deptIdsString: "1",
      channelCode: "1000002$7$0$0"
    }
  }, {
    title: '按门删除部门授权',
    url: '/card/accessControl/doorAuthority/removeAuthorizeAllByChannelCode',
    type: 'post',
    params: {
      deptIdsString: "1",
      channelCode: "1000002$7$0$0"
    }
  }],
  '3-6': [],
  '3-7': [{
    title: '开门',
    url: '/card/accessControl/channelControl/openDoor',
    type: 'post',
    params: {
      channelCodeList: [
        "1000002$7$0$0",
        "1000004$7$0$0"
      ]
    }
  }, {
    title: '关门',
    url: '/card/accessControl/channelControl/closeDoor',
    type: 'post',
    params: {
      channelCodeList: [
        "1000002$7$0$0",
        "1000004$7$0$0"
      ]
    }
  }, {
    title: '常开',
    url: '/card/accessControl/channelControl/stayOpen',
    type: 'post',
    params: {
      channelCodeList: [
        "1000002$7$0$0",
        "1000004$7$0$0"
      ]
    }
  }, {
    title: '常闭',
    url: '/card/accessControl/channelControl/stayClose',
    type: 'post',
    params: {
      channelCodeList: [
        "1000002$7$0$0",
        "1000004$7$0$0"
      ]
    }
  }],
  '3-8': [{
    title: '刷卡记录查询',
    url: '/card/accessControl/swingCardRecord/bycondition/combined',
    type: 'post',
    params: {
      startSwingTime: "2018-11-01 17:50:00",
      endSwingTime: "2018-11-04 17:53:00",
      pageNum: 1,
      pageSize: 100,
      openType: 61
    }
  }],
  '3-9': [{
    title: '查询设备状态',
    url: '/card/accessControl/swingCardRecord/bycondition/combined',
    type: 'post',
    params: {
      //deviceCode: "1000004",
      //startDate: "2018-12-10 00:00:00",
      //endDate: "2018-12-10 23:59:59",
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '脱机记录采集',
    url: '/card/accessControl/swingCardRecord/offRecordTime',
    type: 'post',
    params: {
      //deviceCode: "1000004",
      //startDate: "2018-12-10 00:00:00",
      //endDate: "2018-12-10 23:59:59",
      pageNum: 1,
      pageSize: 20
    }
  }],
  '3-10': [{
    title: '服务查询',
    url: '/card/accessControl/service/getServiceList',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '启用服务',
    url: '/card/accessControl/service/enableSlaveService',
    type: 'post',
    params: {
      serviceId: "6001",
      machineSN: "1"
    }
  }, {
    title: '禁用服务',
    url: '/card/accessControl/service/disableSlaveService',
    type: 'post',
    params: {
      serviceId: "6001",
      machineSN: "1"
    }
  }, {
    title: '删除服务',
    url: '/card/accessControl/service/deleteSlaveService',
    type: 'post',
    params: {
      serviceId: "6001",
      machineSN: "1"
    }
  }],
  '4-1': [{
    title: '添加人员',
    url: '/card/person',
    type: 'post',
    params: {
      paperNumber: "320723199504243611",
      name: "张三",
      code: "2333",
      deptId: 2,
      sex: "男",
      birthday: "2010-09-13",
      phone: "15961791569",
      status: "在职",
      paperType: "身份证",
      personIdentityId: -99
    }
  }, {
    title: '批量添加人员',
    url: '/card/person/batch',
    type: 'post',
    params: {
      namePrefix: "test",
      personCount: 2,
      codePrifix: "test",
      deptId: 1,
      personIdentityId: -99
    }
  }, {
    title: '删除人员',
    url: '/card/person/delete',
    type: 'post',
    params: {
      personIds: [6]
    }
  }, {
    title: '修改人员',
    url: '/card/person/update',
    type: 'post',
    params: {
      paperNumber: "32072319950424361X",
      id: 6,
      name: "张三e",
      code: "2333",
      deptId: 2,
      sex: "男",
      birthday: "2010-09-13",
      phone: "15961791569",
      status: "在职",
      paperType: "身份证",
      personIdentityId: 8
    }
  }, {
    title: '查询人员',
    url: '/card/person/bycondition/combined',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '移动部门',
    url: '/card/person/move',
    type: 'post',
    params: {
      deptId: "1",
      personIds: [6]
    }
  }],
  '4-2': [{
    title: '人员开卡',
    url: '/card/card/open/batch',
    type: 'post',
    params: {
      objectList: [
        {
          cardNumber: "A2222222",
          cardType: "0",
          cardStatus: "ACTIVE",
          startDate: "2017-02-23",
          endDate: "2019-02-23",
          cardSubsidy: "0",
          cardCash: "0",
          cardCost: "0",
          cardDeposit: "0",
          cardPassword: "123456",
          category: "0",
          subSystems: "1,3,4,5,6",
          personId: 6,
          personName: "张三x"
        }
      ]
    }
  }, {
    title: '激活卡挂失',
    url: '/card/card/lose',
    type: 'post',
    params: {
      cardIds: [9]
    }
  }, {
    title: '激活卡退卡',
    url: '/card/card/return',
    type: 'post',
    params: {
      cardIds: [9]
    }
  }, {
    title: '冻结卡解挂',
    url: '/card/card/relieve',
    type: 'post',
    params: {
      cardIds: [9]
    }
  }, {
    title: '冻结卡补卡',
    url: '/card/card/renew',
    type: 'post',
    params: {
      personId: "6",
      newCardNumber: "A12C3454"
    }
  }, {
    title: '卡片查询',
    url: '/card/card/bycondition/combined',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '单个添加空白卡',
    url: '/card/card',
    type: 'post',
    params: {
      cardNumber: "AA112234",
      cardType: "0",
      category: "0"
    }
  }, {
    title: '批量添加空白卡',
    url: '/card/card/batch',
    type: 'post',
    params: {
      startNumber: "A1112234",
      endNumber: "A1112236",
      category: "0"
    }
  }, {
    title: '删除空白卡',
    url: '/card/card/delete',
    type: 'post',
    params: {
      cardIds: [2]
    }
  }],
  '7-1': [{
    title: '添加营业单位',
    url: '/card/merchant',
    type: 'post',
    userId: true,
    params: {
      parentId: 1,
      name: "ceshi营业单位"
    }
  }, {
    title: '删除营业单位',
    url: '/card/merchant/delete/5',
    type: 'post',
    params: {
    }
  }, {
    title: '修改营业单位名称',
    url: '/card/merchant/update',
    type: 'post',
    params: {
      id: 2,
      parentId: 1,
      name: "ceshi营业单位1"
    }
  }, {
    title: '查询营业单位',
    url: '/card/merchant/merchantTerminalTree',
    type: 'post',
    userId: true,
    params: {
    }
  }],
  '7-2': [{
    title: '添加消费设备',
    url: '/card/consumption/terminal',
    type: 'post',
    userId: true,
    params: {
      terminalCode: "3434343545",
      terminalName: "4343",
      merchantId: 1,
      terminalType: "消费机",
      terminalIp: "0.0.0.0",
      terminalPort: "5001",
      communicationMode: "TCP/IP",
      businessTimeId: 2,
      status: "离线"
    }
  }, {
    title: '删除消费设备',
    url: '/card/consumption/terminal/delete',
    type: 'post',
    params: {
      terminalIds: [3]
    }
  }, {
    title: '修改消费设备',
    url: '/card/consumption/terminal/update',
    type: 'post',
    params: {
      terminalCode: "3434343545",
      terminalName: "4343222",
      merchantId: 1,
      terminalType: "消费机",
      terminalIp: "0.0.0.0",
      terminalPort: "5001",
      communicationMode: "TCP/IP",
      businessTimeId: 2,
      status: "离线",
      id: 3
    }
  }, {
    title: '查询消费设备',
    url: '/card/consumption/terminal/bycondition/combined',
    type: 'post',
    userId: true,
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }],
  '7-3': [{
    title: '添加营业时间段',
    url: '/card/consumption/business_time',
    type: 'post',
    userId: true,
    params: {
      businessTimeName: "测试营业时间段",
      breakfastTimePeroid: "06:00:00~08:00:00",
      lunchTimePeroid: "11:30:00~13:00:00",
      dinnerTimePeroid: "17:30:00~19:00:00",
      supperTimePeroid: "22:00:00~24:00:00"
    }
  }, {
    title: '删除营业时间段',
    url: '/card/consumption/business_time/delete',
    type: 'post',
    params: {
      businessTimeIds: [2, 3]
    }
  }, {
    title: '修改营业时间段',
    url: '/card/consumption/business_time/update',
    type: 'post',
    params: {
      businessTimeName: "测试营业时间段改",
      breakfastTimePeroid: "06:00:00~08:00:00",
      lunchTimePeroid: "11:30:00~13:00:00",
      dinnerTimePeroid: "17:30:00~19:00:00",
      supperTimePeroid: "22:00:00~24:00:00",
      id: 2
    }
  }, {
    title: '查询营业时间段',
    url: '/card/consumption/business_time',
    type: 'post',
    userId: true,
    params: {
    }
  }],
  '7-4': [{
    title: '卡片充值',
    url: '/card/card/recharge',
    type: 'post',
    userId: true,
    params: {
      cardNumber: "A12C3454",
      cardCashToRecharge: 20,
      description: "开户充值",
      personId: 6,
      personName: "张三e",
      deptId: 2,
      deptName: "XX校区",
      eventType: "现金充值"
    }
  }, {
    title: '卡片退款',
    url: '/card/card/refund',
    type: 'post',
    params: {
      cardNumber: "11111111",
      cardCashToRefund: 1,
      description: "离职退款",
      personId: 1,
      personName: "222",
      deptId: 1,
      deptName: "根节点"
    }
  }],
  '7-5': [{
    title: '消费日志',
    url: '/card/consumption/card_consumption_record/bycondition/combined',
    type: 'post',
    userId: true,
    params: {
      pageNum: 1,
      pageSize: 20,
      startTime: "2018-03-12 00:00:00",
      endTime: "2018-09-12 00:00:00",
      sortBy: "CREATE_TIME",
      sortOrder: "DESC"
    }
  }, {
    title: '充值日志',
    url: '/card/consumption/card_cash_record/bycondition/combined',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }],
  '7-6': [{
    title: '营收收入',
    url: '/card/consumption/statistical_report/merchant',
    type: 'post',
    userId: true,
    params: {
      pageNum: 1,
      pageSize: 20,
      //startDate: "2018-12-09",
      //endDate: "2018-12-09"
      //merchantIdsString: "1"
    }
  }, {
    title: '人员消费',
    url: '/card/consumption/statistical_report/person/consumption',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }, {
    title: '现金交易',
    url: '/card/consumption/statistical_report/person/cash',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }],
  '7-7': [{
    title: '补贴参数设置',
    url: '/card/consumption/subsidy_rule/update',
    type: 'post',
    params: {
      id: 1,
      issueDay: 1,
      subsidyAmount: 600,
      subsidyPattern: "累加"
    }
  }, {
    title: '补贴身份设置',
    url: '/card/person/personIdentities/update',
    type: 'post',
    params: {
      objectList: [
        {
          id: -99,
          subsidyAmount: 600,
          isCashRecharge: "0",
          isMachineRecharge: "1"
        },
        {
          id: 0,
          subsidyAmount: 600,
          isCashRecharge: "0",
          isMachineRecharge: "1"
        },
        {
          id: 1,
          subsidyAmount: 600,
          isCashRecharge: "0",
          isMachineRecharge: "1"
        },
      ]
    }
  }, {
    title: '补贴参数是启用',
    url: '/card/consumption/subsidy_rule/initialization/1',
    type: 'post',
    params: {
    }
  }, {
    title: '补贴参数不启用',
    url: '/card/consumption/subsidy_rule/uninitialization/1',
    type: 'post',
    params: {
    }
  }, {
    title: '消费参数修改',
    url: '/card/consumption/consumption_rule/update',
    type: 'post',
    params: {
      id: 2,
      consumptionQuotaDaily: 100,
      consumptionQuotaTimely: 50,
      consumptionTimeLimitDaily: 5,
      minAmount: 5
    }
  }, {
    title: '充值参数修改',
    url: '/card/setting/update',
    type: 'post',
    params: {
      objectList: [
        {
          id: 1,
          propertyValue: "YES",
          propertyName: "isSubsidyRefundable"    // 补贴金额
        },
        {
          id: 2,
          propertyValue: "1000.00",
          propertyName: "maxRechargeAmount"  // 最大充值金额
        },
        {
          id: 3,
          propertyValue: "YES",
          propertyName: "isRechargeTicketPrintable"  // 是否打印小票
        },
        {
          id: 4,
          propertyValue: "100000.00",
          propertyName: "maxAccountAmount"   // 账户最大金额
        }
      ]
    }
  }],
  '7-8': [{
    title: '增加授权',
    url: '/card/consumption/terminal/authorization',
    type: 'post',
    userId: true,
    params: {
      cardNumbers: ["A12C3454"],
      terminalIds: ["2"]
    }
  }, {
    title: '删除授权',
    url: '/card/consumption/terminal/authorization/delete',
    type: 'post',
    params: {
      cardNumbers: ["11111111"]
    }
  }, {
    title: '修改授权',
    url: '/card/consumption/terminal/authorization/update',
    type: 'post',
    params: {
      cardNumber: "11111111",
      terminalIds: ['1']
    }
  }, {
    title: '查询授权',
    url: '/card/consumption/terminal/card/authorizable',
    type: 'post',
    params: {
      pageNum: 1,
      pageSize: 20
    }
  }]
}

export default interfaceData
