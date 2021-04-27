

<template>
  <div class="myName-comp">
    <label :for="firstId">{{ firstLabel || "姓" }}：</label
    ><input
      type="text"
      :id="firstId"
      :value="firstName"
      @input="emitFirstName"
    />
    <label :for="lastId">{{ lastLabel || "名" }}：</label>
    <input type="text" :id="lastId" :value="lastName" @input="emitLastName" />
  </div>
</template>


<script>
// vue3与vue2组件在使用v-model不同。vue3里，组件上的 v-model 使用 modelValue 作为 prop 和 update:modelValue 作为事件。
// 可以通过向 v-model 传递参数来修改这些名称，那么自定义组件的value属性就不必是 modelValue，可以说是其他
// 由上，也可以为一个组件绑定多个v-model，只需要传入不同的参数就可以了。详情见官方文档
// https://v3.cn.vuejs.org/guide/component-custom-events.html#%E5%A4%9A%E4%B8%AA-v-model-%E7%BB%91%E5%AE%9A

import { defineProps } from "vue";

export default {
  name: "CustomInput",
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
    return {};
  },
  methods: {
    emitFirstName(e) {
      let value = e.target.value;
      if (this.firstNameModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit("update:firstName", value);
    },
    emitLastName(e) {
      let value = e.target.value;
      if (this.lastNameModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit("update:lastName", value);
    },
  },
};
</script>

<style scoped>
.myName-comp {
  display: flex;
}
</style>
