<template>
  <div class="slot">
    姓名：<slot v-bind:user="user">{{ user.lastName }}</slot>
  </div>
</template>
<script>
// 主要演示作用域插槽，匿名插槽和具名插槽容易理解
// 作用域插槽的用途在与：比如父组件在使用子组件插槽的时候，父组件需要结合子组件的数据一起来渲染一些东西，这个时候就需要将子组件的状态传给这个插槽，让父组件可以访问到
export default {
  name: "CurrentUser",
  props: {},
  data() {
    return {
      user: {
        firstName: "man",
        lastName: "wang",
        age: 20,
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.slot {
  margin-top: 30px;
  border: 1px solid;
}
</style>
