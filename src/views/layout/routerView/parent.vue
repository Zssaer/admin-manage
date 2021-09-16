<template>
  <div class="h100">
    <router-view v-slot="{ Component }">
      <transition :name="setTransitionName" mode="out-in">
        <div>
          <keep-alive exclude="EditArticle">
            <component :is="Component"  />
          </keep-alive>
          //<component :is="Component" v-if="!isDisplay" />
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  toRefs,
  reactive,
  getCurrentInstance,
  onBeforeMount,
  onUnmounted,
  nextTick,
} from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store/index.js";

export default defineComponent({
  name: "layoutParentView",
  setup() {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const store = useStore();
    const state = reactive({
      refreshRouterViewKey: null,
      cachedViews: computed(() => {
        console.log(store.state.cachedViews);
        store.state.cachedViews;
      }),
    });
    // 判断页面是否可缓存
    const isDisplay = computed(() => {
      if (route.meta.isKeepAlive) {
        return true;
      } else {
        return false;
      }
    });
    // 设置主界面切换动画
    const setTransitionName = computed(() => {
      return "opacitys";
    });

    // 页面加载前
    onBeforeMount(() => {
      proxy.mittBus.on("onTagsViewRefreshRouterView", (path) => {
        if (route.path !== path) return false;
        state.refreshRouterViewKey = null;
        nextTick(() => {
          state.refreshRouterViewKey = route.path;
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
      isDisplay,
    };
  },
});
</script>
