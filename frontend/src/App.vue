<!-- App.vue -->
<template>
  <div id="app">
    <HeaderContent v-if="!$route.meta.hideHeader" />
    <section class="pt-28 mx-auto md:px-20">
      <router-view :key="key"></router-view>
    </section>
  </div>
</template>

<script>
import HeaderContent from './components/HeaderContent.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    HeaderContent
  },
  setup() {
    const route = useRoute();
    const key = ref(route.fullPath);

    watch(route, (newRoute) => {
      key.value = newRoute.fullPath;
    });

    onMounted(() => {
      setTimeout(() => {
        window.HSStaticMethods.autoInit();
      }, 100);
    });

    return {
      key
    };
  }
};
</script>

<style scoped>
</style>
