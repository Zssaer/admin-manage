export default [
  {
    path: "/personal",
    name: "personal",
    component: () => import("@/views/personal/index.vue"),
    meta: {
      title: "个人中心",
      icon: "el-icon-user-solid",
    },
  },
  {
    path: "/contentMag",
    name: "contentMag",
    component: () => import("@/views/contentMag/index.vue"),
    meta: {
      title: "组件内容",
      icon: "el-icon-s-platform",
    },
    children: [
      {
        path: "/contentMag/table",
        name: "table",
        component: () => import("@/views/contentMag/table/index.vue"),
        meta: {
          title: "表格组件",
        },
      },
      {
        path: "/contentMag/richText",
        name: "RichText",
        component: () => import("@/views/contentMag/richText/index.vue"),
        meta: {
          title: "富文本组件",
        },
      },
    ],
  },
];
