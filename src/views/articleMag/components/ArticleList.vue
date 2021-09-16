<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" label="ID" width="80">
        <template v-slot="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Date">
        <template v-slot="scope">
          <span>{{ scope.row.timestamp }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="Author">
        <template v-slot="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="Importance">
        <template v-slot="scope">
          <el-icon v-for="n in scope.row.importance" :key="n">
            <star-filled />
          </el-icon>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="110">
        <template v-slot="{ row }">
          <el-tag :type="row.status">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Title">
        <template v-slot="{ row }">
          <router-link :to="{name:'EditArticle', query: {item:JSON.stringify(row)}}" class="link-type">
            <span>{{ row.title }}</span>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template v-slot="scope">
          <router-link :to="{name:'EditArticle', query: {item:JSON.stringify(scope.row)}}">
            <el-button type="primary" size="small" icon="el-icon-edit">
              Edit
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { StarFilled } from "@element-plus/icons";
import { reactive, toRefs, ref } from "vue";

export default {
  components: {
      StarFilled
  },
  setup() {
    const state = reactive({
      list: [
        {
          id: 1,
          timestamp: "2021-9-15 08:45",
          author: "zssaer",
          reviewer: "zssaer",
          title: "SDCVDVEW2",
          content_short: "22222222",
          content: "2dsddddddddddddddddddddddddddddddd",
          importance: 5,
          status: "published",
          display_time: "2021-9-15 08:45",
          comment_disabled: true,
          pageviews: 4000,
        },
        {
          id: 2,
          timestamp: "2021-9-15 08:45",
          author: "zssaer",
          reviewer: "zssaer",
          title: "FFFFFFFFFFFF2",
          content_short: "22222222",
          content: "2dsddddddddddddddddddddddddddddddd",
          importance: 4,
          status: "published",
          display_time: "2021-9-15 08:45",
          comment_disabled: true,
          pageviews: 4000,
        },
        {
          id: 3,
          timestamp: "2021-9-15 08:45",
          author: "zssaer",
          reviewer: "zssaer",
          title: "EGDSFVDSV2",
          content_short: "22222222",
          content: "2dsddddddddddddddddddddddddddddddd",
          importance: 4,
          status: "published",
          display_time: "2021-9-15 08:45",
          comment_disabled: true,
          pageviews: 4000,
        },
      ],
    });

    let listLoading = ref(false);

    return {
      ...toRefs(state),
      listLoading,
    };
  },
};
</script>

<style lang="scss" scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
.el-table__row{
    .cell{
        a{
            text-decoration: none;  
        }
    }
}
</style>
