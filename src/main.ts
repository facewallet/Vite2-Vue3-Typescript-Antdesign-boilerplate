import {createApp} from 'vue'
import router from "_ROUTER_/index";
import store from "_STORE_/index";
import api from "_API_/api";
// import type { App } from "vue";
import App from './App.vue'
import antd from "_PLGN_/antd";

let app = createApp(App)

app.config.globalProperties.$api = api;
app.use(router)
app.use(store)
app = antd(app)

app.mount('#app')