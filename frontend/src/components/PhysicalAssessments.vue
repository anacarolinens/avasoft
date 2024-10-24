<template>
  <ToastComponent v-if="showToast" :message="toastMessage" :type="toastType" />
  <div class="flex flex-col justify-start items-center min-h-screen px-4">
    <!-- Título da página -->
    <h2 class="text-2xl mb-6">Listagem Geral de Avaliações Físicas</h2>

    <!-- Tabela de avaliações -->
    <div class="overflow-x-auto w-full">
      <table class="min-w-full" style="border-collapse: separate; border-spacing: 0 20px;">
        <thead>
          <tr class="bg-orange-500 text-white">
            <th class="py-2 px-4 text-start rounded-l-lg">ID</th>
            <th class="py-2 px-4 text-start">Data</th>
            <th class="py-2 px-4 text-start">Paciente</th>
            <th class="py-2 px-4 text-center rounded-r-lg">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="assessment in sortedAssessments" :key="assessment.id_assessment" class="bg-gray-700 text-white">
            <td class="py-2 px-4 rounded-l-lg">{{ assessment.id_assessment }}</td>
            <td class="py-2 px-4">{{ formatDate(assessment.assessmentDate) }}</td>
            <td class="py-2 px-4">{{ assessment.patient.user.fullName }}</td>
            <td class="py-2 px-4 text-center rounded-r-lg flex justify-center space-x-2">
              <button type="button"
                class="bg-blue-500 text-white py-1 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent"
                aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-large-modal"
                data-hs-overlay="#hs-large-modal" @click="openModal(assessment.id_assessment)">
                Visualizar
              </button>

              <button @click="editAssessment(assessment.id_assessment)" class="bg-yellow-500 text-white py-1 px-2 rounded ">Editar</button>
              <button @click="deleteAssessment(assessment.id_assessment)" class="bg-red-500 text-white py-1 px-2 rounded " aria-haspopup="dialog" aria-expanded="false"
              aria-controls="hs-danger-alert" data-hs-overlay="#hs-danger-alert">Excluir</button>

            </td>
          </tr>
        </tbody>
      </table>
    </div>

     <!-- Modal de confirmação de exclusão -->
     <div id="hs-danger-alert"
      class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto" role="dialog"
      tabindex="-1" aria-labelledby="hs-danger-alert-label">
      <div
        class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
        <div
          class="relative flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-800">
          <div class="absolute top-2 end-2">
            <button type="button"
              class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close" data-hs-overlay="#hs-danger-alert" @click="cancelDelete">
              <span class="sr-only">Close</span>
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div class="p-4 sm:p-10 overflow-y-auto bg-gray-50">
            <div class="flex gap-x-4 md:gap-x-7">
              <span
                class="shrink-0 inline-flex justify-center items-center size-[46px] sm:w-[62px] sm:h-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500">
                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </span>
              <div class="grow">
                <h3 id="hs-danger-alert-label" class="mb-2 text-xl font-bold text-gray-800">Excluir Avaliação</h3>
                <p class="text-gray-500">
                  Tem certeza que deseja excluir esta avaliação? Essa ação não poderá ser desfeita.
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t">
            <button @click="cancelDelete" type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
              aria-label="Close" data-hs-overlay="#hs-danger-alert">
              Cancelar
            </button>
            <button @click="confirmDeleteAssessment" type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Close" data-hs-overlay="#hs-danger-alert">
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de visualização -->
    <div id="hs-large-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto" role="dialog" tabindex="-1" aria-labelledby="hs-large-modal-label">
      <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 h-[calc(100%-3.5rem)] lg:mx-auto">
        <div class="flex flex-col max-h-full overflow-hidden bg-white border shadow-sm rounded-xl pointer-events-auto">
          <div class="flex justify-between items-center py-3 px-4 border-b">
            <h3 id="hs-large-modal-label" class="font-bold text-gray-800" v-if="selectedAssessment">
              Avaliação {{ selectedAssessment.id_assessment }}
            </h3>
            <button type="button"
              class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Close" data-hs-overlay="#hs-large-modal" @click="closeModal">
              <span class="sr-only">Close</span>
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>

          <div class="p-4 overflow-y-auto" v-if="selectedAssessment">
            <div class="grid grid-cols-2 gap-4">
              <p><strong>Data da Avaliação:</strong> {{ formatDate(selectedAssessment.assessmentDate) }}</p>
              <p><strong>Peso:</strong> {{ selectedAssessment.weight }} kg</p>
              <p><strong>Altura:</strong> {{ selectedAssessment.height }} cm</p>
              <p><strong>Método:</strong> {{ selectedAssessment.method }}</p>
            </div>

            <h4 class="my-4 font-bold text-black">Circunferências (cm)</h4>
            <div class="grid grid-cols-2 gap-4">
              <p><strong>Pescoço:</strong> {{ selectedAssessment.circumference.neck }} cm</p>
              <p><strong>Tórax:</strong> {{ selectedAssessment.circumference.thorax }} cm</p>
              <p><strong>Cintura:</strong> {{ selectedAssessment.circumference.waist }} cm</p>
              <p><strong>Abdômen:</strong> {{ selectedAssessment.circumference.abdomen }} cm</p>
              <p><strong>Quadril:</strong> {{ selectedAssessment.circumference.hip }} cm</p>
              <p><strong>Braço Esquerdo:</strong> {{ selectedAssessment.circumference.leftArm }} cm</p>
              <p><strong>Braço Direito:</strong> {{ selectedAssessment.circumference.rightArm }} cm</p>
              <p><strong>Antebraço Esquerdo:</strong> {{ selectedAssessment.circumference.leftForearm }} cm</p>
              <p><strong>Antebraço Direito:</strong> {{ selectedAssessment.circumference.rightForearm }} cm</p>
              <p><strong>Coxa Esquerda:</strong> {{ selectedAssessment.circumference.leftGlutealThigh }} cm</p>
              <p><strong>Coxa Direita:</strong> {{ selectedAssessment.circumference.rightGlutealThigh }} cm</p>
              <p><strong>Perna Esquerda:</strong> {{ selectedAssessment.circumference.leftLeg }} cm</p>
              <p><strong>Perna Direita:</strong> {{ selectedAssessment.circumference.rightLeg }} cm</p>
              <p><strong>Punho Esquerdo:</strong> {{ selectedAssessment.circumference.leftWrist }} cm</p>
              <p><strong>Punho Direito:</strong> {{ selectedAssessment.circumference.rightWrist }} cm</p>
            </div>

            <h4 class="my-4 font-bold text-black">Dobras Cutâneas (mm)</h4>
            <div class="grid grid-cols-2 gap-4">
              <p><strong>Tríceps:</strong> {{ selectedAssessment.skinfold.triceps }} mm</p>
              <p><strong>Abdominal:</strong> {{ selectedAssessment.skinfold.abdominal }} mm</p>
              <p><strong>Subescapular:</strong> {{ selectedAssessment.skinfold.subscapular }} mm</p>
              <p><strong>Supra-ilíaca:</strong> {{ selectedAssessment.skinfold.suprailiac }} mm</p>
              <p><strong>Coxa:</strong> {{ selectedAssessment.skinfold.thigh }} mm</p>
            </div>

            <template v-if="selectedAssessment.method !== 'Dados Livres'">
              <h4 class="mt-4 font-bold">IMC</h4>
              <p v-if="selectedAssessment.bmi"><strong>Valor do IMC:</strong> {{ selectedAssessment.bmi.bmiValue }}</p>
              <p v-if="selectedAssessment.bmi"><strong>Classificação:</strong> {{ selectedAssessment.bmi.classification }}</p>

              <h4 class="mt-4 font-bold">Composição Corporal</h4>
              <p v-if="selectedAssessment.bodyComposition"><strong>Densidade Corporal:</strong> {{ selectedAssessment.bodyComposition.body_density }}</p>
              <p v-if="selectedAssessment.bodyComposition"><strong>Percentual de Gordura Corporal:</strong> {{ selectedAssessment.bodyComposition.body_fat_percentage }}%</p>
            </template>
          </div>

          <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
            <button type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Close" data-hs-overlay="#hs-large-modal" @click="closeModal">
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToastComponent from '../components/ToastNotification.vue';
import axios from 'axios';

