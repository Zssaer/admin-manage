<template>
	<el-container class="layout-container">
		<Aside />
		<el-container class="flex-center layout-backtop">
			<Header/>
			<el-scrollbar ref="layoutDefaultsScrollbarRef">
				<Main />
			</el-scrollbar>
		</el-container>
		<el-backtop target=".layout-backtop .el-scrollbar__wrap"></el-backtop>
	</el-container>
</template>

<script>
import {getCurrentInstance, watch } from 'vue';
import { useRoute } from 'vue-router';
import Aside from '@/views/layout/component/aside.vue';
import Header from '@/views/layout/component/header.vue';
import Main from '@/views/layout/component/main.vue';
export default {
	name: 'layoutDefaults',
	components: { Aside, Header, Main },
	setup() {
		const { proxy } = getCurrentInstance();
		const route = useRoute();
		// 监听路由的变化
		watch(
			() => route.path,
			() => {
				proxy.$refs.layoutDefaultsScrollbarRef.wrap.scrollTop = 0;
			}
		);
	},
};
</script>
