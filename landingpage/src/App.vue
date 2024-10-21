

<template>
  <router-view></router-view>
</template>

<script setup>
  import { reactive } from "vue";
  import router from "./router";

  const date = new Date();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
</style>
