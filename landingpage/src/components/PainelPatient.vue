<template>
  <div class="flex flex-col items-center text-white mt-10">
    <!-- Título de boas-vindas -->
    <h1 class="text-3xl mb-12 ">Bem-vindo(a) {{ name }}!</h1>

    <!-- Seção do gráfico -->
    <div class="max-w-4xl p-4 rounded-lg ml-30 min-w-full">
      <!-- Botões de navegação para os gráficos -->
      <p class="mb-5 text-2xl text-center sm:text-left">GRÁFICO</p>
      <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          class="w-full sm:flex-1 min-w-[200px] h-12 bg-[#FF8139] px-6 py-3 text-white rounded-md hover:bg-[#FF5C00] text-center mb-2"
          @click="activeTab = index"
        >
          {{ tab }}
        </button>
      </div>


      <!-- Gráfico -->
      <div class="bg-[#3E3E3E] p-4 rounded-lg min-w-full">
        <div class="relative p-16">
          <canvas id="chart"></canvas>
        </div>
        <p class="text-right text-xs mt-2">03/04/2024</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabs: ['Peso', 'IMC', 'Pregas Cutâneas', 'Circunferências'],
        activeTab: 0, 
      };
    },
    computed: {
      name() {
        return localStorage.getItem('name');
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  