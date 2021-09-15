<template>
  <div class="createPost-container">
    <el-form
      ref="ddcdc"
      :model="postForm"
      :rules="rules"
      class="form-container"
    >
      <div class="buttons">
        <el-button type="primary" @click="submit">{{ button }}</el-button>
      </div>
      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px" prop="title">
              <MDinput
                v-model="postForm.title"
                :maxlength="100"
                name="name"
                required
              >
                文章标题
              </MDinput>
              <span v-show="titleLength" class="word-counter"
                >{{ titleLength }}个字</span
              >
            </el-form-item>
            <div class="postInfo-container">
              <el-row>
                <el-col :span="8">
                  <el-form-item label="作者:" class="postInfo-container-item">
                    <el-select
                      v-model="postForm.author"
                      default-first-option
                      placeholder=""
                    >
                      <el-option
                        v-for="(item, index) in userListOptions"
                        :key="index"
                        :label="item"
                        :value="item"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item
                    label="文章 时间:"
                    class="postInfo-container-item"
                  >
                    <el-date-picker
                      v-model="postForm.displayTime"
                      type="date"
                      placeholder=""
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item
                    label="推荐 等级:"
                    class="postInfo-container-item"
                  >
                    <el-rate
                      v-model="postForm.importance"
                      :max="5"
                      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                      :low-threshold="1"
                      :high-threshold="5"
                      style="display: inline-block"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-form-item style="margin-bottom: 40px" label="简介:">
          <el-input
            v-model="postForm.content_short"
            :rows="1"
            type="textarea"
            class="article-textarea"
            autosize
            placeholder="请输入文章简介"
          />
          <span v-show="contentShortLength" class="word-counter"
            >{{ contentShortLength }}个字</span
          >
        </el-form-item>

        <el-form-item prop="content" style="margin-bottom: 30px">
          <TEditor ref="editor" v-model="postForm.content" />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import TEditor from "@/views/contentMag/richText/components/TEditor.vue";
import MDinput from "@/components/MDinput/index.vue";
import { ElMessage } from "element-plus";
import { reactive, ref, computed, toRefs } from "vue";

export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    TEditor,
    MDinput,
  },
  setup(props) {
    const button = computed(() => {
      const { isEdit } = toRefs(props);
      return isEdit === true ? "修改" : "创建";
    });

    const validateRequire = async (rule, value, callback) => {
      if (value === "") {
        await setTimeout(() => {
          ElMessage({
            message: rule.field + "为必传项",
            type: "error",
          });
        });

        callback(new Error(rule.field + "为必传项"));
      } else {
        callback();
      }
    };

    const rules = {
      title: [{ validator: validateRequire }],
      content: [{ validator: validateRequire }],
    };

    const postForm = reactive({
      status: "draft",
      title: "", // 文章题目
      author: "",
      content: "", // 文章内容
      content_short: "", // 文章摘要
      displayTime: "undefined", // 前台展示时间
      id: undefined,
      comment_disabled: false,
      importance: 0,
    });

    let userListOptions = computed(() => {
      return ["zssaer", "admin", "suis", "yamasaki", "ninomiya", "Rayen"];
    });

    const titleLength = computed(() => {
      return postForm.title.length;
    });

    const contentShortLength = computed(() => {
      return postForm.content_short.length;
    });

    let loading = ref(false);
    const ddcdc = ref(null);

    const submit = () => {
      loading.value = true;
      ddcdc.value.validate((valid) => {
        console.log(valid);
        if (valid) {
          ElMessage({
            message: "发布文章成功!",
            type: "success",
          });
          postForm.status = "published";
          loading.value = false;
        } else {
          loading.value = false;
        }
      });
    };

    return {
      button,
      validateRequire,
      postForm,
      rules,
      userListOptions,
      titleLength,
      contentShortLength,
      loading,
      ddcdc,
      submit,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/mixins/mixins.scss";
.buttons {
  text-align: right;
  margin-right: 20px;
}
.createPost-container {
  position: relative;
  .createPost-main-container {
    padding: 0px 20px 20px 20px;
    .el-form-item__label {
      padding: 0 12px 0 0;
    }
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
  }
  .word-counter {
    position: absolute;
    right: 10px;
    bottom: -5px;
  }
}
.article-textarea ::v-deep {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
