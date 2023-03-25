import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import router from './router'
// import XcVueMb from '../dist/xc-vue-mb.es';
// import "../dist/style.css"
import XcVueMb from '../packages/components/index.js';
import "../packages/css/vantmb.less";
// 引入全局组件
import showCodeCard from '@/components/ShowCodeCard/showCodeCard.vue'
import tableCode from '@/components/table/tableCode.vue'
//引入rem
import '@/utils/WapRoot.js';

const app = createApp(App)
app.use(router)
app.use(XcVueMb)

app.component('xc-showCodeCard',showCodeCard).component('xc-tableCode',tableCode).mount('#app')


