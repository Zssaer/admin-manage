<template>
  <el-menu
    router
    :default-active="defaultActive"
    background-color="transparent"
    :collapse="setIsCollapse"
    :collapse-transition="false"
  >
    <div class="logo" v-if="!Collapse" @click="onThemeConfigChange">
      <img
        class="logoImg"
        loading="lazy"
        src="@/assets/logo.png"
      />
    </div>
    <div class="smallLogo" v-if="Collapse" @click="onThemeConfigChange">
      <img
        class="logoImg-small"
        loading="lazy"
        src="@/assets/logo-small.png"
      />
    </div>

    <template v-for="val in menuLists">
      <el-sub-menu
        :index="val.path"
        v-if="val.children && val.children.length > 0"
        :key="val.path"
      >
        <template #title>
          <i
            :class="val.meta.icon ? val.meta.icon : ''"
            :style="{ color: menuColor }"
          ></i>
          <span :style="{ color: menuColor }">{{ val.meta.title }}</span>
        </template>
        <SubItem :chil="val.children" :menuColor="menuColor" />
      </el-sub-menu>
      <el-menu-item
        :index="val.path"
        :key="val.path"
        v-else
        :style="{ color: menuColor }"
      >
        <i :class="val.meta.icon ? val.meta.icon : ''"></i>
        <template
          #title
          v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)"
        >
          <span>{{ val.meta.title }}</span>
        </template>
        <template #title v-else>
          <a :href="val.meta.isLink" target="_blank">{{
            val.meta.title
          }}</a></template
        >
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import {
  toRefs,
  reactive,
  computed,
  defineComponent,
  getCurrentInstance,
  watch,
} from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { useStore } from "@/store";

import SubItem from "@/views/layout/navMenu/subItem.vue";
export default defineComponent({
  name: "navMenuVertical",
  components: { SubItem },
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const store = useStore();
    const state = reactive({
      menuColor: computed(
        () => store.state.themeConfig.themeConfig.menuBarColor
      ),
      Collapse: computed(
        () => store.state.themeConfig.themeConfig.isCollapse
      ),
      defaultActive: route.path,
    });

    // 获取父级菜单数据
    const menuLists = computed(() => {
      return props.menuList;
    });
    // 设置菜单的收起/展开
    const setIsCollapse = computed(() => {
      return store.state.themeConfig.themeConfig.isCollapse;
      // return document.body.clientWidth < 1000 ? false : false;
    });
    // 路由更新时
    onBeforeRouteUpdate((to) => {
      state.defaultActive = to.path;
      proxy.mittBus.emit("onMenuClick");
    });

    // logo 点击实现菜单展开/收起
    const onThemeConfigChange = () => {
      proxy.mittBus.emit("onMenuClick");
      store.state.themeConfig.themeConfig.isCollapse =
        !store.state.themeConfig.themeConfig.isCollapse;
    };

    return {
      menuLists,
      setIsCollapse,
      ...toRefs(state),
      onThemeConfigChange,
    };
  },
});
</script>
<style lang="scss">
.logo {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 21 41 / 2%) 0px 1px 4px;
  cursor: pointer;
  animation: logoAnimation 0.3s ease-in-out;

}
.logoImg {
  width: 80%;
}
.smallLogo{
  width: 100%;
	height: 50px;
	display: flex;
	cursor: pointer;
  align-items: center;
  justify-content: center;
	animation: logoAnimation 0.3s ease-in-out;
	&-img {
		width: 20px;
		margin: auto;
	}
	&:hover {
		img {
			animation: logoAnimation 0.3s ease-in-out;
		}
	}
}
.logoImg-small{
  width: 80%;
}
.el-sub-menu__title {
  .el-icon-arrow-down:before {
    content: "\e790";
    color: white;
  }
}
/*菜单下拉框样式开始*/
>>> .el-menu--horizontal > .el-sub-menu:focus .el-sub-menu__title {
  color: white;
}
.el-menu--popup-bottom-start .el-sub-menu >>> .el-sub-menu__title {
  color: #333333 !important;
  font-size: 12px !important;
}
.el-menu--popup-bottom-start .el-sub-menu >>> .el-sub-menu__title:hover {
  background-color: #eaf5ff !important;
  color: #53b1fd !important;
}
.el-menu-item:hover {
  background-color: #333333 !important;
  color: #53b1fd !important;
}
/*菜单下拉框样式结束*/
</style>
