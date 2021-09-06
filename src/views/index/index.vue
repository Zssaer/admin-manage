<template>
  <div class="wrapper">
  <el-container>
    <el-header>
      <div class="container">
        
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <a class="logo_a" href=""><img class="logo" src="../../assets/logo.png" alt="element-logo"/></a>
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template #title>我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template #title>选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.wrapper{}
el-header{
  position:fixed;
  top: 0px;
  width: 100%;
  z-index: 2000;
}
.container{
}
logo_a{
  float: left;
  font-size: 32px;
  font-weight: 400;
}
.logo{
  margin-left: 90px;
  width: 190px;
  height: 45px;
  vertical-align: sub;
}
</style>