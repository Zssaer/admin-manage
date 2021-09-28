<template>
  <div class="wrapper">
    <slot></slot>
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
.wrapper {
  padding: 15px;
  word-wrap: break-word;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  min-height: 85vh;
}
</style>
