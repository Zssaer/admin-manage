export default [
  {
    path: '/personal',
    name: 'personal',
    component: () => import('@/views/personal/index.vue'),
    meta: {
      title: '个人中心',
      icon: 'el-icon-user-solid'
    }
  },
  {
    path: '/contentMag',
    name: 'contentMag',
    component: () => import('@/views/contentMag/index.vue'),
    meta: {
      title: '内容管理',
      icon: 'el-icon-s-platform'
    },
    children: [
      {
        path: '/contentMag/article',
        name: 'article',
        component: () => import('@/views/contentMag/component/article.vue'),
        meta: {
          title: '文章管理'
        }
      },
      {
        path: '/contentMag/research',
        name: 'research',
        component: () => import('@/views/contentMag/component/research.vue'),
        meta: {
          title: '科学研究管理',
        }
      },
      {
        path: '/contentMag/paper',
        name: 'paper',
        component: () => import('@/views/contentMag/component/paper.vue'),
        meta: {
          title: '论文管理',
        }
      },
      {
        path: '/contentMag/publish',
        name: 'publish',
        component: () => import('@/views/contentMag/component/publish.vue'),
        meta: {
          title: '栏目管理',
        }
      }
    ]
  },
  {
    path: '/constantsMag',
    name: 'constantsMag',
    component: () => import('@/views/constantsMag/index.vue'),
    meta: {
      title: '数据常量组',
      icon: 'el-icon-circle-plus'
    },
    children: [
      {
        path: '/constantsMag/constant',
        name: 'constant',
        component: () => import('@/views/constantsMag/component/constant.vue'),
        meta: {
          title: '数据常量管理'
        }
      }
    ]
  },
  {
    path: '/sysmag',
    name: 'sysmag',
    component: () => import('@/views/sysmag/index.vue'),
    meta: {
      title: '系统管理',
      icon: 'el-icon-setting'
    },
    children: [
      {
        path: '/sysmag/usermag',
        name: 'usermag',
        component: () => import('@/views/sysmag/component/usermag.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: '/sysmag/rolemag',
        name: 'rolemag',
        component: () => import('@/views/sysmag/component/rolemag.vue'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: '/sysmag/log',
        name: 'log',
        component: () => import('@/views/sysmag/component/log.vue'),
        meta: {
          title: '日志管理'
        }
      }
    ]
  },{
    path: '/memberMag',
    name: 'memberMag',
    component: () => import('@/views/memberMag/index.vue'),
    meta: {
      title: '成员管理',
      icon: 'el-icon-user-solid'
    },
    children: [
      {
        path: '/memberMag/teachermag',
        name: 'teachermag',
        component: () => import('@/views/memberMag/component/teachermag.vue'),
        meta: {
          title: '教师管理'
        }
      },
      {
        path: '/memberMag/studentmag',
        name: 'studentmag',
        component: () => import('@/views/memberMag/component/studentmag.vue'),
        meta: {
          title: '学生管理'
        }
      }
    ]
  }
]
