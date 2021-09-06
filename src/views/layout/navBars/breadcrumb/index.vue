<template>
	<div class="layout-navbars-breadcrumb-index">
		<Breadcrumb />
		<User />
	</div>
</template>

<script >
import Breadcrumb from '@/views/layout/navBars/breadcrumb/breadcrumb.vue';
import User from '@/views/layout/navBars/breadcrumb/user.vue';
export default {
	name: 'layoutBreadcrumbIndex',
	components: {User,Breadcrumb},
	setup() {
	},
};
</script>

<style scoped lang="scss">
.layout-navbars-breadcrumb-index {
	height: 50px;
	display: flex;
	align-items: center;
	padding-right: 15px;
	background: var(--bg-topBar);
	overflow: hidden;
	border-bottom: 1px solid #f1f2f3;
}
</style>
