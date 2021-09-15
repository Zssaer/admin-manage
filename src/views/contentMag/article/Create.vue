<template>
  <div>
    <el-card>
      <ArticleDetail></ArticleDetail>
    </el-card>
  </div>
</template>

<script>
import ArticleDetail from "../article/components/ArticleDetail.vue";

export default {
  components: {
    ArticleDetail,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
