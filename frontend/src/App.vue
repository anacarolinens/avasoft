<!-- App.vue -->
<template>
  <div id="app">
    <HeaderContent v-if="!$route.meta.hideHeader" />
    <!-- <HeaderContent v-if="isLoggedIn" /> -->
    <section class="pt-28 mx-auto md:px-20">
      <router-view :key="$route.fullPath" />  
    </section>
  </div>
</template>

<script>
import HeaderContent from './components/HeaderContent.vue';
import { onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    HeaderContent
  },
  setup() {
    onMounted(() => {
      setTimeout(() => {
        window.HSStaticMethods.autoInit();
      }, 100);
    });
  }
};
</script>

<style scoped>
</style>
