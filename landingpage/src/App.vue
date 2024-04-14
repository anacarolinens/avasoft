

<template>
  <div class="justify-center mx-auto">
    <Header></Header>
    <div class="py-4 px-2 max-w-7xl mb-12 justify-center mx-auto">
     <router-view></router-view>
    </div>
  </div>
  <Footer/>
</template>

<script setup>
  import { reactive } from "vue";
  import Footer from "./components/Footer.vue"; 
  import Header from "./components/Header.vue";

  const date = new Date();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
</style>
