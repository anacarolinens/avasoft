<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center">
      <div class="flex flex-1 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-15 md:h-12 w-auto" src="../assets/logo-avasoft.png" alt="Avasoft Company Logo" />
          </div>
        </div>
        <div class="hidden md:block sm:ml-6 space-x-8 flex items-center" :class="{ 'hidden': menuOpen, 'flex': !menuOpen }">
          <ul class="md:flex md:items-center">
            <li class="md:mx-4" v-for="link in Links">
              <a :href="link.link" class="relative">{{ link.name }}</a>
            </li>
            <Button>
              Baixar agora
              <img src="../assets/download.png" alt="Ícone de download" class="h-5 w-5 ml-2">
            </Button>
          </ul>
        </div>
        <div class="md:hidden">
          <button @click="toggleMenu" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-[#FF8139] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!menuOpen" class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <!-- Mobile menu, show/hide based on menu state. -->
          <div v-if="menuOpen" class="absolute top-16 right-0 inset-x-0 p-2 transition transform origin-top-right z-10 bg-white rounded-md shadow-lg">
            <ul class="space-y-2">
              <li v-for="link in Links" :key="link.name" class="px-4 py-2 hover:bg-gray-100">
                <a :href="link.link" class="block text-gray-700 hover:text-gray-900">{{ link.name }}</a>
              </li>
              <li class="px-4 py-2">
                <Button>
                  Baixar agora
                  <img src="../assets/download.png" alt="Ícone de download" class="h-5 w-5 ml-2">
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  components: {
    Button
  },
  data() {
    return {
      menuOpen: false,
      Links: [
        { name: 'Home', link: '/' },
        { name: 'Atributos', link: '/atributos' },
        { name: 'Avasoft', link: '/avasoft' },
        { name: 'Contato', link: '/contato' },
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
