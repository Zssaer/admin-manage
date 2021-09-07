<template>
  <el-aside
    class="layout-aside"
    :style="{background:menuColor}"
    :class="setCollapseWidth"
    v-if="clientWidth > 1000"
  >
    <el-scrollbar class="flex-auto" ref="layoutAsideScrollbarRef">
      <Vertical :menuList="menuList" :class="setCollapseWidth"/>
    </el-scrollbar>
  </el-aside>
  <el-drawer
    v-model="isCollapse"
    :with-header="false"
    direction="ltr"
    size="220px"
    v-else
  >
    <el-aside class="layout-aside w100 h100">
      <el-scrollbar class="flex-auto" ref="layoutAsideScrollbarRef">
        <Vertical :menuList="menuList" />
      </el-scrollbar>
    </el-aside>
  </el-drawer>
</template>

<script>
import {
  toRefs,
  reactive,
  computed,
  getCurrentInstance,
  watch,
  onBeforeMount,
  onUnmounted,
} from "vue";
import { useRouter } from "vue-router";
import Vertical from "@/views/layout/navMenu/vertical.vue";
import { useStore } from "@/store/index.js";
export default {
  name: "layoutAside",
  components: { Vertical },
  setup() {
    const router = useRouter();
    const store = useStore();
    const { proxy } = getCurrentInstance();
    const state = reactive({
      menuColor: computed(() => store.state.themeConfig.themeConfig.menuBar),
      isCollapse: false,
      menuList: [],
      clientWidth: "",
    });
    // 获取布局配置信息
    const getThemeConfig = computed(() => {
      return store.state.themeConfig.themeConfig;
    });

    // 设置菜单展开/收起时的宽度
    const setCollapseWidth = computed(() => {
      let { isCollapse, menuBar } = store.state.themeConfig.themeConfig;
      let asideBrColor =
        menuBar === "#FFFFFF" ||
        menuBar === "#FFF" ||
        menuBar === "#fff" ||
        menuBar === "#ffffff"
          ? "layout-el-aside-br-color"
          : "";

      // 其它布局给 64px
      if (isCollapse) {
        return ["layout-aside-width64", asideBrColor];
      } else {
        return ["layout-aside-width-default", asideBrColor];
      }
    });
    // 设置/过滤路由（非静态路由/是否显示在菜单中）
    const setFilterRoutes = () => {
      state.menuList = computed(() => {
        return store.state.routes
      })
    };
    // 设置菜单导航是否固定（移动端）
    const initMenuFixed = (clientWidth) => {
      state.clientWidth = clientWidth;
    };
    // 页面加载前
    onBeforeMount(() => {
      initMenuFixed(document.body.clientWidth);
      setFilterRoutes();
      // proxy.mittBus.on('getBreadcrumbIndexSetFilterRoutes', () => {
      // 	setFilterRoutes();
      // });
      // proxy.mittBus.on('layoutMobileResize', (res) => {
      // 	initMenuFixed(res.clientWidth);
      // });
    });
    // 页面卸载时
    onUnmounted(() => {
      // proxy.mittBus.off('getBreadcrumbIndexSetFilterRoutes');
      // proxy.mittBus.off('layoutMobileResize');
    });
    return {
      setCollapseWidth,
      ...toRefs(state),
    };
  },
};
</script>
