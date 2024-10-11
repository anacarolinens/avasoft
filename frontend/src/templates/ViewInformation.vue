<template>
  <div class="p-6 min-h-screen">
    <h1 class="text-3xl font-bold text-center mb-6">Informações do Paciente</h1>
    
    <div v-if="patient && user" class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Dados do Usuário</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p><strong>Nome Completo:</strong> {{ user.fullName }}</p>
        <p><strong>CPF:</strong> {{ user.cpf }}</p>
        <p><strong>Data de Nascimento:</strong> {{ user.dataNasc }}</p>
        <p><strong>Gênero:</strong> {{ user.gender }}</p>
        <p><strong>Telefone:</strong> {{ user.phone }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Endereço:</strong> {{ user.street }}, {{ user.number }} - {{ user.complement }}</p>
        <p><strong>Bairro:</strong> {{ user.district }}</p>
        <p><strong>Cidade:</strong> {{ user.city }}</p>
        <p><strong>Estado:</strong> {{ user.state }}</p>
        <p><strong>CEP:</strong> {{ user.cep }}</p>
        <p><strong>Nome de Usuário:</strong> {{ user.userName }}</p>
      </div>

      <h2 class="text-2xl font-semibold text-gray-800 mt-6 mb-4">Dados do Paciente</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p><strong>Peso Inicial:</strong> {{ patient.weigth_ini }} kg</p>
        <p><strong>Altura Inicial:</strong> {{ patient.height_ini }} m</p>
      </div>
    </div>
    
    <div v-else class="text-center text-gray-600 mt-6">
      <p>Carregando informações...</p>
    </div>

    <div class="mt-6 flex justify-between">
      <button 
        @click="goBack" 
        class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
        Voltar
      </button>
      <div>
        <button 
          @click="editUserData" 
          class="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200 mr-2" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal"
          data-hs-overlay="#hs-scale-animation-modal">
          Editar Dados
        </button>
        <button 
          @click="newEvaluation" 
          class="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200">
          Nova Avaliação
        </button>
      </div>
    </div>

    <!-- Modal de edição de paciente -->
    <div id="hs-scale-animation-modal"
      class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
      role="dialog" tabindex="-1" aria-labelledby="hs-scale-animation-modal-label">
      <div
        class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
        <div
          class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3 id="hs-large-modal-label" class="font-bold text-gray-800 dark:text-white">
              Editar Dados do Paciente
            </h3>
            <button type="button"
              class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close" data-hs-overlay="#hs-scale-animation-modal">
              <span class="sr-only">Fechar</span>
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>

          <form id="edit-patient-form" class="p-4 overflow-y-auto">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <!-- Nome Completo -->
              <div>
                <label for="fullName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome
                  Completo</label>
                <input type="text" id="fullName" v-model="patientToEdit.fullName"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
              </div>
              <!-- CPF -->
              <div>
                <label for="cpf" class="block text-sm font-medium text-gray-700 dark:text-gray-300">CPF</label>
                <input type="text" id="cpf" v-model="patientToEdit.cpf"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
              </div>
              <!-- Data de Nascimento -->
              <div>
                <label for="dataNasc" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Data de
                  Nascimento</label>
                <input type="date" id="dataNasc" v-model="patientToEdit.dataNasc"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
              </div>
              <!-- Gênero -->
              <div>
                <label for="gender" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Gênero</label>
                <select id="gender" v-model="patientToEdit.gender"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <!-- Telefone -->
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Telefone</label>
                <input type="text" id="phone" v-model="patientToEdit.phone"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
              </div>
              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" v-model="patientToEdit.email"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
              </div>
              <!-- Endereço -->
              <div>
                <label for="street" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Rua</label>
                <input type="text" id="street" v-model="patientToEdit.street"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
              </div>
              <!-- Número -->
              <div>
                <label for="number" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Número</label>
                <input type="number" id="number" v-model="patientToEdit.number"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
              </div>
              <!-- Complemento -->
              <div>
                <label for="complement"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300">Complemento</label>
                <input type="text" id="complement" v-model="patientToEdit.complement"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              </div>
              <!-- Bairro -->
              <div>
                <label for="district" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Bairro</label>
                <input type="text" id="district" v-model="patientToEdit.district"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
              </div>
              <!-- Cidade -->
              <div>
                <label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Cidade</label>
                <input type="text" id="city" v-model="patientToEdit.city"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
              </div>
              <!-- Estado -->
              <div>
                <label for="state" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Estado</label>
                <input type="text" id="state" v-model="patientToEdit.state"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
              </div>
              <!-- CEP -->
              <div>
                <label for="cep" class="block text-sm font-medium text-gray-700 dark:text-gray-300">CEP</label>
                <input type="text" id="cep" v-model="patientToEdit.cep"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required>
              </div>
              <!-- Peso Inicial -->
              <div>
                <label for="weigth_ini" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Peso
                  Inicial</label>
                <input type="number" id="weigth_ini" v-model="patientToEdit.weigth_ini"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              </div>
              <!-- Altura Inicial -->
              <div>
                <label for="height_ini" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Altura
                  Inicial</label>
                <input type="number" id="height_ini" v-model="patientToEdit.height_ini"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              </div>
            </div>
          </form>

          <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
            <button type="button"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              aria-label="Close" data-hs-overlay="#hs-scale-animation-modal">
              Cancelar
            </button>
            <button @click="updatePatient" type="submit"
              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none focus:ring-offset-white dark:focus:ring-offset-neutral-800">
              Atualizar
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'ViewInformation',
  data() {
    return {
      patient: null,
      user: null,
      showEditModal: false,
      patientToEdit: {
        user_id: '',
        fullName: '',
        cpf: '',
        dataNasc: '',
        phone: '',
        email: '',
        street: '',
        // Outros campos
      },
    };
  },
  methods: {
    async fetchPatientData() {
      try {
        const patientId = this.$route.params.id;
        const response = await axios.get(`http://localhost:3000/patient/${patientId}`);
        this.patient = response.data;
        this.user = response.data.user;
      } catch (error) {
        console.error('Erro ao buscar dados do paciente:', error);
      }
    },
    goBack() {
      this.$router.push('/patientlist');
    },
    newEvaluation() {
      const patientId = this.$route.params.id;
      this.$router.push(`/new-evaluation/${patientId}`);
    },
    // Função para carregar dados no modal de edição
    editUserData() {
      this.patientToEdit = { ...this.user, user_id: this.user.id_user || this.patient.user_id };
      this.showEditModal = true;
    },
    // Função para salvar os dados editados
    async updatePatient() {
      try {
        if (!this.patientToEdit.user_id) {
          throw new Error('ID do usuário não definido');
        }

        await axios.put(`http://localhost:3000/users/${this.patientToEdit.user_id}`, this.patientToEdit);
        
        // Atualizar a exibição com os novos dados
        this.fetchPatientData();
        this.showEditModal = false;
      } catch (error) {
        console.error('Erro ao atualizar o paciente:', error);
      }
    },
  },
  mounted() {
    this.fetchPatientData();
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>