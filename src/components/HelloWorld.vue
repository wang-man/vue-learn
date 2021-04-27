<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <input v-model="message" placeholder="edit me" />
  <p>Message is: {{ message }}</p>
</template>

<script>
import { defineProps, reactive } from "vue";

// defineProps({
//   msg: String,
// });

// const state = reactive({ count: 0, message: null });

export default {
  name: "HelloWorld",
  props: {
    firstId: String,
    lastId: String,
    firstLabel: String,
    lastLabel: String,
    firstName: String || Number,
    lastName: String || Number,
    firstNameModifiers: {
      default: () => ({}),
    },
    lastNameModifiers: {
      default: () => ({}),
    },
  },
  data() {
    return {
      count: 0,
      message: null,
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
