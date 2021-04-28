<template>
  <div class="about">这是test路由页面</div>
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
</template>

<script>
import CustomInput from "@/components/v-model/CustomInput.vue";
import CurrentUser from "@/components/slot/CurrentUser.vue";
export default {
  name: "About",
  components: {
    CustomInput,
    CurrentUser,
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
