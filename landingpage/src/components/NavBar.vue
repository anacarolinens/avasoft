<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-5">
    <div class="relative flex h-16 items-center">
      <div class="flex flex-1 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-15 md:h-12 w-auto" src="../assets/logo-avasoft.png" alt="Avasoft Company Logo" />
          </div>
        </div>
        <div class="hidden lg:block sm:ml-6 space-x-8 items-center">
          <ul class="md:flex md:items-center">
            <li class="md:mx-4" v-for="link in Links" :key="link.name">
              <a :href="link.link" class="relative">{{ link.name }}</a>
            </li>
            <Button class="ml-5 bg-[#FF8139] px-4 lg:px-6 py-3 text-white rounded-md hover:bg-[#FF5C00]">
              Baixar agora
              <img src="../assets/download.png" alt="Ícone de download" class="h-5 w-5 ml-2">
            </Button>
            <Button @click="openModal" class="ml-5 bg-[#212121] px-4 lg:px-6 py-3 text-white rounded-md hover:bg-[#3d3d3d]">
              Área do Paciente
              <img src="../assets/login.png" alt="Ícone de entrar" class="h-4 w-4 ml-2">
            </Button>
          </ul>
        </div>

        <div class="lg:hidden">
          <button @click="toggleMenu" type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-[#FF8139] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!menuOpen" class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <!-- Mobile menu, show/hide based on menu state. -->
          <div v-if="menuOpen"
            class="absolute top-16 lg:top-0 right-0 inset-x-0 p-2 transition transform origin-top-right z-10 bg-white rounded-md shadow-lg lg:relative lg:bg-transparent lg:p-0">
            <ul class="space-y-2">
              <li v-for="link in Links" :key="link.name" class="px-4 py-2 hover:bg-[#FFD6CE]">
                <a :href="link.link" class="block text-gray-700">{{ link.name }}</a>
              </li>
              <li class="px-4 py-2 flex">
                <button class="bg-[#FF8139] px-4 lg:px-6 py-3 text-white rounded-md hover:bg-[#FF5C00] flex items-center">
                  Baixar agora
                  <img src="../assets/download.png" alt="Ícone de download" class="h-5 w-5 ml-2">
                </button>
                <Button @click="openModal" class="ml-5 bg-[#212121] px-4 lg:px-6 py-3 text-white rounded-md hover:bg-[#3d3d3d]">
                  Área do Paciente
                  <img src="../assets/login.png" alt="Ícone de entrar" class="h-5 w-5 ml-2">
                </Button>
              </li>           
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Login do Paciente -->
    <LoginPatientModal :isOpen="showModal" @close="closeModal" />
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import LoginPatientModal from '../components/LoginPatientModal.vue';

export default {
  components: {
    Button,
    LoginPatientModal
  },
  data() {
    return {
      menuOpen: false,
      showModal: false,
      Links: [
        { name: 'Início', link: '#home' },
        { name: 'Atributos', link: '#attributes' },
        { name: 'Avasoft', link: '#avasoft' },
        { name: 'Contato', link: '#contact-area' },
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
a.relative {
  position: relative;
}

a.relative::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: calc(100% - 24px);
  height: 2px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

a.relative:hover::after {
  background-color: #FF8139;
}
</style>
