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
          @click="setActiveTab(index)"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Gráfico -->
      <div class="bg-[#3E3E3E] p-4 rounded-lg min-w-full">
        <div class="relative p-16">
          <canvas id="chart"></canvas>
        </div>
        <p class="text-right text-xs mt-2">{{ currentDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../plugins/config';
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      tabs: ['Peso', 'Pregas Cutâneas', 'Circunferências'],
      activeTab: 0,
      assessments: [],
      chart: null,
      currentDate: new Date().toLocaleDateString(),
    };
  },
  computed: {
    name() {
      return localStorage.getItem('name');
    },
  },
  async mounted() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      try {
        const userResponse = await axios.get(`/users/${userId}`);
        const userData = userResponse.data.user;
        const patientId = userData.patient?.id_patient;
        if (patientId) {
          const patientAssessments = await axios.get(`/assessments/patient/${patientId}`);
          const assessments = patientAssessments.data;
          console.log('Avaliações do paciente:', assessments);
          this.assessments = assessments;
          this.setActiveTab(0);
        } else {
          console.warn("Paciente não encontrado para este usuário.");
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário ou avaliações:', error);
      }
    } else {
      console.warn("ID do usuário não encontrado no localStorage.");
    }
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
      this.renderChart();
    },
    renderChart() {
      if (this.chart) {
        this.chart.destroy();
      }

      const ctx = document.getElementById('chart').getContext('2d');
      const labels = this.assessments.map(assessment => new Date(assessment.assessmentDate).toLocaleDateString());

      let data = [];
      let label = '';

      switch (this.activeTab) {
        case 0:
          label = 'Peso (kg)';
          data = this.assessments.map(assessment => assessment.weight);
          break;
        case 1:
          label = 'Pregas Cutâneas (mm)';
          data = this.assessments.map(assessment => assessment.skinfold.triceps); 

          break;
        case 2:
          label = 'Circunferências (cm)';
          data = this.assessments.map(assessment => assessment.circumference.neck); 
  
          break;
      }

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: label,
            data: data,
            backgroundColor: 'rgba(255, 129, 57, 0.6)',
            borderColor: 'rgba(255, 129, 57, 1)',
            borderWidth: 1,
          }],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.chart-container {
  margin-bottom: 20px;
}
</style>