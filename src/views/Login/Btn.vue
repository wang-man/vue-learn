<template>
  <button class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {},
  data() {
    return {
      text: "一个按钮",
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
