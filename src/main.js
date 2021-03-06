import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "./store";
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css'
import '../src/theme/index.scss';
import lang from 'element-plus/lib/locale/lang/zh-cn'
import mitt from 'mitt';


import ECharts from 'vue-echarts'
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";


// import '../mockjs'

const app = createApp(App);

app.use(ElementPlus, {locale: lang})
    .use(store).use(router).component('v-chart', ECharts)
    .use(VueCropper).mount("#app");
app.config.globalProperties.mittBus = mitt();
