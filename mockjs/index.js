import Mock from 'mockjs'

const baseURL = 'http://192.168.0.173:8088'

Mock.mock(`${baseURL}/menu`, 'get', {
  'list': [
    {
      path: '/personal',
      name: 'personal',
      page: '/personal/index.vue',
      meta: {
        title: '个人中心',
        icon: 'el-icon-user-solid'
      }
    },
    {
      path: '/contentMag',
      name: 'contentMag',
      page: '/contentMag/index.vue',
      meta: {
        title: '内容管理',
        icon: 'el-icon-s-platform'
      },
      children: [
        {
          path: '/contentMag/article',
          name: 'article',
          page: '/contentMag/component/article.vue',
          meta: {
            title: '文章管理'
          }
        },
        {
          path: '/contentMag/research',
          name: 'research',
          page: '/contentMag/component/research.vue',
          meta: {
            title: '科学研究管理',
          }
        },
        {
          path: '/contentMag/paper',
          name: 'paper',
          page: '/contentMag/component/paper.vue',
          meta: {
            title: '论文管理',
          }
        },
        {
          path: '/contentMag/publish',
          name: 'publish',
          page: '/contentMag/component/publish.vue',
          meta: {
            title: '栏目管理',
          }
        }
      ]
    },
    {
      path: '/constantsMag',
      name: 'constantsMag',
      page: '/constantsMag/index.vue',
      meta: {
        title: '数据常量组',
        icon: 'el-icon-circle-plus'
      },
      children: [
        {
          path: '/constantsMag/constant',
          name: 'constant',
          page: '/constantsMag/component/constant.vue',
          meta: {
            title: '数据常量管理'
          }
        }
      ]
    },
    {
      path: '/sysmag',
      name: 'sysmag',
      page: '/sysmag/index.vue',
      meta: {
        title: '系统管理',
        icon: 'el-icon-setting'
      },
      children: [
        {
          path: '/sysmag/usermag',
          name: 'usermag',
          page: '/sysmag/component/usermag.vue',
          meta: {
            title: '用户管理'
          }
        },
        {
          path: '/sysmag/rolemag',
          name: 'rolemag',
          page: '/sysmag/component/rolemag.vue',
          meta: {
            title: '角色管理'
          }
        },
        {
          path: '/sysmag/log',
          name: 'log',
          page: '/sysmag/component/log.vue',
          meta: {
            title: '日志管理'
          }
        }
      ]
    },
    {
      path: '/memberMag',
      name: 'memberMag',
      page: '/memberMag/index.vue',
      meta: {
        title: '成员管理',
        icon: 'el-icon-user-solid'
      },
      children: [
        {
          path: '/memberMag/teachermag',
          name: 'teachermag',
          page: '/sysmag/component/teachermag.vue',
          meta: {
            title: '教师管理'
          }
        },
        {
          path: '/memberMag/studentmag',
          name: 'studentmag',
          page: '/sysmag/component/studentmag.vue',
          meta: {
            title: '学生管理'
          }
        }
      ]
    }
  ]
})

