<template>
  <el-drawer title="主题设置" v-model="drawer" size="auto">
    <div class="block theme">
      <el-divider>导航栏背景颜色</el-divider>
      <el-color-picker
        v-model="color1"
        :predefine="predefineColors"
      ></el-color-picker>
      <el-divider>导航栏文字颜色</el-divider>
      <el-color-picker
        v-model="color2"
        :predefine="predefineColors"
      ></el-color-picker>
      <el-divider>顶部栏背景颜色</el-divider>
      <el-color-picker
        v-model="color3"
        :predefine="predefineColors"
      ></el-color-picker>
      <el-divider>顶部栏文字颜色</el-divider>
      <el-color-picker
        v-model="color4"
        :predefine="predefineColors"
      ></el-color-picker>
      <el-divider></el-divider>
      <span :style="{ marginLeft: '5%', marginRight: '5%' }">TagsView导航:</span
      ><el-switch
        v-model="TagsView"
        active-color="#13ce66"
        inactive-color="#ff4949"
      ></el-switch>
      <span :style="{ marginLeft: '5%', marginRight: '5%' }"
        >Breadcrumb导航:</span
      ><el-switch
        v-model="Breadcrumb"
        active-color="#13ce66"
        inactive-color="#ff4949"
      ></el-switch>
      <el-divider>TagsView导航背景颜色</el-divider>
      <el-color-picker
        v-model="tagsViewBgColor"
        :predefine="predefineColors"
      ></el-color-picker>
      <el-divider>TagsView样式</el-divider>
      <el-radio-group v-model="tagsStyle">
        <el-radio label="tagsStyleOne" border>样式一</el-radio>
        <el-radio label="tagsStyleTwo" border>样式二</el-radio>
        <el-radio label="tagsStyleThree" border>样式三</el-radio>
        <el-radio label="tagsStyleFour" border>样式四</el-radio>
      </el-radio-group>
      <div class="themeSetting">
        <el-button
          type="danger"
          icon="el-icon-refresh"
          @click="refreshSetting"
          circle
        ></el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { ElMessageBox } from "element-plus";
import { ElMessage } from "element-plus";
import { removeLocal } from "@/utils/storage.js";

export default {
  setup() {
    let predefineColors = [
      "#6A8372",
      "#D0104C",
      "#FB9966",
      "#91B493",
      "#268785",
      "#8F77B5",
      "#43341B",
      "#c71585",
    ];
    const store = useStore();
    const state = reactive({
      drawer: false,
      tagsStyle: computed({
        get() {
          return store.state.themeConfig.themeConfig.tagsStyle;
        },
        set(val) {
          store.commit("themeConfig/setTagsStyle", val);
        },
      }),
      color1: computed({
        get() {
          return store.state.themeConfig.themeConfig.menuBar;
        },
        set(val) {
          store.commit("themeConfig/setMenuColor", val);
        },
      }),
      color2: computed({
        get() {
          return store.state.themeConfig.themeConfig.menuBarColor;
        },
        set(val) {
          store.commit("themeConfig/setMenuBarColor", val);
        },
      }),
      color3: computed({
        get() {
          return store.state.themeConfig.themeConfig.topBar;
        },
        set(val) {
          store.commit("themeConfig/setTopBarColor", val);
        },
      }),
      color4: computed({
        get() {
          return store.state.themeConfig.themeConfig.topBarColor;
        },
        set(val) {
          store.commit("themeConfig/setTopBarTextColor", val);
        },
      }),
      TagsView: computed({
        get() {
          return store.state.themeConfig.themeConfig.isTagsview;
        },
        set(val) {
          console.log(val);
          store.commit("themeConfig/openTagsview", val);
        },
      }),
      Breadcrumb: computed({
        get() {
          return store.state.themeConfig.themeConfig.isBreadcrumb;
        },
        set(val) {
          store.commit("themeConfig/openBreadcrumb", val);
        },
      }),
      tagsViewBgColor: computed({
        get() {
          return store.state.themeConfig.themeConfig.tagsViewBgColor;
        },
        set(val) {
          store.commit("themeConfig/setTagsViewBgColor", val);
        },
      }),
    });
    const openSetting = () => {
      state.drawer = true;
    };
    const refreshSetting = () => {
      ElMessageBox.confirm("是否初始化主题设置?", "初始化主题", {
        distinguishCancelAndClose: true,
        confirmButtonText: "初始化",
        cancelButtonText: "点错了",
      }).then(() => {
        removeLocal("vuex");
        location.reload();
      });
    };

    return {
      ...toRefs(state),
      openSetting,
      predefineColors,
      refreshSetting,
    };
  },
};
</script>

<style lang="scss">
.el-drawer__body {
  overflow-x: hidden;
  overflow-y: auto;
}
.el-drawer__header {
  height: 80px;
  font-size: 24px;
  background: #1976d2;
  margin-bottom: 0px;
  color: white;
}
.el-color-picker {
  margin: 0 45%;
}
.el-radio.is-bordered {
  margin: 0 auto;
}
.el-drawer__close.el-icon.el-icon-close:before {
  content: "";
  color: white;
  font-size: 18px;
}
.el-divider__text {
  padding: 0 0;
}
.themeSetting {
  position: relative;
  top: 100px;
  text-align: center;
}
</style>
