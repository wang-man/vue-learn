<template>
  <div class="login">这是登录路由页面</div>
  <button @click="toOtherPage">我要去注册页面</button>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      hello: "world",
    };
  },
  methods: {
    toOtherPage() {
      this.$router.push({
        path: "/register",
      });
    },
  },
  // 组件内的路由首位
  beforeRouteEnter: (to, from, next) => {
    console.log("login-to=>", to);
    next((vm) => {
      alert("hello:" + vm.hello);
    });
  },
  beforeRouteLeave: (to, from, next) => {
    if (confirm("确定离开此页面吗？") == true) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
