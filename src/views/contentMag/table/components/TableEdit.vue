<template>
  <el-dialog title="编辑" v-model="modelValue">
    <el-form :model="form">
      <el-form-item
        v-for="(item, key) in formItem"
        :key="key"
        :label="item.label"
        :label-width="item.width"
      >
        <el-input v-model="content" :autocomplete="item.autocomplete"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="modelValue = false">取 消</el-button>
        <el-button type="primary" @click="enter">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
export default {
  props: {
    modelValue: Boolean,
    formItem: Array,
    form: {},
  },
  emits: ["update:modelValue", "update:form"],
  setup(props, { emit }) {
    const state = reactive({
      dialogFormVisible: false,
      form: computed(() => {
        const { form } = toRefs(props);
        return form.value;
      }),
      formItem: computed(() => {
        const { formItem } = toRefs(props);
        return formItem.value;
      }),
    });

    const content= computed((val) => {
        return state.form + val
    }),
    
    const enter = () => {
      console.log(state.form.date);
      emit("update:modelValue", false);
    };
    return {
      state,
      content,
      enter,
    };
  },
};
</script>

<style lang="scss" scoped></style>
