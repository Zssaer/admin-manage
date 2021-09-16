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
      {
        path: "/contentMag/imgUpload",
        name: "ImgUpload",
        component: () => import("@/views/contentMag/imgUpload/index.vue"),
        meta: {
          title: "图像组件",
        },
      },
    ],
  },
  {
    path: "/articleMag",
    name: "ArticleMag",
    component: () => import("@/views/articleMag/index.vue"),
    meta: {
      title: "文章管理",
      icon: "el-icon-s-platform",
    },
    children: [
      {
        path: "/articleMag/article",
        name: "Article",
        component: () => import("@/views/articleMag/list.vue"),
        meta: {
          title: "文章列表",
        },
      },
      {
        path: "/articleMag/edit",
        component: () => import("@/views/articleMag/edit.vue"),
        name: "EditArticle",
        meta: {
          title: "编辑文章",
          noCache: true,
          isKeepAlive: false,
          activeMenu: "/articleMag/list",
        },
        hidden: true,
      },
      {
        path: "/articleMag/Create",
        name: "Create",
        component: () => import("@/views/articleMag/create.vue"),
        meta: {
          title: "创建文章",
        },
      },
    ],
  },
];
