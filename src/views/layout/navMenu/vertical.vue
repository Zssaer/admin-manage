<template>
	<el-menu
		router
		:default-active="defaultActive"
		background-color="transparent"
		:collapse="setIsCollapse"
		:collapse-transition="false"
	>
		<template v-for="val in menuLists">
			<el-submenu :index="val.path" v-if="val.children && val.children.length > 0" :key="val.path" >
				<template #title>
					<i :class="val.meta.icon ? val.meta.icon : ''" :style="{color:menuColor}"></i>
					<span :style="{color:menuColor}">{{val.meta.title}}</span>
				</template>
				<SubItem :chil="val.children" :menuColor="menuColor" />
			</el-submenu>
			<el-menu-item :index="val.path" :key="val.path" v-else :style="{color:menuColor}">
				<i :class="val.meta.icon ? val.meta.icon : ''"></i>
				<template #title v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)">
					<span>{{val.meta.title}}</span>
				</template>
				<template #title v-else>
					<a :href="val.meta.isLink" target="_blank">{{val.meta.title}}</a></template>
			</el-menu-item>
		</template>
	</el-menu>
</template>

<script>
import { toRefs, reactive, computed, defineComponent, getCurrentInstance } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { useStore } from '@/store'

import SubItem from '@/views/layout/navMenu/subItem.vue';
export default defineComponent({
	name: 'navMenuVertical',
	components: { SubItem },
	props: {
		menuList: {
			type: Array,
			default: () => [],
		},
	},
	setup(props) {
		const { proxy } = getCurrentInstance();
		const route = useRoute();
		const store = useStore()
		const state = reactive({
			menuColor: computed(() => store.state.themeConfig.themeConfig.menuBarColor),
			defaultActive: route.path
		});
		

		// 获取父级菜单数据
		const menuLists = computed(() => {
			return props.menuList;
		});
		// 设置菜单的收起/展开
		const setIsCollapse = computed(() => {
			return store.state.themeConfig.themeConfig.isCollapse;
			// return document.body.clientWidth < 1000 ? false : false;
		});
		// 路由更新时
		onBeforeRouteUpdate((to) => {
			state.defaultActive = to.path;
			proxy.mittBus.emit('onMenuClick');
		});

		return {
			menuLists,
			setIsCollapse,
			...toRefs(state)
		};
	},
});
</script>
