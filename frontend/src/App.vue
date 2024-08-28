<!-- App.vue -->
<template>

  <div id="app">
    <HeaderContent v-if="!$route.meta.hideHeader" />
    <!-- <HeaderContent v-if="isLoggedIn" /> -->
    <section class="px-20">
      <router-view />  
    </section>
  </div>

</template>

<script>
import HeaderContent from './components/HeaderContent.vue';

export default {
  name: 'App',
  components: {
    HeaderContent
  },
  // computed: {
  //   isLoginPage() {
  //     return this.$route.path === '/login'; // Verifica se a rota atual é a de login
  //   }
  // }
};
</script>

<style scoped>



</style>
