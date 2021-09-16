<template>
  <div>
    <el-card>
      <ArticleDetail :isEdit="true"></ArticleDetail>
    </el-card>
  </div>
</template>

<script>
import ArticleDetail from "./components/ArticleDetail.vue";

export default {
  name: 'EditArticle',
  components: {
    ArticleDetail,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
