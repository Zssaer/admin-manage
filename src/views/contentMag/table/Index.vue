<template>
  <div>
    <Table :data="tableData" :header="tableHeader" @editItem="editItem"></Table>
    <Edit :formItem="formItem" v-model:form="form"  v-model="dialogFormVisible"></Edit>
  </div>
</template> 

<script>
import { reactive, toRefs, nextTick } from "vue";
import Table from "@/views/contentMag/table/components/TableShow.vue";
import Edit from "@/views/contentMag/table/components/TableEdit.vue";
export default {
  components: {
    Table,
    Edit
  },
  setup() {
    const state = reactive({
      dialogFormVisible: false,
      tableHeader: [
        {
          prop: "date",
          label: "日期",
          width: "150",
          fixed: "left",
        },
        {
          prop: "name",
          label: "姓名",
          width: "120",
        },
        {
          prop: "province",
          label: "省份",
          width: "120",
        },
        {
          prop: "city",
          label: "市区",
          width: "120",
        },
        {
          prop: "address",
          label: "地址",
          width: "600",
        },
        {
          prop: "zip",
          label: "邮编",
          width: "120",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎22",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
      form: {
        date: "",
        name: "",
        province: "",
        city: "",
        address: "",
        zip: "",
      },
      formItem:[
        {
          label:"日期",
          date:"date",
          width:"120px",
          autocomplete:"off"
        },
        {
          label:"姓名",
          date:"name",
          width:"120px",
          autocomplete:"off"
        },
        {
          label:"省份",
          date:"province",
          width:"120px",
          autocomplete:"off"
        },
      ],
    });

    // 表单初始化，`resetFields()` 因为目前无法使用
    const initForm = () => {
      state.form.date = "";
      state.form.name = "";
      state.form.province = "";
      state.form.city = "";
      state.form.address = "";
      state.form.zip = "";
    };

    const editItem = (row) => {
      state.dialogFormVisible = true;
      nextTick(() => {
        state.form = Object.assign({}, row);
        console.log(row);
      });
    };

    return {
      ...toRefs(state),
      initForm,
      editItem,
    };
  },
};
</script>

<style lang="scss" scoped></style>
