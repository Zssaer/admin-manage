<template>
  <div>
    <el-card>
      <img class="analytics" src="/src/assets/analytics.svg" />
    </el-card>
    <el-row>
      <el-col :span="8">
        <el-card class="cloumn" shadow="hover">
          <template #header>
            <div class="card-header">
              <h2>用户来源</h2>
            </div>
          </template>
          <Line class="chart"></Line>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="cloumn" shadow="hover">
          <template #header>
            <div class="card-header">
              <h2>产品质量比例</h2>
            </div>
          </template>
          <Dashboard class="chart"></Dashboard>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="cloumn" shadow="hover">
          <template #header>
            <div class="card-header">
              <h2>成员比例</h2>
            </div>
          </template>
          <Dashboard class="chart"></Dashboard>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Line from "@/components/Echarts/Pie.vue";
import Dashboard from "@/components/Echarts/Dashboard.vue";

export default {
  components: {
    Line,
    Dashboard,
  },
  setup() {},
};
</script>
<style scoped lang="scss">
@import "@/theme/mixins/mixins.scss";
.card-header {
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 12px;
}

.box-card {
  width: 480px;
}
.box {
  display: flex;
  height: calc(100vh - 280px);
  width: 100%;
  flex-direction: column;
}
.el-card__body .analytics {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.charts {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  .cloumn {
    margin: 5px auto;
    width: 550px;
    .chart {
      width: auto;
    }
  }
}
</style>
