<template>
  <div>
    <el-card>
      <el-row>
        <el-col
          :span="6"
          v-for="o in 8"
          :key="o"
        >
          <el-card class="user" shadow="hover"> </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.user {
  
  margin: 15px auto;
  display: block;
  width: 240px;
  height: 240px;
}
</style>
