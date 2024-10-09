<template>
  <div class="flex p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-x-6">
    <!-- Formulário -->
    <div class="w-2/3">
      <h1 class="text-2xl font-bold text-center mb-2" style="color: black;">Avaliação Antropométrica</h1>

      <form @submit.prevent>
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

        <!-- Altura e Peso com borda -->
        <fieldset class="mb-4 p-4 border border-gray-300 rounded-md">
          <legend class="text-lg font-medium text-gray-700">Cálculo IMC</legend>
          <label for="altura" class="block text-sm font-medium text-gray-700">Altura (m)</label>
          <input v-model="altura" type="number" step="0.01" class="mt-1 p-2 w-full border-gray-300 rounded-md"
            placeholder="Ex: 1.75" />

          <label for="peso" class="block mt-4 text-sm font-medium text-gray-700">Peso (kg)</label>
          <input v-model="peso" type="number" step="0.1" class="mt-1 p-2 w-full border-gray-300 rounded-md"
            placeholder="Ex: 70" />
          <!-- Resultado IMC -->
          <div v-if="imc !== null" :class="imcClass" class="p-4 rounded-md mt-2">
            <p><strong>IMC:</strong> {{ imc }} - {{ imcStatus }}</p>
          </div>
        </fieldset>


        <!-- Dobras Cutâneas com borda -->
        <fieldset class="mb-4 p-4 border border-gray-300 rounded-md">
          <legend class="text-lg font-medium text-gray-700">Cálculo Percentual de Gordura</legend>
          <label class="block text-sm font-medium text-gray-700">Dobras Cutâneas (mm)</label>
          <div class="grid grid-cols-3 gap-4">
            <div>
              <label for="peitoral" class="block text-sm font-medium">Peitoral</label>
              <input v-model="peitoral" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" />
            </div>
            <div>
              <label for="abdomen" class="block text-sm font-medium">Abdômen</label>
              <input v-model="abdomen" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" />
            </div>
            <div>
              <label for="coxa" class="block text-sm font-medium">Coxa</label>
              <input v-model="coxa" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" />
            </div>
            <div>
              <label for="triceps" class="block text-sm font-medium">Tríceps</label>
              <input v-model="triceps" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" />
            </div>
            <div>
              <label for="suprailiaca" class="block text-sm font-medium">Supra-ilíaca</label>
              <input v-model="suprailiaca" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" />
            </div>
          </div>
          <!-- Resultado Percentual de Gordura -->
          <div v-if="percentualGordura !== null" :class="gorduraClass" class="p-4 mt-4 rounded-md mt-2">
            <p><strong>Percentual de Gordura:</strong> {{ percentualGordura }}% - {{ gorduraStatus }}</p>
          </div>
        </fieldset>

        <!-- Circunferências com borda -->
        <fieldset class="mb-4 p-4 border border-gray-300 rounded-md">
          <legend class="text-lg font-medium text-gray-700">Cálculo RCQ</legend>
          <label for="cc" class="block text-sm font-medium text-gray-700">Circunferência da Cintura (cm)</label>
          <input v-model="cc" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Ex: 85" />

          <label for="cq" class="block mt-4 text-sm font-medium text-gray-700">Circunferência do Quadril (cm)</label>
          <input v-model="cq" type="number" class="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Ex: 95" />
          <!-- Resultado RCQ -->
          <div v-if="rcq !== null" :class="rcqClass" class="p-4 mt-4 rounded-md mt-2">
            <p><strong>Relação Cintura-Quadril (RCQ):</strong> {{ rcq }} - {{ rcqStatus }}</p>
          </div>
        </fieldset>
        <!-- Botões Salvar e Cancelar -->
        <div class="flex justify-end space-x-4 mt-6">
          <button @click="cancelarAvaliacao" type="button"
            class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Cancelar
          </button>
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Salvar
          </button>
        </div>

      </form>
    </div>

    <!-- Card informativo -->
    <div class="w-1/3 p-4 bg-gray-100 rounded-md">
      <h2 class="text-lg font-bold" style="color: black;">Legenda</h2>
      <ul class="mt-4">
        <li class="mb-2"><span class="inline-block w-4 h-4 bg-green-200 mr-2"></span> Saudável / Normal</li>
        <li class="mb-2"><span class="inline-block w-4 h-4 bg-yellow-200 mr-2"></span> Moderado</li>
        <li class="mb-2"><span class="inline-block w-4 h-4 bg-red-200 mr-2"></span> Alto / Obesidade</li>
        <li class="mb-2"><span class="inline-block w-4 h-4 bg-red-500 mr-2"></span> Alto risco</li>
      </ul>

      <h3 class="text-lg font-bold mt-6" style="color: black;">Classificações</h3>
      <p><strong>IMC:</strong> Baixo peso, Normal, Sobrepeso, Obesidade grau I, Obesidade grau II</p>
      <p><strong>Percentual de Gordura:</strong> Baixo, Normal, Alto</p>
      <p><strong>RCQ:</strong> Normal, Moderado, Alto risco</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      altura: null,
      peso: null,
      cc: null,
      cq: null,
      peitoral: null,
      abdomen: null,
      coxa: null,
      triceps: null,
      suprailiaca: null,
      idade: null,
      sexo: '',
      imc: null,
      imcStatus: '',
      dc: null,
      percentualGordura: null,
      gorduraStatus: '',
      rcq: null,
      rcqStatus: '',
    };
  },
  watch: {
    altura: 'calcularIMC',
    peso: 'calcularIMC',
    peitoral: 'calcularDC',
    abdomen: 'calcularDC',
    coxa: 'calcularDC',
    triceps: 'calcularDC',
    suprailiaca: 'calcularDC',
    cc: 'calcularRCQ',
    cq: 'calcularRCQ',
    idade: 'calcularDC',
    sexo: 'calcularDC'
  },
  computed: {
    // Escala de cores para o IMC
    imcClass() {
      if (this.imc < 18.5) return 'bg-yellow-200 text-yellow-700'; // Baixo peso
      if (this.imc >= 18.5 && this.imc <= 24.9) return 'bg-green-200 text-green-700'; // Normal
      if (this.imc >= 25 && this.imc <= 29.9) return 'bg-yellow-200 text-yellow-700'; // Sobrepeso
      if (this.imc >= 30 && this.imc <= 34.9) return 'bg-red-200 text-red-700'; // Obesidade Grau I (vermelho claro)
      if (this.imc >= 35) return 'bg-red-500 text-white'; // Obesidade Grau II (vermelho escuro)
      return '';
    },
    // Escala de cores para o Percentual de Gordura
    gorduraClass() {
      if (this.percentualGordura < 15) return 'bg-yellow-200 text-yellow-700'; // Baixo
      if (this.percentualGordura >= 15 && this.percentualGordura <= 20) return 'bg-green-200 text-green-700'; // Normal
      if (this.percentualGordura > 20) return 'bg-red-200 text-red-700'; // Alto
      return '';
    },
    // Escala de cores para a Relação Cintura-Quadril (RCQ)
    rcqClass() {
      if (this.rcq < 0.85) return 'bg-green-200 text-green-700'; // Normal
      if (this.rcq >= 0.85 && this.rcq < 0.9) return 'bg-yellow-200 text-yellow-700'; // Moderado
      if (this.rcq >= 0.9) return 'bg-red-200 text-red-700'; // Alto risco
      return '';
    },
  },
  methods: {
    calcularIMC() {
      const alturaMetros = this.altura;
      const pesoKg = this.peso;
      if (alturaMetros && pesoKg) {
        this.imc = (pesoKg / (alturaMetros * alturaMetros)).toFixed(2);
        this.imcStatus = this.obterClassificacaoIMC();
      }
    },
    calcularDC() {
      if (this.peitoral && this.abdomen && this.coxa && this.triceps && this.suprailiaca && this.sexo) {
        const somaDC = parseFloat(this.peitoral) + parseFloat(this.abdomen) + parseFloat(this.coxa) + parseFloat(this.triceps) + parseFloat(this.suprailiaca);
        if (this.sexo === 'masculino') {
          this.percentualGordura = (495 / (1.10938 - 0.0008267 * somaDC + 0.0000016 * somaDC ** 2 - 0.0002574 * this.idade) - 450).toFixed(2);
        } else {
          this.percentualGordura = (495 / (1.0994921 - 0.0009929 * somaDC + 0.0000023 * somaDC ** 2 - 0.0001392 * this.idade) - 450).toFixed(2);
        }
        this.gorduraStatus = this.obterClassificacaoGordura();
      }
    },
    calcularRCQ() {
      const cc = this.cc;
      const cq = this.cq;
      if (cc && cq) {
        this.rcq = (cc / cq).toFixed(2);
        this.rcqStatus = this.obterClassificacaoRCQ();
      }
    },
    obterClassificacaoIMC() {
      if (this.imc < 18.5) return 'Baixo peso';
      if (this.imc < 24.9) return 'Normal';
      if (this.imc < 29.9) return 'Sobrepeso';
      if (this.imc < 34.9) return 'Obesidade grau I';
      if (this.imc < 39.9) return 'Obesidade grau II';
      return 'Obesidade grau III';
    },
    obterClassificacaoGordura() {
      const percentual = this.percentualGordura;
      if (this.sexo === 'masculino') {
        if (percentual < 6) return 'Baixo';
        if (percentual < 24) return 'Normal';
        return 'Alto';
      } else {
        if (percentual < 16) return 'Baixo';
        if (percentual < 30) return 'Normal';
        return 'Alto';
      }
    },
    obterClassificacaoRCQ() {
      const rcq = this.rcq;
      if (this.sexo === 'masculino') {
        if (rcq < 0.90) return 'Normal';
        if (rcq < 0.95) return 'Moderado';
        return 'Alto risco';
      } else {
        if (rcq < 0.80) return 'Normal';
        if (rcq < 0.85) return 'Moderado';
        return 'Alto risco';
      }
    },
    salvarAvaliacao() {
      // lógica para salvar os dados da avaliação
      console.log("Avaliação salva!");
    },
    cancelarAvaliacao() {
      // lógica para cancelar e resetar o formulário
      this.altura = null;
      this.peso = null;
      this.cc = null;
      this.cq = null;
      this.peitoral = null;
      this.abdomen = null;
      this.coxa = null;
      this.triceps = null;
      this.suprailiaca = null;
      this.idade = null;
      this.sexo = '';
      this.imc = null;
      this.imcStatus = '';
      this.percentualGordura = null;
      this.gorduraStatus = '';
      this.rcq = null;
      this.rcqStatus = '';
      console.log("Formulário cancelado e resetado!");
    },
  }
};
</script>

<style>
/* Você pode adicionar classes de estilo personalizadas aqui, se necessário */
</style>
