<template>
  <div class="min-h-screen p-8 font-sans">
    <div v-if="selectedAssessment" class="card-container max-w-3xl mx-auto bg-white shadow-lg">
      <div class="card-header bg-gradient-to-r from-orange-500 to-orange-200 text-white p-4">
        <h1 class="text-2xl font-bold">Avaliação Antropométrica</h1>
        <p class="text-sm opacity-90">Data da Avaliação: {{ formatDate(selectedAssessment.assessmentDate) }}</p>
      </div>
      <div class="card-content p-6">
        <div class="grid grid-cols-1 gap-6 mb-6">
          <div>
            <h2 class="text-lg font-semibold text-gray-700 mb-2">Informações Básicas</h2>
            <div class="grid grid-cols-2 gap-4">
              <p>ID: {{ selectedAssessment.id }}</p>
              <p>Peso: {{ selectedAssessment.weight }} kg</p>
              <p>Altura: {{ selectedAssessment.height }} cm</p>
              <p>Método: {{ selectedAssessment.method }}</p>
            </div>
          </div>
        </div>

        <div class="separator my-6 border-t border-gray-300"></div>

        <h4 class="my-4 font-bold text-black">Circunferências (cm)</h4>
        <div class="grid grid-cols-2 gap-4">
          <p>Pescoço: {{ selectedAssessment.circumference.neck }} cm</p>
          <p>Tórax: {{ selectedAssessment.circumference.thorax }} cm</p>
          <p>Cintura: {{ selectedAssessment.circumference.waist }} cm</p>
          <p>Abdômen: {{ selectedAssessment.circumference.abdomen }} cm</p>
          <p>Quadril: {{ selectedAssessment.circumference.hip }} cm</p>
          <p>Braço Esquerdo: {{ selectedAssessment.circumference.leftArm }} cm</p>
          <p>Braço Direito: {{ selectedAssessment.circumference.rightArm }} cm</p>
          <p>Antebraço Esquerdo: {{ selectedAssessment.circumference.leftForearm }} cm</p>
          <p>Antebraço Direito: {{ selectedAssessment.circumference.rightForearm }} cm</p>
          <p>Coxa Esquerda: {{ selectedAssessment.circumference.leftGlutealThigh }} cm</p>
          <p>Coxa Direita: {{ selectedAssessment.circumference.rightGlutealThigh }} cm</p>
          <p>Perna Esquerda: {{ selectedAssessment.circumference.leftLeg }} cm</p>
          <p>Perna Direita: {{ selectedAssessment.circumference.rightLeg }} cm</p>
          <p>Punho Esquerdo: {{ selectedAssessment.circumference.leftWrist }} cm</p>
          <p>Punho Direito: {{ selectedAssessment.circumference.rightWrist }} cm</p>
        </div>

        <h4 class="my-4 font-bold text-black">Dobras Cutâneas (mm)</h4>
        <div class="grid grid-cols-2 gap-4">
          <p>Tríceps: {{ selectedAssessment.skinfold.triceps }} mm</p>
          <p>Abdominal: {{ selectedAssessment.skinfold.abdominal }} mm</p>
          <p>Subescapular: {{ selectedAssessment.skinfold.subscapular }} mm</p>
          <p>Supra-ilíaca: {{ selectedAssessment.skinfold.suprailiac }} mm</p>
          <p>Coxa: {{ selectedAssessment.skinfold.thigh }} mm</p>
        </div>

        <template v-if="selectedAssessment.method !== 'Dados Livres'">
          <h4 class="mt-4 font-bold">IMC</h4>
          <p v-if="selectedAssessment.bmi">Valor do IMC: {{ selectedAssessment.bmi.bmiValue }}</p>
          <p v-if="selectedAssessment.bmi">Classificação: {{ selectedAssessment.bmi.classification }}</p>

          <h4 class="mt-4 font-bold">Composição Corporal</h4>
          <p v-if="selectedAssessment.bodyComposition">Densidade Corporal: {{ selectedAssessment.bodyComposition.body_density }}</p>
          <p v-if="selectedAssessment.bodyComposition">Percentual de Gordura Corporal: {{ selectedAssessment.bodyComposition.body_fat_percentage }}%</p>
        </template>
      </div>
    </div>
    <p v-else class="text-center text-gray-500">Nenhuma avaliação selecionada.</p>
  </div>
</template>

<script>
export default {
  name: 'PdfAssessment',
  props: {
    selectedAssessment: {
      type: Object,
      default: null,
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date instanceof Date && !isNaN(date) ? date.toLocaleDateString() : 'Data inválida';
    },
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