Mock.mock(`${baseURL}/article`, 'get', {
  "data": {
    'list': [
        {
          id: '1',
          articleType: '新闻',
          articleTitle: 'XXXXXXXXXX',
          createTime: '2021-04-30 11:32:35',
          brief: 'KKKKKKKKKKKKJJJJJJJJJJJJJJJJJJJJ',
          isTop: 1,
          createBy: 'admin',
          articleImg: '/img/research1.png',
          status: 2,
          articleContent:"哒哒哒哒哒哒多多多多多多多多"
        }, {
          id: '2',
          articleType: '通告',
          articleTitle: 'KKKKKKKKKKK',
          createTime: '2021-04-30 09:33:12',
          brief: 'KKKKKKKKKKKKJJJJJJJJJJJJJJJJJJJJ',
          isTop: 1,
          articleImg: '/img/research1.png',
          createBy: 'admin',
          status: 2,
        }, {
          id: '3',
          articleType: '招聘',
          articleTitle: 'ZZZZZZZZZZZZ',
          createTime: '2021-04-30 11:32:35',
          brief: 'KKKKKKKKKKKKJJJJJJJJJJJJJJJJJJJJ',
          isTop: 1,
          articleImg: '/img/research1.png',
          createBy: 'admin',
          status: 1,
        }, {
          id: '4',
          articleType: '新闻',
          articleTitle: 'ZZZZZZZZZZZZ',
          createTime: '2021-04-30 11:32:35',
          brief: 'KKKKKKKKKKKKJJJJJJJJJJJJJJJJJJJJ',
          isTop: 0,
          articleImg: '/img/research1.png',
          createBy: 'admin',
          status: 0,
        }, {
          id: '5',
          articleType: '通告',
          articleTitle: 'ZZZZZZZZZZZZ',
          createTime: '2021-04-30 11:32:35',
          brief: 'KKKKKKKKKKKKJJJJJJJJJJJJJJJJJJJJ',
          isTop: 0,
          articleImg: '/img/research1.png',
          createBy: 'admin',
          status: 1,
        }, {
          id: '6',
          articleType: '招聘',
          articleTitle: 'ZZZZZZZZZZZZ',
          createTime: '2021-04-30 11:32:35',
          brief: 'KKKKKKKKKKKKJJJJJJJJJJJJJJJJJJJJ',
          isTop: 0,
          articleImg: '/img/research1.png',
          createBy: 'admin',
          status: 0,
        }, {
          id: '7',
          articleType: '新闻',
          articleTitle: 'ZZZZZZZZZZZZ',
          createTime: '2021-04-30 11:32:35',
          brief: 'KKKKKKKKKKKKJJJJJJJJJJJJJJJJJJJJ',
          isTop: 0,
          articleImg: '/img/research1.png',
          createBy: 'admin',
          status: 1,
        }, {
          id: '8',
          articleType: '新闻',
          articleTitle: 'ZZZZZZZZZZZZ',
          createTime: '2021-04-30 11:32:35',
          brief: 'KKKKKKKKKKKKJJJJJJJJJJJJJJJJJJJJ',
          isTop: 0,
          articleImg: '/img/research1.png',
          createBy: 'admin',
          status: 2,
        }, {
          id: '9',
          articleType: '新闻',
          articleTitle: 'ZZZZZZZZZZZZ',
          createTime: '2021-04-30 11:32:35',
          brief: 'KKKKKKKKKKKKJJJJJJJJJJJJJJJJJJJJ',
          isTop: 0,
          articleImg: '/img/research1.png',
          createBy: 'admin',
          status: 1,
        }, {
          id: '10',
          articleType: '招聘',
          articleTitle: 'ZZZZZZZZZZZZ',
          createTime: '2021-04-30 11:32:35',
          brief: 'KKKKKKKKKKKKJJJJJJJJJJJJJJJJJJJJ',
          isTop: 0,
          articleImg: '/img/research1.png',
          createBy: 'admin',
          status: 1,
        } 
    ],
    "pageNum": 1,
    "pageSize": 10,
    "size": 5,
    "orderBy": null,
    "startRow": 1,
    "endRow": 5,
    "total": 5,
    "pages": 1
  }  
})
Mock.mock(`${baseURL}/research`, 'get', {
  "data": {
    'list': [
      {
        id:'1',
        researchTitle:'XXXXXX',
        researchStartTime:'2021-04-01 11:12:44',
        researchEndTime:'2021-04-30 11:12:47',
        researchLevel:'High',
        researchCode:'SDSDEWF-548-FES',
        researchImg:'/img/research1.png',
        researchAddress:'SDAD-FFFW-SSSX',
        createTime:'2021-04-30 11:13:16',
        researchTags:'Technology Digit China American',
        researchAbout:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'2',
        researchTitle:'XXXXXX',
        researchStartTime:'2021-04-01 11:12:44',
        researchEndTime:'2021-04-30 11:12:47',
        researchLevel:'High',
        researchCode:'SDSDEWF-548-FES',
        researchImg:'/img/research1.png',
        researchAddress:'SDAD-FFFW-SSSX',
        createTime:'2021-04-30 11:13:16',
        researchTags:'Technology Digit China American',
        researchAbout:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'3',
        researchTitle:'XXXXXX',
        researchStartTime:'2021-04-01 11:12:44',
        researchEndTime:'2021-04-30 11:12:47',
        researchLevel:'High',
        researchCode:'SDSDEWF-548-FES',
        researchImg:'/img/research1.png',
        researchAddress:'SDAD-FFFW-SSSX',
        createTime:'2021-04-30 11:13:16',
        researchTags:'Technology Digit China American',
        researchAbout:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'4',
        researchTitle:'XXXXXX',
        researchStartTime:'2021-04-01 11:12:44',
        researchEndTime:'2021-04-30 11:12:47',
        researchLevel:'High',
        researchCode:'SDSDEWF-548-FES',
        researchImg:'/img/research1.png',
        researchAddress:'SDAD-FFFW-SSSX',
        createTime:'2021-04-30 11:13:16',
        researchTags:'Technology Digit China American',
        researchAbout:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'5',
        researchTitle:'XXXXXX',
        researchStartTime:'2021-04-01 11:12:44',
        researchEndTime:'2021-04-30 11:12:47',
        researchLevel:'High',
        researchCode:'SDSDEWF-548-FES',
        researchImg:'/img/research1.png',
        researchAddress:'SDAD-FFFW-SSSX',
        createTime:'2021-04-30 11:13:16',
        researchTags:'Technology Digit China American',
        researchAbout:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'6',
        researchTitle:'XXXXXX',
        researchStartTime:'2021-04-01 11:12:44',
        researchEndTime:'2021-04-30 11:12:47',
        researchLevel:'High',
        researchCode:'SDSDEWF-548-FES',
        researchImg:'/img/research1.png',
        researchAddress:'SDAD-FFFW-SSSX',
        createTime:'2021-04-30 11:13:16',
        researchTags:'Technology Digit China American',
        researchAbout:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'7',
        researchTitle:'XXXXXX',
        researchStartTime:'2021-04-01 11:12:44',
        researchEndTime:'2021-04-30 11:12:47',
        researchLevel:'High',
        researchCode:'SDSDEWF-548-FES',
        researchImg:'/img/research1.png',
        researchAddress:'SDAD-FFFW-SSSX',
        createTime:'2021-04-30 11:13:16',
        researchTags:'Technology Digit China American',
        researchAbout:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'8',
        researchTitle:'XXXXXX',
        researchStartTime:'2021-04-01 11:12:44',
        researchEndTime:'2021-04-30 11:12:47',
        researchLevel:'High',
        researchCode:'SDSDEWF-548-FES',
        researchImg:'/img/research1.png',
        researchAddress:'SDAD-FFFW-SSSX',
        createTime:'2021-04-30 11:13:16',
        researchTags:'Technology Digit China American',
        researchAbout:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'9',
        researchTitle:'XXXXXX',
        researchStartTime:'2021-04-01 11:12:44',
        researchEndTime:'2021-04-30 11:12:47',
        researchLevel:'High',
        researchCode:'SDSDEWF-548-FES',
        researchImg:'/img/research1.png',
        researchAddress:'SDAD-FFFW-SSSX',
        createTime:'2021-04-30 11:13:16',
        researchTags:'Technology Digit China American',
        researchAbout:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'10',
        researchTitle:'XXXXXX',
        researchStartTime:'2021-04-01 11:12:44',
        researchEndTime:'2021-04-30 11:12:47',
        researchLevel:'High',
        researchCode:'SDSDEWF-548-FES',
        researchImg:'/img/research1.png',
        researchAddress:'SDAD-FFFW-SSSX',
        createTime:'2021-04-30 11:13:16',
        researchTags:'Technology Digit China American',
        researchAbout:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
    ],
    "pageNum": 1,
    "pageSize": 10,
    "size": 5,
    "orderBy": null,
    "startRow": 1,
    "endRow": 5,
    "total": 5,
    "pages": 1
  }
})
Mock.mock(`${baseURL}/paper`, 'get', {
  "data": {
    'list': [
      {
        id:'1',
        paperTitle:'KKKKKKK',
        paperMember:'XXX ZZZ',
        paperTime:'2021-04-30 11:12:47',
        paperCode:'XSCA4614',
        paperTags:"SDS XSX AAA",
        paperFile:'/paper/paper1.pdf',
        paperImg:'/img/paper1.png',
        status:1,
        createTime:'2021-04-30 11:13:16',
        paperContent:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'2',
        paperTitle:'KKKKKKK',
        paperMember:'XXX ZZZ',
        paperTime:'2021-04-30 11:12:47',
        paperCode:'XSCA4614',
        paperTags:"SDS XSX AAA",
        paperFile:'/paper/paper1.pdf',
        paperImg:'/img/paper1.png',
        status:0,
        createTime:'2021-04-30 11:13:16',
        paperContent:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'3',
        paperTitle:'KKKKKKK',
        paperMember:'XXX ZZZ',
        paperTime:'2021-04-30 11:12:47',
        paperCode:'XSCA4614',
        paperTags:"SDS XSX AAA",
        paperFile:'/paper/paper1.pdf',
        paperImg:'/img/paper1.png',
        status:1,
        createTime:'2021-04-30 11:13:16',
        paperContent:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'4',
        paperTitle:'KKKKKKK',
        paperMember:'XXX ZZZ',
        paperTime:'2021-04-30 11:12:47',
        paperCode:'XSCA4614',
        paperTags:"SDS XSX AAA",
        paperFile:'/paper/paper1.pdf',
        paperImg:'/img/paper1.png',
        status:1,
        createTime:'2021-04-30 11:13:16',
        paperContent:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'5',
        paperTitle:'KKKKKKK',
        paperMember:'XXX ZZZ',
        paperTime:'2021-04-30 11:12:47',
        paperCode:'XSCA4614',
        paperTags:"SDS XSX AAA",
        paperFile:'/paper/paper1.pdf',
        paperImg:'/img/paper1.png',
        status:0,
        createTime:'2021-04-30 11:13:16',
        paperContent:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'6',
        paperTitle:'KKKKKKK',
        paperMember:'XXX ZZZ',
        paperTime:'2021-04-30 11:12:47',
        paperCode:'XSCA4614',
        paperTags:"SDS XSX AAA",
        paperFile:'/paper/paper1.pdf',
        paperImg:'/img/paper1.png',
        status:0,
        createTime:'2021-04-30 11:13:16',
        paperContent:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'7',
        paperTitle:'KKKKKKK',
        paperMember:'XXX ZZZ',
        paperTime:'2021-04-30 11:12:47',
        paperCode:'XSCA4614',
        paperFile:'/paper/paper1.pdf',
        paperImg:'/img/paper1.png',
        status:1,
        paperTags:"SDS XSX AAA",
        createTime:'2021-04-30 11:13:16',
        paperContent:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'8',
        paperTitle:'KKKKKKK',
        paperMember:'XXX ZZZ',
        paperTime:'2021-04-30 11:12:47',
        paperCode:'XSCA4614',
        paperTags:"SDS XSX AAA",
        paperFile:'/paper/paper1.pdf',
        paperImg:'/img/paper1.png',
        status:1,
        createTime:'2021-04-30 11:13:16',
        paperContent:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'9',
        paperTitle:'KKKKKKK',
        paperMember:'XXX ZZZ',
        paperTime:'2021-04-30 11:12:47',
        paperCode:'XSCA4614',
        paperTags:"SDS XSX AAA",
        paperFile:'/paper/paper1.pdf',
        paperImg:'/img/paper1.png',
        status:1,
        createTime:'2021-04-30 11:13:16',
        paperContent:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      },
      {
        id:'10',
        paperTitle:'KKKKKKK',
        paperMember:'XXX ZZZ',
        paperTime:'2021-04-30 11:12:47',
        paperCode:'XSCA4614',
        paperTags:"SDS XSX AAA",
        paperFile:'/paper/paper1.pdf',
        paperImg:'/img/paper1.png',
        status:0,
        createTime:'2021-04-30 11:13:16',
        paperContent:'<p>hiosdasd</p><span>This is exame for The lab!</span>'
      }
    ],
    "pageNum": 1,
    "pageSize": 10,
    "size": 5,
    "orderBy": null,
    "startRow": 1,
    "endRow": 5,
    "total": 5,
    "pages": 1
  }
})