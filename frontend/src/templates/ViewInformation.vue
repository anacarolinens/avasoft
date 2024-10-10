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
          class="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200 mr-2">
          Editar Dados
        </button>
        <button 
          @click="newEvaluation" 
          class="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200">
          Nova Avaliação
        </button>
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
    editPatient() {
      const patientId = this.$route.params.id;
      this.$router.push(`/edit-patient/${patientId}`);
    },
    newEvaluation() {
      const patientId = this.$route.params.id;
      this.$router.push(`/new-evaluation/${patientId}`);
    }
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