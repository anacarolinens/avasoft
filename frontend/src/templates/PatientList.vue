<template>
    <div class="container flex flex-col justify-center items-center min-h-screen text-white px-4">
  
      <!-- Logo e título -->
      <div id="hea" class="text-center w-full">
        <div class="flex items-center justify-center">
          <img id="logo" src="../assets/img/logo.svg" alt="logo avasoft"
            class="max-w-[10%] max-h-[10%] opacity-50 mr-4" />
          <div>
            <h1 class="text-8xl">AVA<span>SOFT</span></h1>
            <p class="text-center" style="color:#fff">Avaliação Antropométrica</p>
          </div>
        </div>
      </div>
  
      <!-- Título da página -->
      <h2 class="text-2xl mb-6">Listagem de Pacientes</h2>
  
      <!-- Barra de busca -->
      <div class="w-full max-w-4xl mb-6">
        <input type="text" v-model="searchQuery" placeholder="Buscar pacientes..."
          class="w-full p-3 rounded focus:border-orange-500" />
      </div>
  
      <!-- Tabela de pacientes -->
      <div class="w-full max-w-4xl">
        <table class="w-full bg-gray-800 rounded-lg overflow-hidden">
          <thead>
            <tr class="bg-gray-700">
              <th class="p-4 text-left">Nome</th>
              <th class="p-4 text-left">Telefone</th>
              <th class="p-4 text-left">Email</th>
              <th class="p-4 text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="patient in filteredPatients" :key="patient.id" class="hover:bg-gray-600">
              <td class="p-4">{{ patient.name }}</td>
              <td class="p-4">{{ patient.phone }}</td>
              <td class="p-4">{{ patient.email }}</td>
              <td class="p-4 flex space-x-4">
                <button @click="viewDetails(patient.id)" class="text-blue-500 hover:underline">Detalhes</button>
                <button @click="editPatient(patient.id)" class="text-yellow-500 hover:underline">Editar</button>
                <button @click="deletePatient(patient.id)" class="text-red-500 hover:underline">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Botão para adicionar novo paciente -->
      <div class="flex justify-end w-full max-w-4xl mt-6">
        <router-link to="/add-patient">
          <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
            Adicionar Paciente
          </button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        patients: [] // Você deve buscar essa lista de pacientes do backend
      };
    },
    computed: {
      filteredPatients() {
        return this.patients.filter(patient =>
          patient.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      async fetchPatients() {
        try {
          const response = await this.$axios.get('http://localhost:3000/patients');
          this.patients = response.data;
        } catch (error) {
          console.error('Erro ao buscar pacientes:', error);
        }
      },
      viewDetails(patientId) {
        this.$router.push(`/patients/${patientId}`);
      },
      editPatient(patientId) {
        this.$router.push(`/edit-patient/${patientId}`);
      },
      async deletePatient(patientId) {
        try {
          await this.$axios.delete(`http://localhost:3000/patients/${patientId}`);
          this.fetchPatients(); // Atualiza a lista de pacientes
        } catch (error) {
          console.error('Erro ao excluir paciente:', error);
        }
      }
    },
    mounted() {
      this.fetchPatients();
    }
  };
  </script>
  
  <style scoped>
  /* Adicione os estilos necessários aqui */
  
  button {
    cursor: pointer;
    transition: color 0.2s;
  }
  
  button:hover {
    text-decoration: underline;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th, .table td {
    padding: 0.5rem;
    border-bottom: 1px solid #ddd;
  }
  
  .table th {
    background-color: #f4f4f4;
  }
  </style>
  