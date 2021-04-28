// import Router from 'vue-router';
import { createRouter, createWebHistory } from "vue-router";

import About from './views/About/index.vue';
import Home from './views/Home/index.vue';

const routes = [
  { path: '/about', component: About },
  { path: '/', component: Home },
  // { path: '/', component: () => import('@/views/Home/index.vue') }, //路由懒加载
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
// const VueRouter = ;
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  // mode: 'history',
  routes, // `routes: routes` 的缩写
})


export default router;