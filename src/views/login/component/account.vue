<template>
  <el-form
    class="login-content-form"
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
  >
    <el-form-item prop="loginName">
      <el-input
        type="text"
        placeholder="请输入用户名"
        prefix-icon="el-icon-user"
        v-model="ruleForm.loginName"
        clearable
        autocomplete="off"
      >
      </el-input>
    </el-form-item>
    <el-form-item prop="passWord">
      <el-input
        type="password"
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        v-model="ruleForm.passWord"
        autocomplete="off"
        show-password
      >
      </el-input>
    </el-form-item>
    <el-form-item prop="verifyCode">
      <el-row :gutter="15">
        <el-col :span="16">
          <el-input
            type="text"
            maxlength="5"
            placeholder="请输入验证码"
            prefix-icon="el-icon-position"
            v-model="ruleForm.verifyCode"
            clearable
            autocomplete="off"
          ></el-input>
        </el-col>
        <el-col :span="8">
          <div class="login-content-code">
            <img :src="doCaptcha" alt @click="editCaptcha" />
          </div>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        native-type="“submit”"
        class="login-content-submit login"
        round
        @click="submitForm('ruleForm')"
        :loading="loging"
      >
        <span>登陆</span>
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { getCaptcha, userLogin } from "@/api/login/account.js";
import { setSession } from "@/utils/storage.js";
const code = "200";

export default {
  name: "login",
  data() {
    return {
      doCaptcha: "",
      loging: false,
      ruleForm: {
        loginName: "",
        passWord: "",
        validKey: "",
        verifyCode: "",
      },
      rules: {
        loginName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
        verifyCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    editCaptcha() {
      this.getImg();
    },
    getImg() {
      getCaptcha().then((res) => {
        if (res.code == code) {
          this.doCaptcha = res.data.baseImg;
          this.ruleForm.validKey = res.data.validKey;
        }
      });
    },
    submitForm(formName) {
      const self = this;
      console.log(this.ruleForm);
      self.$refs[formName].validate((valid) => {
        if (valid) {
          this.loging = true;
          userLogin(this.ruleForm)
            .then((res) => {
              this.loging = false;
              console.log(res.data);
              if (res.code == code) {
                setSession("userInfo", res.data);
                setSession("voucher", res.data.tokenValue);
                this.$message({
                  message: "登录成功！",
                  type: "success",
                });
                self.$router.push("/");
                location.reload();
              } else {
                this.$message.error(res.message);
                return false;
              }
            })
            .catch(function (error) {
              console.log(error);
              self.loging = false;
              self.$message.error("网络故障!");
            });
        } else {
          console.log("错误登录!!");
          return false;
        }
      });
    },
  },
  mounted() {
    this.getImg();
  },
};
</script>

<style scoped lang="scss">
.login-content-form {
  margin-top: 20px;
  .login-content-code {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .login-content-code img {
    width: 135px;
    height: 48px;
  }
  .login-content-submit {
    width: 100%;
    letter-spacing: 2px;
    font-weight: 300;
    margin-top: 15px;
  }
}
</style>
