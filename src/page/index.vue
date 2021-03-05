<template>
  <img alt="Vue logo" :src="logo">
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script>
import HelloWorld from "_COMP_/HelloWorld.vue";
import logo from "_IMG_/logo.png";

export default {
  components: { HelloWorld },
  data() {
    return {
      logo
    };
  }
};
</script>
