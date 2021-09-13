<template>
  <div>
    <TEditor ref="editor" v-model="subform.value" />
  </div>
</template>

<script>
import TEditor from "@/views/contentMag/richText/components/TEditor.vue";
import { reactive } from 'vue';

export default {
  components: {
    TEditor,
  },
  setup() {
    const subform = reactive({
        value: ''
    })
    return {
        subform
    };
  },
};
</script>

<style lang="scss" scoped></style>
