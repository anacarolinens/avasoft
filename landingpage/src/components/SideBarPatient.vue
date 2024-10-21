<template>
    <aside :class="sidebarClass">
      <nav class="bg-[#1E2021]">
        <a href="#" @click.prevent="selectMenu('painel')" class="py-2 px-4 flex items-center" :class="menuClass('painel')">
          <img class="h-6 w-6 mr-3" src="../assets/painel.png" alt="Simbolo painel">
          Início/ Painel
        </a>
        <a href="#" @click.prevent="selectMenu('historico')" class="py-2 px-4 flex items-center" :class="menuClass('historico')">
          <img class="h-6 w-6 mr-3" src="../assets/avaliations.png" alt="Simbolo historico">
          Histórico de avaliações
        </a>
        <a href="#" @click.prevent="selectMenu('configuracoes')" class="py-2 px-4 flex items-center" :class="menuClass('configuracoes')">
          <img  class="h-6 w-6 mr-3" src="../assets/config.png" alt="">
          Configurações
        </a>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        selectedMenu: 'painel', // Menu inicialmente selecionado
      };
    },
    computed: {
      sidebarClass() {
        return {
          'w-64 bg-gray-800 text-white transition-transform duration-300': true,
          'transform translate-x-0': this.isOpen,
          '-translate-x-full': !this.isOpen
        };
      }
    },
    methods: {
      selectMenu(menu) {
        this.selectedMenu = menu; // Atualiza o menu selecionado
      },
      menuClass(menu) {
        // Altera a cor de fundo conforme a opção selecionada
        return this.selectedMenu === menu ? 'bg-[#FF8139]' : 'bg-[#1E2021] hover:bg-gray-700';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilo adicional, se necessário */
  </style>
  