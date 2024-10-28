<template>
  <div class="w-full">
    <!-- Navbar -->
    <div class="relative flex h-16 items-center bg-[#131212] w-full">
      <div class="flex flex-1 items-center justify-between">
        <!-- Menu Hambúrguer e Logo -->
        <div class="flex items-center px-8">
          <!-- Botão Hambúrguer -->
          <button @click="$emit('toggle-menu')" class="flex items-center mr-4 focus:outline-none">
            <svg v-if="!menuOpen" class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img class="h-15 md:h-12 w-auto ml-3" src="../assets/avasoft.svg" alt="Avasoft Company Logo" />
          </div>
        </div>

        <!-- Informação do usuário e botão Sair -->
        <div class="hidden lg:flex sm:ml-6 space-x-8 items-center relative px-16">
          <div class="flex items-center gap-4">
            <!-- Informação do usuário -->
            <div class="font-medium text-white">
              <div>{{ name }}</div>
              <div class="text-sm text-gray-400">{{ role }}</div>
            </div>

            <!-- Imagem do usuário -->
            <div @click="toggleDropdown" class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
              <img class="w-full h-full object-cover rounded-full" src="https://via.placeholder.com/150" alt="User Image" />
            </div>
          </div>

          <!-- Dropdown -->
          <transition name="fade">
            <div v-if="isDropdownOpen" class="absolute top-full mt-2 w-48 bg-[#131212] text-white divide-y divide-gray-100 rounded-lg shadow z-50 mr-32">
              <div class="py-1">
                <a @click="logout" class="flex items-center justify-end px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer">
                  <span class="mr-2">Sair</span>
                  <img src="../assets/exit.png" alt="Logout Icon" class="w-4 h-4">
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../plugins/config';

export default {
  props: {
    menuOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDropdownOpen: false,
      user: {
        fullName: '',
        role: '',
      },
    };
  },
  computed: {
    name() {
      return localStorage.getItem('name');
    },
    role() {
      return localStorage.getItem('role');
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {
      localStorage.removeItem('authToken');
      this.$router.push('/');
    },
    async getUserInfo() {
      try {
          const response = await axios.get('/users/me');
          console.log(response.data); 
          this.user.fullName = response.data.user.fullName;
          this.user.role = response.data.user.role;
      } catch (error) {
          console.error(error);
      }       
    },
  },
  mounted() {
    this.getUserInfo(); 
  }
};
</script>

<style scoped>
</style>