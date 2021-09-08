import { createStore, useStore as baseUseStore } from 'vuex';
import themeConfig from '@/store/modules/themeConfig.js';
import VuexPersist from 'vuex-persist';

// 创建对象，借助浏览器缓存，存入localStorage
const vuexLocal = new VuexPersist({
	storage: window.localStorage  // 可选，sessionStorage/indexDB
})
export const store = createStore({
	modules: {
		themeConfig
	},
	state: {
		routes: [],
		tagsViewRoutes: []
	},
	mutations: {
		getRoutes(state, data) {
			state.routes = data
		},
		// 设置 TagsView 路由
		getTagsViewRoutes(state, data) {
			state.tagsViewRoutes = data
	},
	},
	actions: {
		setRoutes({ commit }, data) {
			commit('getRoutes', data)
		},
		// 设置 TagsView 路由
		async setTagsViewRoutes({ commit }, data) {
			commit('getTagsViewRoutes', data)
	},
	},
	plugins: [vuexLocal.plugin]
});

export function useStore() {
	return baseUseStore();
}
