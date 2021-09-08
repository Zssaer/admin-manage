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
					if(route.meta.title){
						document.title = `${route.meta.title} - TinyAdmin-Manage` || 'TinyAdmin-Manage';
					}else{
						document.title = 'TinyAdmin-Manage';
					}	
				});
			}
		);
		
		
	},
});
</script>
