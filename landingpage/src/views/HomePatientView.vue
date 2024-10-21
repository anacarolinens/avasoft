<template>
  <div class="justify-center mx-auto bg-[#1E2021] min-h-screen flex flex-col">
    <HeaderPatient/>
    <main class="flex flex-1 py-4 px-2 max-w-7xl mb-12 mx-auto">
      <div class="relative isolate overflow-hidden">
        <SidebarPatient @menu-selected="handleMenuSelected" :isOpen="isSidebarOpen" />
        <div class="flex-1">
          <PainelPatient v-if="selectedMenu === 'painel'" />
        </div>
      </div>
    </main>
    <FooterPatient/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FooterPatient from '../components/FooterPatient.vue';
import HeaderPatient from '../components/HeaderPatient.vue';
import SidebarPatient from '../components/SideBarPatient.vue';
import PainelPatient from '../components/PainelPatient.vue';

const selectedMenu = ref('painel');
const isSidebarOpen = ref(false);

function handleMenuSelected(menu) {
  selectedMenu.value = menu;
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>