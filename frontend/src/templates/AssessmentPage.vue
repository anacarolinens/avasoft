<template>
  <div class="flex p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-x-6">
    <!-- Formulário -->
    <div class="w-2/3">
      <h1 class="text-2xl font-bold text-center mb-2" style="color: black;">Avaliação Antropométrica</h1>

      <form @submit.prevent="salvarAvaliacao">
        <!-- Seleção de Sexo e Idade -->
        <div class="mb-4 flex space-x-4">
          <div class="w-1/2">
            <label for="sexo" class="block text-sm font-medium text-gray-700">Sexo</label>
            <select v-model="sexo" class="mt-1 p-2 w-full border-gray-300 rounded-md">
              <option value="" disabled selected>Selecione o sexo</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
          <div class="w-1/2">
            <label for="idade" class="block text-sm font-medium text-gray-700">Idade</label>
            <input v-model="idade" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" />
          </div>
        </div>

        <!-- Peso e Altura -->
        <div class="mb-4 flex space-x-4">
          <div class="w-1/2">
            <label for="peso" class="block text-sm font-medium text-gray-700">Peso (kg)</label>
            <input v-model="peso" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" />
          </div>
          <div class="w-1/2">
            <label for="altura" class="block text-sm font-medium text-gray-700">Altura (cm)</label>
            <input v-model="altura" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" />
          </div>
        </div>

        <!-- Seleção do Método de Avaliação -->
        <div class="mb-4">
          <label for="metodo" class="block text-sm font-medium text-gray-700">Método de Avaliação</label>
          <select v-model="metodo" @change="atualizarCamposNecessarios" class="mt-1 p-2 w-full border-gray-300 rounded-md">
            <option value="" disabled selected>Selecione o método</option>
            <option value="Guedes">Guedes</option>
            <option value="Pollock">Pollock</option>
            <option value="Jackson & Pollock">Jackson & Pollock</option>
            <option value="McArdle">McArdle</option>
            <option value="Dados Livres">Dados Livres</option>
          </select>
        </div>

        <!-- Dobras Cutâneas -->
        <legend class="text-lg font-medium text-gray-700">Dobras Cutâneas (mm)</legend>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(value, key) in skinfoldData" :key="key">
            <label :for="key" class="block text-sm font-medium">{{ traduzirDobrasCutaneas(key) }}</label>
            <input v-model="skinfoldData[key]" :disabled="!camposNecessarios.includes(key)" :class="{'disabled-input': !camposNecessarios.includes(key)}" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" />
          </div>
        </div>

        <!-- Circunferências -->
        <legend class="text-lg font-medium text-gray-700">Circunferências (cm)</legend>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(value, key) in circumferenceData" :key="key">
            <label :for="key" class="block text-sm font-medium">{{ traduzirCircunferencia(key) }}</label>
            <input v-model="circumferenceData[key]" :disabled="!camposNecessarios.includes(key)" :class="{'disabled-input': !camposNecessarios.includes(key)}" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" />
          </div>
        </div>

        <!-- Botões -->
        <div class="mt-4 flex space-x-4">
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">Salvar Avaliação</button>
          <button type="button" @click="cancelarAvaliacao" class="px-4 py-2 bg-gray-500 text-white rounded-md">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      sexo: '',
      idade: null,
      peso: null,
      altura: null,
      metodo: '',
      camposNecessarios: [],
      circumferenceData: {
        neck: null,
        thorax: null,
        shoulderBlade: null,
        waist: null,
        abdomen: null,
        hip: null,
        leftWrist: null,
        rightWrist: null,
        leftArm: null,
        rightArm: null,
        leftContractedArm: null,
        rightContractedArm: null,
        leftForearm: null,
        rightForearm: null,
        leftGlutealThigh: null,
        rightGlutealThigh: null,
        leftMedialThigh: null,
        rightMedialThigh: null,
        leftLeg: null,
        rightLeg: null,
        leftAnkle: null,
        rightAnkle: null,
      },
      skinfoldData: {
        triceps: null,
        axillary: null,
        abdominal: null,
        thigh: null,
        calf: null,
        subscapular: null,
        suprailiac: null,
        pectoral: null,
        bicep: null,
      },
    };
  },
  created() {
    // Obter o id_patient da rota
    this.id_patient = this.$route.params.id_patient;
  },
  methods: {
    traduzirCircunferencia(key) {
      const traducoes = {
        neck: 'Pescoço',
        thorax: 'Tórax',
        shoulderBlade: 'Ombro',
        waist: 'Cintura',
        abdomen: 'Abdômen',
        hip: 'Quadril',
        leftWrist: 'Pulso Esquerdo',
        rightWrist: 'Pulso Direito',
        leftArm: 'Braço Esquerdo',
        rightArm: 'Braço Direito',
        leftContractedArm: 'Braço Contraído Esquerdo',
        rightContractedArm: 'Braço Contraído Direito',
        leftForearm: 'Antebraço Esquerdo',
        rightForearm: 'Antebraço Direito',
        leftGlutealThigh: 'Coxa Glútea Esquerda',
        rightGlutealThigh: 'Coxa Glútea Direita',
        leftMedialThigh: 'Coxa Medial Esquerda',
        rightMedialThigh: 'Coxa Medial Direita',
        leftLeg: 'Perna Esquerda',
        rightLeg: 'Perna Direita',
        leftAnkle: 'Tornozelo Esquerdo',
        rightAnkle: 'Tornozelo Direito',
      };
      return traducoes[key] || key;
    },
    traduzirDobrasCutaneas(key) {
      const traducoes = {
        triceps: 'Tríceps',
        axillary: 'Axilar',
        abdominal: 'Abdominal',
        thigh: 'Coxa',
        calf: 'Panturrilha',
        subscapular: 'Subescapular',
        suprailiac: 'Suprailíaca',
        pectoral: 'Peitoral',
        bicep: 'Bíceps',
      };
      return traducoes[key] || key;
    },
    atualizarCamposNecessarios() {
      const metodo = this.metodo;
      if (metodo === 'Guedes') {
        this.camposNecessarios = ['triceps', 'suprailiac', 'abdominal', 'subscapular', 'thigh'];
      } else if (metodo === 'Pollock') {
        this.camposNecessarios = ['triceps', 'suprailiac', 'abdominal', 'thigh', 'pectoral'];
      } else if (metodo === 'Jackson & Pollock') {
        this.camposNecessarios = ['triceps', 'subscapular', 'axillary', 'abdominal', 'thigh', 'suprailiac', 'pectoral'];
      } else if (metodo === 'McArdle') {
        this.camposNecessarios = ['triceps', 'subscapular', 'suprailiac', 'abdominal', 'thigh'];
      } else {
        this.camposNecessarios = Object.keys(this.circumferenceData).concat(Object.keys(this.skinfoldData));
      }
    },
    mapearGenero(genero) {
      const mapaGenero = {
        masculino: 'homem',
        feminino: 'mulher',
      };
      return mapaGenero[genero] || genero;
    },
    async salvarAvaliacao() {
      const assessmentData = {
        id_patient: this.id_patient, // Usar o id_patient dinâmico
        assessmentDate: new Date().toISOString(),
        weight: this.peso,
        height: this.altura,
        method: this.metodo,
        dateRecorded: new Date().toISOString(),
        circumferenceData: this.circumferenceData,
        skinfoldData: this.skinfoldData,
        gender: this.mapearGenero(this.sexo),
        age: this.idade,
      };

      try {
        const response = await axios.post('http://localhost:3000/assessments', assessmentData);
        console.log('Avaliação salva!', response.data);
      } catch (error) {
        console.error('Erro ao salvar avaliação:', error);
      }
    },
    cancelarAvaliacao() {
      this.sexo = '';
      this.idade = null;
      this.peso = null;
      this.altura = null;
      this.metodo = '';
      this.camposNecessarios = [];
      this.circumferenceData = {
        neck: null,
        thorax: null,
        shoulderBlade: null,
        waist: null,
        abdomen: null,
        hip: null,
        leftWrist: null,
        rightWrist: null,
        leftArm: null,
        rightArm: null,
        leftContractedArm: null,
        rightContractedArm: null,
        leftForearm: null,
        rightForearm: null,
        leftGlutealThigh: null,
        rightGlutealThigh: null,
        leftMedialThigh: null,
        rightMedialThigh: null,
        leftLeg: null,
        rightLeg: null,
        leftAnkle: null,
        rightAnkle: null,
      };
      this.skinfoldData = {
        triceps: null,
        axillary: null,
        abdominal: null,
        thigh: null,
        calf: null,
        subscapular: null,
        suprailiac: null,
        pectoral: null,
        bicep: null,
      };
      console.log('Formulário cancelado e resetado!');
    },
  },
};
</script>

<style>
.disabled-input {
  background-color: #f0f0f0;
  cursor: not-allowed;
}
</style>