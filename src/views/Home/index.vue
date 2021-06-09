<template>
  <div class="about">这是/home路由页面</div>
  <hr />
  <b>自定义v-model的使用：</b>
  <custom-input
    v-model:first-name.capitalize="nameOfFirst"
    v-model:last-name.capitalize="nameOfLast"
    lastId="my-last"
  ></custom-input>
  <p>firstname:{{ nameOfFirst }}</p>
  <p>lastname:{{ nameOfLast }}</p>

  <hr />
  <b>作用域插槽的使用：</b>
  <current-user>
    <template v-slot:default="slotProps">
      {{ slotProps.user.firstName }}
    </template>
  </current-user>

  <hr />
  <b>v-is指令的作用：</b>
  <ul>
    <li v-is="'some-component'"></li>
  </ul>
  <hr />
  <b>:is属性的作用：</b>
  <component :is="'someComponent'"></component>
</template>

<script>
import CustomInput from "@/components/v-model/CustomInput.vue";
import CurrentUser from "@/components/slot/CurrentUser.vue";
import SomeComponent from "@/components/someComponent/index.vue";
export default {
  name: "Home",
  components: {
    CustomInput,
    CurrentUser,
    SomeComponent,
  },
  props: {},
  data() {
    return {
      nameOfFirst: "wang",
      nameOfLast: "man",
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
