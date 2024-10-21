<template>
    <div class="flex flex-col items-center justify-center text-white">
      <!-- Título de boas-vindas -->
      <h1 class="text-2xl mb-8">Bem-vindo(a) Fernanda!</h1>
  
      <!-- Seção do gráfico -->
      <div class="max-w-4xl p-4 rounded-lg">
        <!-- Botões de navegação para os gráficos -->
         <p class="mt-5">GRÁFICO</p>
        <div class="flex justify-around mb-4">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            class="bg-orange-500 text-white px-6 py-2 mr-2 mt-8 rounded-lg hover:bg-orange-600 focus:outline-none"
            @click="activeTab = index"
          >
            {{ tab }}
          </button>
        </div>
  
        <!-- Gráfico -->
        <div class="bg-[#3E3E3E] p-4 rounded-lg">
          <div class="relative">
            <!-- Placeholder do gráfico, você pode integrar um gráfico real aqui -->
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
        // Tabs para os diferentes tipos de gráficos
        tabs: ['Peso', 'IMC', 'Pregas Cutâneas', 'Circunferências', 'Bioimpedância'],
        activeTab: 0, // Aba ativa
      };
    },
    mounted() {
      
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  