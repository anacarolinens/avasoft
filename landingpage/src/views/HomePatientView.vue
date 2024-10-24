<template>
  <div class="flex flex-col min-h-screen bg-[#1E2021]">
    <!-- Header -->
    <HeaderPatient @toggle-menu="toggleMenu" :menuOpen="isSidebarOpen" />

    <div class="flex flex-1 transition-transform duration-300" :class="{ 'ml-64': isSidebarOpen }">
      <!-- Sidebar -->
      <SideBarPatient :isOpen="isSidebarOpen" @menu-selected="handleMenuSelected" />

      <!-- Main Content -->
      <div class="flex-1 overflow-auto">
        <main class="py-4 px-2 max-w-7xl mb-12 mx-auto">
          <div class="relative isolate overflow-hidden">
            <div class="mx-auto justify-center lg:flex flex-col items-center">
              <PainelPatient v-if="selectedMenu === 'painel'" />
              <HistoryPatient v-else-if="selectedMenu === 'historico'" />
              <ConfigPatient v-else-if="selectedMenu === 'configuracoes'" />
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Footer -->
    <FooterPatient :isSidebarOpen="isSidebarOpen"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FooterPatient from '../components/FooterPatient.vue';
import HeaderPatient from '../components/HeaderPatient.vue';
import SideBarPatient from '../components/SideBarPatient.vue';
import PainelPatient from '../components/PainelPatient.vue';
import HistoryPatient from '../components/HistoryPatient.vue';
import ConfigPatient from '../components/ConfigPatient.vue';

const selectedMenu = ref('painel');
const isSidebarOpen = ref(false); 

function handleMenuSelected(menu) {
  selectedMenu.value = menu;
}

function toggleMenu() {
  isSidebarOpen.value = !isSidebarOpen.value;
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