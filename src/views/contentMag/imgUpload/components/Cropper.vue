<template>
  <div id="imgUpDate">
    <el-upload
      class="avatar-uploader"
      :action="uoloadUrl"
      :show-file-list="false"
      :before-upload="beforeAvatarUpload"
      :on-progress="handProgress"
      :on-success="handleAvatarSuccess"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-upload avatar-uploader-icon"></i>

      <div class="pric" v-show="showProgress">
        <el-progress type="circle" :percentage="percentage"></el-progress>
      </div>
      <div class="shadow" v-if="imageUrl">
        <span class="el-icon-zoom-in" @click="bigClick"></span>
        <span class="el-icon-delete" @click="delClick"></span>
      </div>
    </el-upload>
    <el-dialog
      width="80%"
      v-model="dialogVisible"
      destroy-on-close
      title="裁剪图片"
    >
      <!-- vueCropper 剪裁图片实现-->
      <div class="cropper-content">
        <div class="cropper" style="text-align: center">
          <vueCropper
            ref="imgCut"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :centerBox="option.centerBox"
            :infoTrue="option.infoTrue"
            :fixedBox="option.fixedBox"
          ></vueCropper>
        </div>
      </div>
      <div class="cutButtons">
        <el-button @click="startCrop" type="primary">自定义大小</el-button>
        <el-button @click="rotateLeft" class="primary">图片左旋转</el-button>
        <el-button @click="rotateRight" class="primary">图片右旋转</el-button>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="finish" :loading="loading"
            >裁剪</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
import { upload } from "@/api/file/upload.js";
import { ref, toRefs } from "@vue/reactivity";
import { baseURL } from "@/utils/request";
import { computed } from "@vue/runtime-core";
import { ElMessage } from "element-plus";
import { ElMessageBox } from "element-plus";

import { reactive, nextTick } from "vue";

const code = 200;

export default {
  components: {
    VueCropper,
  },
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const option = reactive({
      img: "", // 裁剪图片的地址
      info: true, // 裁剪框的大小信息
      outputSize: 0.9, // 裁剪生成图片的质量
      outputType: "jpeg", // 裁剪生成图片的格式
      canScale: false, // 图片是否允许滚轮缩放
      autoCrop: true, // 是否默认生成截图框
      autoCropWidth: 350, // 默认生成截图框宽度
      autoCropHeight: 250, // 默认生成截图框高度
      fixedBox: false, // 固定截图框大小 不允许改变
      fixed: false, // 是否开启截图框宽高固定比例
      fixedNumber: [16, 9], // 截图框的宽高比例
      full: false, // 是否输出原图比例的截图
      canMoveBox: true, // 截图框能否拖动
      original: true, // 上传图片按照原始比例渲染
      centerBox: false, // 截图框是否被限制在图片里面
      infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
    });

    const uoloadUrl = `${baseURL}/upload`;

    let imageUrl = computed(() => {
      const { modelValue } = toRefs(props);
      return modelValue.value;
    });

    const beforeAvatarUpload = (file) => {
      const imgType = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
      const isJPG = imgType.indexOf(file.type) > -1;
      const isLt10M = file.size / 1024 / 1024 < 10;

      if (!isJPG) {
        ElMessage.error("上传头像图片只能是 JPG\PNG\GIF 格式!");
      }

      if (!isLt10M) {
        ElMessage.error("上传头像图片大小不能超过 10MB!");
      }
      return isJPG && isLt10M;
    };

    const fileName = ref("");

    /* 上传图片 */
    const handleAvatarSuccess = (res, file) => {
      if (res.code === code) {
        emit("update:modelValue", res.data.accessUrl);
        fileName.value = file.name;
        nextTick(() => {
          option.img = res.data.accessUrl;
        });
      } else {
        ElMessage.error(res.message);
      }
    };

    let showProgress = ref(false);
    let percentage = ref(0);

    const handProgress = (event) => {
      showProgress.value = true;
      percentage.value = parseInt(event.percent);
      if (percentage.value == 100) return (showProgress.value = false);
    };
    /* 删除按钮 */
    const delClick = (e) => {
      e.stopPropagation();
      emit("update:modelValue", "");
      fileName.value = "";
      nextTick(() => {
        option.img = "";
      });
    };

    let dialogVisible = ref(false);

    const bigClick = (e) => {
      e.stopPropagation();
      dialogVisible.value = true;
    };

    const imgCut = ref(null);
    let loading = ref(false);

    const rotateLeft = () => {
      imgCut.value.rotateLeft();
    };

    const rotateRight = () => {
      imgCut.value.rotateRight();
    };

    const startCrop = () => {
      imgCut.value.startCrop();
    };

    /* 裁剪图片 */
    const finish = () => {
      ElMessageBox.confirm('是否裁剪当前图片?', '警告', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          imgCut.value.getCropBlob((data) => {
            // 创建一个file对象,用作保存裁剪的Blob对象,后续用作上传
            let params = new FormData();
            params.append("file", data, fileName.value);

            loading.value = true;
            // 上传裁剪后的图片
            upload(params)
              .then((res) => {
                if (res.code == 200) {
                  emit("update:modelValue", res.data.accessUrl);
                  ElMessage.success("裁剪成功");
                  loading.value = false;
                  option.img = res.data.accessUrl;
                  dialogVisible.value = false;
                } else {
                  ElMessage.error("裁剪失败!");
                  loading.value = false;
                }
              })
              .catch(function (error) {
                ElMessage.error("网络故障,裁剪失败!");
                loading.value = false;
              });
          });
        })
        .catch(() => {});
    };

    return {
      option,
      uoloadUrl,
      imageUrl,
      showProgress,
      percentage,
      beforeAvatarUpload,
      handProgress,
      handleAvatarSuccess,
      fileName,
      delClick,
      dialogVisible,
      bigClick,
      imgCut,
      loading,
      rotateRight,
      rotateLeft,
      startCrop,
      finish,
    };
  },
};
</script>

<style lang="scss" scoped>
// 截图
.cropper-content {
  .cropper {
    width: auto;
    height: 500px;
  }
}
.shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.5s;
}
.shadow span {
  text-align: center;
  line-height: 278px;
  font-size: 29px;
  color: #fff;
  padding: 0 10px;
}
.el-upload:hover .shadow {
  opacity: 1;
}
</style>

<style>
.el-dialog__body img {
  width: 100%;
}
#imgUpDate .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
#imgUpDate .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
#imgUpDate .avatar-uploader-icon {
  font-size: 48px;
  color: #8c939d;
  width: 190px;
  height: 190px;
  line-height: 190px;
  text-align: center;
}
#imgUpDate .avatar {
  width: 365px;
  height: 278px;
  /*display: block;*/
}
#imgUpDate .pric {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
#imgUpDate .el-progress {
  margin-top: 30px;
}
#imgUpDate .el-progress__text {
  color: #fff;
}
#imgUpDate .el-dialog__wrapper {
  z-index: 2013 !important;
}
.v-modal {
  z-index: 2000 !important;
}
.cutButtons {
  display: table;
  margin: 5px auto;
}
</style>
