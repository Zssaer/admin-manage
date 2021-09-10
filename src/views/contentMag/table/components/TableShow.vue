<template>
  <el-card>
    <el-table :data="tableData" border style="width: 100%">
      <!-- prop: 字段名name, label: 展示的名称, fixed: 是否需要固定(left, right)
          minWidth: 设置列的最小宽度(不传默认值), oper: 是否有操作列
          oper.name: 操作列字段名称, oper.clickFun: 操作列点击事件, formatData: 格式化内容 -->
      <el-table-column
        v-for="(th, key) in header"
        :key="key"
        :prop="th.prop"
        :label="th.label"
        :fixed="th.fixed"
        :width="th.width"
        align="center"
      >
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        min-width="200"
      >
        <template #default="scope">
          <el-button @click="edit(scope.row)" type="primary" size="small"
            >编辑</el-button
          >
          <el-button type="primary" size="small" @click="deleteItem(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { computed, toRefs } from "vue";
import { ElMessageBox } from "element-plus";
import { ElMessage } from "element-plus";

export default {
  props: {
    data: Array,
    header: Array,
  },
  setup(props,{ emit }) {
    const tableData = computed(() => {
      const { data } = toRefs(props);
      return data.value;
    });

    const tableHeader = computed(() => {
      const { header } = toRefs(props);
      return header.value;
    });

    const deleteItem = (row) => {
      ElMessageBox.confirm("此操作将永久删除该项目, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
          ElMessage({
            type: "success",
            message: "删除成功!",
          });
      }).catch(() => {
        ElMessage({
          type: "info",
          message: "已取消删除",
        });
      });
    };

    const edit = (row) => {
      emit('editItem', row);
    };

    return {
      tableData,
      tableHeader,
      deleteItem,
      edit,
    };
  },
};
</script>

<style></style>
