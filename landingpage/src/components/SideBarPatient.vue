<template>
  <aside :class="sidebarClass" class="">
    <nav class=" h-full bg-[#131212] shadow">
      <a class="px-4 flex items-center bg-[#131212] py-8">
        
      </a>
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
    }
  }
};
</script>

<style scoped>
</style>