<template>
  <div ref="pdfSelectedAssessments">
    <div id="hs-single-bar-chart"></div>
    <div v-for="assessment in assessments" :key="assessment.id_assessment" :data-assessment-id="assessment.id_assessment" class="min-h-screen p-8 font-sans">
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
            <p v-if="assessment.bodyComposition">Percentual de Gordura Corporal: {{ assessment.bodyComposition.body_fat_percentage }}%</p>
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
  mounted() {
    this.renderChart();
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date instanceof Date && !isNaN(date) ? date.toLocaleDateString() : 'Data inválida';
    },
    renderChart() {
      const options = {
        chart: {
          type: 'bar',
          height: 300,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        series: [
          {
            name: 'Sales',
            data: [23000, 44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000, 34000, 78000]
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '16px',
            borderRadius: 0
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 8,
          colors: ['transparent']
        },
        xaxis: {
          categories: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            show: false
          },
          labels: {
            style: {
              colors: '#9ca3af',
              fontSize: '13px',
              fontFamily: 'Inter, ui-sans-serif',
              fontWeight: 400
            },
            offsetX: -2,
            formatter: (title) => title.slice(0, 3)
          }
        },
        yaxis: {
          labels: {
            align: 'left',
            minWidth: 0,
            maxWidth: 140,
            style: {
              colors: '#9ca3af',
              fontSize: '13px',
              fontFamily: 'Inter, ui-sans-serif',
              fontWeight: 400
            },
            formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
          }
        },
        states: {
          hover: {
            filter: {
              type: 'darken',
              value: 0.9
            }
          }
        },
        tooltip: {
          y: {
            formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`
          }
        },
        responsive: [{
          breakpoint: 568,
          options: {
            chart: {
              height: 300
            },
            plotOptions: {
              bar: {
                columnWidth: '14px'
              }
            },
            stroke: {
              width: 8
            },
            labels: {
              style: {
                colors: '#9ca3af',
                fontSize: '11px',
                fontFamily: 'Inter, ui-sans-serif',
                fontWeight: 400
              },
              offsetX: -2,
              formatter: (title) => title.slice(0, 3)
            },
            yaxis: {
              labels: {
                align: 'left',
                minWidth: 0,
                maxWidth: 140,
                style: {
                  colors: '#9ca3af',
                  fontSize: '11px',
                  fontFamily: 'Inter, ui-sans-serif',
                  fontWeight: 400
                },
                formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
              }
            },
          },
        }]
      };

      const chart = new ApexCharts(document.querySelector("#hs-single-bar-chart"), options);
      chart.render();
    }
  },
};
</script>

<style scoped>
.card-container {
  max-width: 595px; /* largura da página A4 em px a 72 DPI */
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