

<template>
  <div>
    <Header />
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
* {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
