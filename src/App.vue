<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <img :src="Cat" class="cat-img" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <custom-input
    v-model:first-name.capitalize="state.nameOfFirst"
    v-model:last-name.capitalize="state.nameOfLast"
    lastId="my-last"
  ></custom-input>
  <p>firstname:{{ state.nameOfFirst }}</p>
  <p>lastname:{{ state.nameOfLast }}</p>

  <hr />
  <b>作用域插槽的使用：</b>
  <current-user>
    <template v-slot:default="slotProps">
      {{ slotProps.user.firstName }}
    </template>
  </current-user>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import CustomInput from "./components/v-model/CustomInput.vue";
import CurrentUser from "./components/slot/CurrentUser.vue";
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
