import { createApp } from 'vue'
import App from './App.vue'
// import { VueJsonp } from 'vue-jsonp';
const app = createApp(App);
// console.log(app)
// 引入vueJsonp 可以请求jsonp接口
// app.use(VueJsonp);
app.mount('#app');


weixinShare.init('oRQ8DwUPie40F8Mx4n__H1paCBpg', 'PAZTCFGL_01', 'wx023f6d0bdec19833');

