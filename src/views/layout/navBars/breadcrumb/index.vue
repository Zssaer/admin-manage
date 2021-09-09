<template>
	<div class="layout-navbars-breadcrumb-index" :style="{background:topBarColor}">
		<Breadcrumb />
		<User />
	</div>
</template>

<script >
import Breadcrumb from '@/views/layout/navBars/breadcrumb/breadcrumb.vue';
import User from '@/views/layout/navBars/breadcrumb/user.vue';
import { useStore } from '@/store'
import { computed, reactive, toRefs } from 'vue';

export default {
	name: 'layoutBreadcrumbIndex',
	components: {User,Breadcrumb},
	setup() {
		const store = useStore();
		const state = reactive({
			topBarColor: computed(() => store.state.themeConfig.themeConfig.topBar),
		});
		return{
			...toRefs(state)
		}
	},
};
</script>

<style scoped lang="scss">
.layout-navbars-breadcrumb-index {
	height: 80px;
	display: flex;
	align-items: center;
	padding-right: 15px;
	overflow: hidden;
	

}
</style>
