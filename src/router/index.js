import { createRouter, createWebHistory } from "vue-router";
import { getSession,setSession } from "@/utils/storage.js";
import { NextLoading } from "@/utils/loading.js";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { store } from "@/store";

import { getMenuList } from "@/api/menu/index.js";

import staticRoutesConfig from "./config";

const staticRoutes = [
  {
    path: "/",
    name: "/",
    component: () => import("../views/layout/index.vue"),
    redirect: "/home",
    meta: {
      isKeepAlive: true,
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/index.vue"),
        meta: {
          title: "首页",
          icon: "el-icon-s-home",
          isAffix: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
    meta: {
      title: "登陆",
    },
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import("../views/error/404.vue"),
    meta: {
      title: "找不到此页面",
    },
  },
  {
    path: "/401",
    name: "noPower",
    component: () => import("../views/error/401.vue"),
    meta: {
      title: "没有权限",
    },
  },
  
];

// 定义404界面
const pathMatch = {
  path: "/:path(.*)*",
  redirect: "/404",
};

//  添加静态路由
const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes,
});

saveRoutes(getMainRoute().children);
setTagsViewFun(getMainRoute().children);

// 获取 '/' 路由对象
export function getMainRoute() {
  const routes = router.getRoutes();
  for (const route of routes) {
    if (route.path === "/") {
      return route;
    }
  }
}

// 重置路由
export function resetRoute() {
  const mainRoute = getMainRoute();
  const len = mainRoute.children.length - 1;
  const removeRouteList = mainRoute.children.splice(1, len);
  if (removeRouteList.length) {
    removeRouteList.forEach((o) => {
      router.removeRoute(o.name);
    });
  }
}

// 多级嵌套数组处理成一维数组
export function formatFlatteningRoutes(arr) {
  if (arr.length < 0) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].children) {
      arr = arr.slice(0, i + 1).concat(arr[i].children, arr.slice(i + 1));
    }
  }
  return arr;
}

// 存储路由
export function saveRoutes(routes) {
  store.dispatch("setRoutes", routes);
}

// 获取tagsView的数据
export function setTagsViewFun(routes) {
  store.dispatch("setTagsViewRoutes", routes);
}

// 路由初始化
export function initRoutes(routes) {
  NextLoading.start();
  resetRoute();
  const mainRoutes = getMainRoute();
  mainRoutes.children = mainRoutes.children.concat(routes);
  saveRoutes(mainRoutes.children);
  mainRoutes.children = formatFlatteningRoutes(mainRoutes.children);
  setTagsViewFun(mainRoutes.children);
  router.addRoute(mainRoutes);
  router.addRoute(pathMatch);
  
  console.log("获取路由:>> ", router.getRoutes());
}

// 后端控制路由，isRequestRoutes 为 true， 则开启后端控制路由
export function getBackEndControlRoutes(callback) {
  const token = getSession("voucher");
  if (!token) {
    return false;
  }
  getMenuList().then((res) => {
    callback(res);
  });
}


export function formatBackEndRoutes(list) {
  const modules = import.meta.glob("../views/*/**");
  const newList = [];
  list.map((o) => {
    if (o.children && o.children.length > 0) {
      o.children = formatBackEndRoutes(o.children);
    }

    newList.push({
      name: o.name,
      path: o.path,
      component: modules[`../views${o.page}`],
      meta: o.meta,
      redirect: o.redirect ? o.redirect : undefined,
      children: o.children ? o.children : [],
    });
  });
  return newList;
}

// 是否已经获取到后台路由列表
let hasBackEndRoutes = false;

// 路由加载前
router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = getSession("voucher");
  
  if (token) {
    if (!hasBackEndRoutes) {
      // 获取主题配置，是否为后端获取路由
      const requestRoutes= store.state.themeConfig.themeConfig.isRequestRoutes;
      console.log("是否后台动态路由",requestRoutes);
        if (requestRoutes) {
          getBackEndControlRoutes((res) => {
            const routes = res.data;
            const list = formatBackEndRoutes(routes);
            initRoutes(list);
            hasBackEndRoutes = true;
            const path = router.currentRoute.value.fullPath;
            router.push(path);
          });
        } else {
          initRoutes(staticRoutesConfig);
          hasBackEndRoutes = true;
          const path = router.currentRoute.value.fullPath;
          router.push(path);
        }
    }

    if (to.path == "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    if ("[/404,/401,/login]".indexOf(to.path) != -1 && to.path != "/") {
      next();
    } else {
      next("/login");
    }
  }
});

// 路由加载后
router.afterEach(() => {
  NextLoading.done();
  NProgress.done();
});

export default router;
