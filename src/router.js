import { createRouter, createWebHistory } from "vue-router";
import About from './views/About/index.vue';
import Home from './views/Home/index.vue';
import Login from './views/Login/index.vue';
import Register from './views/Register/index.vue';

const routes = [
  { path: '/about', component: About },
  {
    path: '/login', component: Login, name: 'login', beforeEnter(to, from, next) {
      console.log('进入login页面');
      next();   // 如果参数中出现了next，就必须显式调用next()函数，参数中不显示next就可以不显示调用。同全局的beforeEach
    }
  },
  { path: '/register', component: Register },
  { path: '/', component: Home },
  // { path: '/', component: () => import('@/views/Home/index.vue') }, //也可以这样使用路由懒加载
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

console.log('router=>', router)
console.log(router.hasRoute('login'))   // true
console.log(router.getRoutes())   // [{…}, {…}, {…}]  routes中的路由数组

// 全局路由守卫
// 全局前置钩子
router.beforeEach((to, from, next) => {
  if (to.path == '/login' || to.path == '/register') {
    next();   // 必须执行next，否则路由不会渲染
  } else {
    alert('您还没有登录，请先登录');
    next('/login');
  }
})
// 全局后置钩子
router.afterEach((to, from) => {
  console.log('to=>', to)
  console.log('form=>', from)
})

export default router;