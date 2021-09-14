<template>
  <div class="content">
    <el-row>
      <el-col
        :md="22" :lg="11"
        v-for="o in 2"
        :key="o"
        class="colc"
      >
        <el-card class="cloumn">
          <template #header>
            <div class="card-header">
              <h2>图像上传/图像裁剪</h2>
            </div>
          </template>
          <Cropper class="cropper" v-model="imgUpload"></Cropper>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Cropper from "@/views/contentMag/imgUpload/components/Cropper.vue";
import { reactive, toRefs } from "vue";
export default {
  components: {
    Cropper,
  },
  setup() {
    const state = reactive({
      imgUpload: "",
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.content{
  display: table;
  margin:0 auto;
}
.colc{
  margin-left: 50px;
}
.cloumn{
  width: 550px;

  .card-header {
  justify-content: space-between;
  align-items: center;
  text-align: center;
  }
  .cropper{
    margin:0 auto;
    display: table;
  }
}

</style>
