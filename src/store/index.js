import { createStore, useStore as baseUseStore } from "vuex";
import themeConfig from "@/store/modules/themeConfig.js";
import VuexPersist from "vuex-persist";

// 创建对象，借助浏览器缓存，存入localStorage
const vuexLocal = new VuexPersist({
  storage: window.localStorage, // 可选，sessionStorage/indexDB
});
export const store = createStore({
  modules: {
    themeConfig,
  },
  state: {
    routes: [],
    tagsViewRoutes: [],
    cachedViews: [],
  },
  mutations: {
    getRoutes(state, data) {
      state.routes = data;
    },
    // 设置 TagsView 路由
    getTagsViewRoutes(state, data) {
      state.tagsViewRoutes = data;
    },
    getCachedViews(state, data) {
      let arr = state.cachedViews.concat(data);
      let arrNew = new Set(arr);
      state.cachedViews = Array.from(arrNew);
    },
  },
  actions: {
    setRoutes({ commit }, data) {
      commit("getRoutes", data);
    },
    // 设置 TagsView 路由
    async setTagsViewRoutes({ commit }, data) {
      commit("getTagsViewRoutes", data);
    },
    setCachedViews({ commit }, data) {
      commit("getCachedViews", data);
    },
  },
  plugins: [vuexLocal.plugin],
});

export function useStore() {
  return baseUseStore();
}
