<template>
  <aside :class="sidebarClass">
    <nav class="h-full bg-[#131212] shadow pt-16 flex flex-col justify-between">
      <div>
        <a href="#" @click.prevent="selectMenu('painel')" class="py-2 px-4 flex items-center" :class="menuClass('painel')">
          <img class="h-6 w-6 mr-3" src="../assets/painel.png" alt="Simbolo painel">
          Início/ Painel
        </a>
        <a href="#" @click.prevent="selectMenu('historico')" class="py-2 px-4 flex items-center" :class="menuClass('historico')">
          <img class="h-6 w-6 mr-3" src="../assets/avaliations.png" alt="Simbolo historico">
          Histórico de avaliações
        </a>
        <a href="#" @click.prevent="selectMenu('configuracoes')" class="py-2 px-4 flex items-center" :class="menuClass('configuracoes')">
          <img class="h-6 w-6 mr-3" src="../assets/config.png" alt="Simbolo configurações">
          Configurações
        </a>
      </div>
      <!-- Conteúdo adicional para telas menores -->
      <div class="md:hidden flex flex-col gap-4 p-4 relative">
        <!-- Informação do usuário e imagem lado a lado -->
        <div class="flex items-center gap-4">
          <!-- Informação do usuário -->
          <div class="font-medium text-white">
            <div>Brenda Fernanda</div>
            <div class="text-sm text-gray-400">Paciente</div>
          </div>
          <!-- Imagem do usuário -->
          <div @click="toggleDropdown" class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
            <img class="w-full h-full object-cover rounded-full" src="https://via.placeholder.com/150" alt="User Image" />
          </div>
        </div>
        <!-- Botão Sair fixo -->
        <div class="w-full">
          <a @click="logout" class="flex items-center justify-end px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer">
            <span class="mr-2">Sair</span>
            <img src="../assets/exit.png" alt="Logout Icon" class="w-4 h-4">
          </a>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SideBarPatient',
  props: {
    isOpen: {
      type: Boolean,
      default: true 
    }
  },
  data() {
    return {
      selectedMenu: 'painel',
      isDropdownOpen: false // Adicionando a propriedade isDropdownOpen
    };
  },
  computed: {
    sidebarClass() {
      return {
        'fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300': true,
        'transform translate-x-0': this.isOpen,
        '-translate-x-full': !this.isOpen
      };
    }
  },
  methods: {
    selectMenu(menu) {
      this.selectedMenu = menu; 
      this.$emit('menu-selected', menu);
    },
    menuClass(menu) {
      return this.selectedMenu === menu ? 'bg-[#FF8139]' : 'bg-[#131212] hover:bg-gray-700';
    },
    logout() {
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>
</style>