<template>
	<el-main class="layout-main">
		<el-scrollbar
			class="layout-scrollbar"
			ref="layoutScrollbarRef"
			v-show="!currentRouteMeta.isLink && !currentRouteMeta.isIframe"
			:style="{ minHeight: `calc(100vh - ${headerHeight}` }"
		>
			<LayoutParentView />
		</el-scrollbar>
		<Link :style="{ height: `calc(100vh - ${headerHeight}` }" :meta="currentRouteMeta" v-if="currentRouteMeta.isLink && !currentRouteMeta.isIframe" />
		<Iframes
			:style="{ height: `calc(100vh - ${headerHeight}` }"
			:meta="currentRouteMeta"
			v-if="currentRouteMeta.isLink && currentRouteMeta.isIframe && isShowLink"
			@getCurrentRouteMeta="onGetCurrentRouteMeta"
		/>
	</el-main>
</template>

<script>
import { computed, defineComponent, toRefs, reactive, getCurrentInstance, watch, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

import LayoutParentView from '@/views/layout/routerView/parent.vue';
import Link from '@/views/layout/routerView/link.vue';
import Iframes from '@/views/layout/routerView/iframes.vue';
export default defineComponent({
	name: 'layoutMain',
	components: { LayoutParentView, Link, Iframes },
	setup() {
		const { proxy } = getCurrentInstance();
		const route = useRoute();
		const state = reactive({
			headerHeight: '',
			currentRouteMeta: {},
			isShowLink: false,
		});
		// 子组件触发更新
		const onGetCurrentRouteMeta = () => {
			initCurrentRouteMeta(route.meta);
		};
		// 初始化当前路由 meta 信息
		const initCurrentRouteMeta = (meta) => {
			state.isShowLink = false;
			state.currentRouteMeta = meta;
			setTimeout(() => {
				state.isShowLink = true;
			}, 100);
		};
		// 设置 main 的高度
		const initHeaderHeight = () => {
            return (state.headerHeight = `50px`);
		};
		// 页面加载前
		onBeforeMount(() => {
			initCurrentRouteMeta(route.meta);
			initHeaderHeight();
		});
		// 监听路由的变化
		watch(
			() => route.path,
			() => {
				initCurrentRouteMeta(route.meta);
				proxy.$refs.layoutScrollbarRef.wrap.scrollTop = 0;
			}
		);
		return {
			initCurrentRouteMeta,
			onGetCurrentRouteMeta,
			...toRefs(state),
		};
	},
});
</script>
