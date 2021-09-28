<template>
  <div>
    <!-- 账户列表 -->
    <Card>
      <div class="content">
        <div class="title">
          <h2>管理员账户管理</h2>
        </div>
        <el-divider></el-divider>
        <!-- 管理员列表 -->
        <div
          class="user-box"
          v-for="(item, index) in userList"
          :key="item.id"
          :index="index"
        >
          <div class="user-img-content">
            <h2>{{ item.userName }}</h2>
            <img :src="item.pic" />
          </div>

          <div class="shadow">
            <el-icon class="button">
              <Edit @click="editClick(item)" />
            </el-icon>
            <el-icon class="button">
              <DeleteFilled @click="delClick(index)" />
            </el-icon>
          </div>
        </div>
        <!-- 管理员预留添加位 -->
        <div class="user-box">
          <div class="user-img-content">
            <h2 style="margin: 20% auto">添加账户</h2>
            <el-icon>
              <plus />
            </el-icon>
          </div>
          <div class="shadow">
            <el-icon class="button">
              <plus @click="addClick" />
            </el-icon>
          </div>
        </div>
      </div>
    </Card>

    <!-- 账户编辑/修改 -->
    <el-dialog v-model="dialogVisible" :title="dialogTitle" width="50%" center>
      <!-- 图片上传/裁剪组件 -->
      <div class="cropper-container">
        <Cropper class="cropper" v-model="imgUpload"></Cropper>
      </div>

      <el-form :model="subform" :rules="rules" ref="form">
        <el-form-item label="登录名:" prop="loginName">
          <el-input v-model="subform.loginName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名称:" prop="userName">
          <el-input v-model="subform.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-row :gutter="10" style="justify-content: center">
          <el-col :span="8">
            <el-form-item label="用户角色:" prop="role">
              <el-select v-model="subform.role" placeholder="Select">
                <el-option
                  v-for="item in roleList"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="注册时间:" prop="registerDate">
              <el-date-picker
                v-model="subform.registerDate"
                type="date"
                placeholder="Pick a day"
                :default-value="new Date()"
                disabled
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submit">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { Edit, DeleteFilled, Plus } from "@element-plus/icons";
import Card from "@/components/Frame/Card.vue";
import Cropper from "@/views/contentMag/imgUpload/components/Cropper.vue";
import { ElMessageBox, ElMessage } from "element-plus";

import { reactive, toRefs, nextTick, ref } from "vue";

export default {
  components: {
    Card,
    Edit,
    DeleteFilled,
    Plus,
    Cropper,
  },
  setup() {
    const state = reactive({
      // dialog显示
      dialogVisible: false,
      // dialog标题
      dialogTitle: "",
      // dialog表单内容
      subform: {},
      rules: {
        loginName: [
          {
            required: true,
            message: "请输登录名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "长度允许3-10位",
            trigger: "blur",
          },
        ],
        userName: [
          {
            required: true,
            message: "请输入账户名称",
            trigger: "blur",
          },
        ],
      },
      // 上传图片组件图片地址
      imgUpload: "",
      // dialog初始化表单内容
      initform: {
        id: "",
        userName: "",
        loginName: "",
        pic: "",
        role: "2",
        registerDate: "",
      },
    });
    // 账户列表
    const userList = reactive([
      {
        id: "1",
        userName: "吴签",
        loginName: "admin",
        pic: "/src/assets/user.png",
        role: "1",
        registerDate: "2021/9/28 15:41",
      },
      {
        id: "2",
        userName: "无疫烦",
        loginName: "admin",
        pic: "/src/assets/user.png",
        role: "1",
        registerDate: "2021/9/28 15:41",
      },
      {
        id: "3",
        userName: "无疫烦",
        loginName: "admin",
        pic: "/src/assets/user.png",
        role: "1",
        registerDate: "2021/9/28 15:41",
      },
      {
        id: "4",
        userName: "无疫烦",
        loginName: "admin",
        pic: "/src/assets/user.png",
        role: "1",
        registerDate: "2021/9/28 15:41",
      },
    ]);
    // 管理员角色列表
    const roleList = reactive([
      {
        name: "超级管理员",
        value: "1",
      },
      {
        name: "普通管理员",
        value: "2",
      },
    ]);

    // 账户编辑按钮执行
    const editClick = (item) => {
      state.dialogTitle = "账户编辑";
      state.dialogVisible = true;
      nextTick(() => {
        state.imgUpload = item.pic;
        state.subform = Object.assign({}, item);
      });
    };
    // 账户删除按钮执行
    const delClick = (index) => {
      ElMessageBox.confirm("你确定删除该管理员账户", "删除操作", {
        confirmButtonText: "删除",
        cancelButtonText: "点错了",
        type: "warning",
      })
        .then(() => {
          userList.splice(index, 1);
          ElMessage({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "取消删除操作",
          });
        });
    };
    // 账户新增按钮执行
    const addClick = () => {
      state.dialogTitle = "账户新增";
      state.dialogVisible = true;
      nextTick(() => {
        state.imgUpload = "";
        state.subform = Object.assign({}, state.initform);
      });
    };

    // 获取表单实例
    const form = ref(null);
    const submit = () => {
      form.value.validate((valid) => {
        if (valid) {
          ElMessage({
            type: "success",
            message: "保存成功!",
          });
          userList.push(state.subform);
          state.dialogVisible = false;
        } else {
          return false;
        }
      });
    };

    return {
      ...toRefs(state),
      userList,
      roleList,
      editClick,
      delClick,
      addClick,
      form,
      submit,
    };
  },
};
</script>

<style lang="scss" scoped>
//  全部内容容器
.content {
  width: 100%;
  margin: 5px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
// 标题容器
.title {
  width: 100%;
  height: 42px;
  text-align: center;
  line-height: 42px;
}
// 账户卡片元素
.user-box {
  position: relative;
  margin: 10px 35px;
  height: 280px;
  width: 250px;
  padding: 30px;
  background-color: #f7f9f9;
  border-radius: 5px;
  box-shadow: 0.7px 0.9px 0.6px rgba(0, 0, 0, 0.053),
    2.2px 3.1px 2px rgba(0, 0, 0, 0.077), 10px 14px 9px rgba(0, 0, 0, 0.13);
  h2 {
    text-align: center;
    color: #2f2c2c;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  img {
    max-width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
  }
  i {
    width: 100%;
    font-size: 34px;
    margin: -12.5px 0;
  }
  // 卡片蒙版容器,默认不显示
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.5s;
  }
  // 卡片蒙版按钮
  .shadow .button {
    margin: 0 25px;
    line-height: 280px;
    font-size: 34px;
    color: #fff;
    :hover {
      color: #2196f3;
    }
  }
  // 触碰卡片容器,显示蒙版容器
  &:hover {
    .shadow {
      opacity: 1;
    }
  }
}
@media screen and (max-width: 1300px) {
  .user-box {
    margin: 10px 25px;
  }
}
// 图像上传组件
.cropper-container {
  margin-bottom: 10px;
  width: 100%;
  .cropper {
    margin: 0 auto;
    display: table;
  }
}
</style>
<style lang="scss"></style>
