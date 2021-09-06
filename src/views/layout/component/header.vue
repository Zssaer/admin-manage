<template>
	<el-header class="layout-header" :height="setHeaderHeight">
		<NavBarsIndex />
	</el-header>
</template>

<script>
import { computed } from 'vue';
import NavBarsIndex from '@/views/layout/navBars/index.vue';
export default {
	name: 'layoutHeader',
	components: { NavBarsIndex },
	setup() {
		// 设置 header 的高度
		const setHeaderHeight = computed(() => {
            return '84px';
		});
		return {
			setHeaderHeight,
		};
	},
};
</script>
