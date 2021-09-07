<template>
  <el-drawer title="主题设置" v-model="drawer">
    <div class="block theme">
      <el-divider>导航栏背景颜色</el-divider>  
      <el-color-picker v-model="color1" :predefine="predefineColors"></el-color-picker>
      <el-divider>导航栏文字颜色</el-divider>  
      <el-color-picker v-model="color2" :predefine="predefineColors"></el-color-picker>
    </div>
  </el-drawer>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from 'vuex'
export default {
  setup() {
    let predefineColors = [
          '#6A8372',
          '#D0104C',
          '#FB9966',
          '#91B493',
          '#268785',
          '#8F77B5',
          '#43341B',
          '#c71585',
    ];
    const store = useStore()
    const state = reactive({
      drawer: false,
      color1: computed({
          get(){
              return store.state.themeConfig.themeConfig.menuBar;
          },
          set(val){
              store.commit('themeConfig/setMenuColor',val)
          }
      }),
      color2: computed({
          get(){
              return store.state.themeConfig.themeConfig.menuBarColor;
          },
          set(val){
              store.commit('themeConfig/setMenuBarColor',val)
          }
      }),
    });
    const openSetting = () => {
      state.drawer = true;
    };

    return {
      ...toRefs(state),
      openSetting,
      predefineColors
    };
  },
};
</script>

<style>
.el-drawer__header {
  font-size: 24px;
}
.el-color-picker{
 margin: 0 46%; 
}
</style>
