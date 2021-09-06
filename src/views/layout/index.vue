<template>
	<Defaults/>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
	name: 'layout',
	components: {
		Defaults: defineAsyncComponent(() => import('../layout/main/defaults.vue')),
	},
	setup() {

	}
};
</script>
