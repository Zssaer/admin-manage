<template>
  <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import {nextTick, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
export default({
	name: 'app',
	setup() {
		const route = useRoute();
		// 监听路由的变化，设置网站标题
		watch(
			() => route.path,
			() => {
				nextTick(() => {
					// document.title = `${route.meta.title} - 智慧医疗实验室` || '智慧医疗实验室';
					document.title = 'Admin-Manage';
				});
			}
		);
		
		
	},
});
</script>
