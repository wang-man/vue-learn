import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);

//vue3配置全局变量
app.config.globalProperties.$mySelf = (name) => `my name is ${name}`

app.use(router);      // 注意，use一定要写在mount之前
app.mount('#app');

