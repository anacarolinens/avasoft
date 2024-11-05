<template>
  <div ref="pdfSelectedAssessments">
    <div id="chartContainer" ref="chartContainer"></div>

    <div v-for="assessment in assessments" :key="assessment.id_assessment"
      :data-assessment-id="assessment.id_assessment" class="min-h-screen p-8 font-sans">
      <div class="card-container max-w-3xl mx-auto bg-white shadow-lg">
        <div class="card-header bg-gradient-to-r from-orange-500 to-orange-200 text-white p-4">
          <h1 class="text-2xl font-bold">Avaliação Antropométrica</h1>
          <p class="text-sm opacity-90">Data da Avaliação: {{ formatDate(assessment.assessmentDate) }}</p>
        </div>
        <div class="card-content p-6">
          <div class="grid grid-cols-1 gap-6 mb-6">
            <div>
              <h2 class="text-lg font-semibold text-gray-700 mb-2">Informações Básicas</h2>
              <div class="grid grid-cols-2 gap-4">
                <p>ID: {{ assessment.id }}</p>
                <p>Peso: {{ assessment.weight }} kg</p>
                <p>Altura: {{ assessment.height }} cm</p>
                <p>Método: {{ assessment.method }}</p>
              </div>
            </div>
          </div>

          <div class="separator my-6 border-t border-gray-300"></div>

          <h4 class="my-4 font-bold text-black">Circunferências (cm)</h4>
          <div class="grid grid-cols-2 gap-4">
            <p>Pescoço: {{ assessment.circumference.neck }} cm</p>
            <p>Tórax: {{ assessment.circumference.thorax }} cm</p>
            <p>Cintura: {{ assessment.circumference.waist }} cm</p>
            <p>Abdômen: {{ assessment.circumference.abdomen }} cm</p>
            <p>Quadril: {{ assessment.circumference.hip }} cm</p>
            <p>Braço Esquerdo: {{ assessment.circumference.leftArm }} cm</p>
            <p>Braço Direito: {{ assessment.circumference.rightArm }} cm</p>
            <p>Antebraço Esquerdo: {{ assessment.circumference.leftForearm }} cm</p>
            <p>Antebraço Direito: {{ assessment.circumference.rightForearm }} cm</p>
            <p>Coxa Esquerda: {{ assessment.circumference.leftGlutealThigh }} cm</p>
            <p>Coxa Direita: {{ assessment.circumference.rightGlutealThigh }} cm</p>
            <p>Perna Esquerda: {{ assessment.circumference.leftLeg }} cm</p>
            <p>Perna Direita: {{ assessment.circumference.rightLeg }} cm</p>
            <p>Punho Esquerdo: {{ assessment.circumference.leftWrist }} cm</p>
            <p>Punho Direito: {{ assessment.circumference.rightWrist }} cm</p>
          </div>

          <h4 class="my-4 font-bold text-black">Dobras Cutâneas (mm)</h4>
          <div class="grid grid-cols-2 gap-4">
            <p>Tríceps: {{ assessment.skinfold.triceps }} mm</p>
            <p>Abdominal: {{ assessment.skinfold.abdominal }} mm</p>
            <p>Subescapular: {{ assessment.skinfold.subscapular }} mm</p>
            <p>Supra-ilíaca: {{ assessment.skinfold.suprailiac }} mm</p>
            <p>Coxa: {{ assessment.skinfold.thigh }} mm</p>
          </div>

          <template v-if="assessment.method !== 'Dados Livres'">
            <h4 class="mt-4 font-bold">IMC</h4>
            <p v-if="assessment.bmi">Valor do IMC: {{ assessment.bmi.bmiValue }}</p>
            <p v-if="assessment.bmi">Classificação: {{ assessment.bmi.classification }}</p>

            <h4 class="mt-4 font-bold">Composição Corporal</h4>
            <p v-if="assessment.bodyComposition">Densidade Corporal: {{ assessment.bodyComposition.body_density }}</p>
            <p v-if="assessment.bodyComposition">Percentual de Gordura Corporal: {{
              assessment.bodyComposition.body_fat_percentage }}%</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApexCharts from 'apexcharts';

export default {
  name: 'PdfSelectedAssessments',
  props: {
    assessments: Array,
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    assessments: {
      handler() {
        this.updateChart();
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.assessments && this.assessments.length > 0) {
        this.createChart();
      }
    });
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date instanceof Date && !isNaN(date) ? date.toLocaleDateString() : 'Data inválida';
    },
    createChart() {
      // Verifique se o contêiner existe antes de criar o gráfico
      if (!this.$refs.chartContainer) return;

      const options = this.getChartOptions();

      // Destruir gráfico anterior, se existir
      if (this.chart) {
        this.chart.destroy();
      }

      // Criar novo gráfico
      this.chart = new ApexCharts(this.$refs.chartContainer, options);
      this.chart.render();
    },
    updateChart() {
      if (this.chart) {
        this.chart.updateOptions(this.getChartOptions());
      } else {
        this.createChart();
      }
    },
    getChartOptions() {
      // Ordenar as avaliações por data
      const sortedAssessments = this.assessments.slice().sort((a, b) => new Date(b.assessmentDate) - new Date(a.assessmentDate));

      const categories = sortedAssessments.map(assessment => this.formatDate(assessment.assessmentDate));
      const weights = sortedAssessments.map(assessment => assessment.weight);
      const heights = sortedAssessments.map(assessment => assessment.height);

      return {
        chart: {
          type: 'bar',
          height: 300,
          toolbar: { show: false },
          zoom: { enabled: false }
        },
        series: [
          {
            name: 'Peso (kg)',
            data: weights
          },
          {
            name: 'Altura (cm)',
            data: heights
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '16px',
            borderRadius: 0
          }
        },
        legend: { show: true },
        dataLabels: { enabled: false },
        stroke: {
          show: true,
          width: 8,
          colors: ['transparent']
        },
        xaxis: {
          categories: categories,
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: {
          labels: {
            formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
          }
        },
        tooltip: {
          y: {
            formatter: (value) => `${value}`
          }
        },
      };
    },
  },
  beforeUnmount() {
    // Destruir o gráfico quando o componente for desmontado
    if (this.chart) {
      this.chart.destroy();
    }
  },
};
</script>

<style scoped>
.card-container {
  max-width: 595px;
  /* largura da página A4 em px a 72 DPI */
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 40%);
  border-radius: 8px;
  overflow: hidden;
  border: 0.5px solid #b3b3b3;
}

.card-header {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-content {
  padding: 24px;
}

.separator {
  margin: 24px 0;
}

.text-gray-600 {
  color: #4a4a4a;
}
</style>