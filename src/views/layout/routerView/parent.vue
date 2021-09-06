<template>
  <div class="h100">
    <router-view v-slot="{ Component }">
      <transition :name="setTransitionName" mode="out-in">
        <div>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { computed, defineComponent, toRefs, reactive, getCurrentInstance, onBeforeMount, onUnmounted, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "layoutParentView",
  setup() {
    const { proxy } = getCurrentInstance();
		const route = useRoute();
    const state = reactive({
      refreshRouterViewKey: null,
    });
    // 设置主界面切换动画
    const setTransitionName = computed(() => {
      return "opacitys";
    });

    // 页面加载前
    onBeforeMount(() => {
      proxy.mittBus.on("onTagsViewRefreshRouterView", (path) => {
        if (route.path !== path) return false;
        state.refreshRouterViewKey = route.path;
        nextTick(() => {
          state.refreshRouterViewKey = null;
        });
      });
    });
    // 页面卸载时
    onUnmounted(() => {
      proxy.mittBus.off("onTagsViewRefreshRouterView");
    });
    return {
      setTransitionName,
      ...toRefs(state),
    };
  },
});
</script>
