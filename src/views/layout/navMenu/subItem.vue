<template>
  <template v-for="(val, index) in chils">
    <!-- 如果存在路由hidden标签内容为true,则侧边导航栏不给予显示 -->
    <div v-if="!val.hidden" :key="index">
      <el-sub-menu
        :index="val.path"
        :key="val.path"
        v-if="val.children && val.children.length > 0"
      >
        <template #title>
          <i :class="val.meta.icon"></i>
          <span :style="{ color: menuColor }">{{ val.meta.title }}</span>
        </template>
        <sub-item :chil="val.children" />
      </el-sub-menu>
      <el-menu-item :index="val.path" :key="val.path" v-else>
        <template
          v-if="!val.meta.isLink || (val.meta.isLink && val.meta.isIframe)"
        >
          <i
            :class="val.meta.icon ? val.meta.icon : ''"
            :style="{ color: menuColor }"
          ></i>
          <span :style="{ color: menuColor }">{{ val.meta.title }}</span>
        </template>
        <template v-else>
          <a :href="val.meta.isLink" target="_blank">
            <i :class="val.meta.icon ? val.meta.icon : ''"></i>
            {{ val.meta.title }}
          </a>
        </template>
      </el-menu-item>
    </div>
  </template>
</template>

<script>
import { computed, defineComponent, onBeforeMount, toRefs, ref } from "vue";
import { useStore } from "@/store/index.js";

export default defineComponent({
  name: "navMenuSubItem",
  props: {
    chil: {
      type: Array,
      default: () => [],
    },
    menuColor: String,
  },
  setup(props) {
    const store = useStore();
    let cachedViews = ref([]);

    // 获取父级菜单数据
    const chils = computed(() => {
      return props.chil;
    });

    onBeforeMount(() => {
      props.chil.forEach((a) => {
        if (a.meta.noCache) {
          cachedViews.value.push(a.name);
        }
      });
      store.commit("getCachedViews", cachedViews.value);
    });

    return {
      chils,
      cachedViews,
    };
  },
});
</script>
