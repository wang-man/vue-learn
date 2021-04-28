<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <img :src="Cat" class="cat-img" />
  <HelloWorld msg="Hello Vue 3 + Vite" />

  <div :style="{ 'margin-Top': '100px' }">以下是路由容器：</div>
  <div class="router-view">
    <router-view></router-view>
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Cat from "./assets/1.jpg";
import { reactive } from "vue";
import "./app.scss";

const state = reactive({ nameOfFirst: "wang", nameOfLast: "a" });
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