export default {
  components: {
    ToastComponent,
  },
  data() {
    return {
      assessmentToDelete: null,
      selectedAssessment: null,
      assessments: [],
      toastMessage: '',
      toastType: 'success',
      showToast: false,
    };
  },
  computed: {
    sortedAssessments() {
      return [...this.assessments].sort((a, b) => new Date(b.assessmentDate) - new Date(a.assessmentDate));
    },
  },
  mounted() {
    this.fetchAssessments();
  },
  methods: {
    async fetchAssessments() {
      try {
        const response = await axios.get('http://localhost:3000/assessments');
        if (response.status === 200) {
          this.assessments = response.data;
        } else {
          console.error('Error fetching assessments:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching assessments:', error);
      }
    },
    async fetchAssessmentById(id) {
      try {
        const response = await axios.get(`http://localhost:3000/assessments/${id}`);
        if (response.status === 200) {
          this.selectedAssessment = response.data;
        } else {
          console.error('Error fetching assessment:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching assessment:', error);
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('pt-BR', options);
    },
    openModal(id) {
      this.fetchAssessmentById(id);
      const modal = document.getElementById('hs-large-modal');
      modal.classList.remove('hidden');
    },
    closeModal() {
      const modal = document.getElementById('hs-large-modal');
      modal.classList.add('hidden');
    },
    editAssessment(id_assessment) {
      this.$router.push(`/assessments/${id_assessment}`);
    },
    deleteAssessment(assessmentId) {
      this.assessmentToDelete = assessmentId;
    },
    async confirmDeleteAssessment() {
      try {
        await axios.delete(`http://localhost:3000/assessments/${this.assessmentToDelete}`);;
        this.assessments = this.assessments.filter(assessment => assessment.id_assessment !== this.assessmentToDelete);
        this.assessmentToDelete = null;
        this.showToastMessage('Avaliação excluída com sucesso', 'success');
        document.getElementById('hs-danger-alert').classList.add('hidden');
      } catch (error) {
        console.error(error);
        this.showToastMessage('Erro ao excluir avaliação', 'error');
      }
    },
    cancelDelete() {
      this.assessmentToDelete = null;
      document.getElementById('hs-danger-alert').classList.add('hidden');
    },
    showToastMessage(message, type) {
      this.toastMessage = message;
      this.toastType = type;
      this.showToast = false;
      this.$nextTick(() => {
        this.showToast = true;
      });
    },
  },
};
</script>

<style scoped>
/* Estilos da tabela */

.disabled {
  pointer-events: none; 
  opacity: 0.5; 
  cursor: not-allowed; 
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 12px;
    text-align: left;
}

button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    opacity: 0.8;
}
</style>