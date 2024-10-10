<template>
  <div class=" flex flex-col justify-start items-center min-h-screen px-4">

    <!-- Título da página -->
    <h2 class="text-2xl mb-6">Listagem de Pacientes</h2>

    <!-- Barra de busca -->
    <div class="w-full max-w-4xl mb-6 text-black">
      <input type="text" v-model="searchQuery" placeholder="Buscar pacientes..."
        class="w-full p-3 rounded focus:border-orange-500" />
    </div>
    
  <!-- Tabela de pacientes -->
  <div class="overflow-x-auto w-full">
    <table class="min-w-full" style="border-collapse: separate; border-spacing: 0 20px;">
      <thead>
        <tr class="bg-orange-500 text-white">
          <th class="py-2 px-4 text-start rounded-l-lg">Nome</th>
          <th class="py-2 px-4 text-start">Telefone</th>
          <th class="py-2 px-4 text-start">Email</th>
          <th class="py-2 px-4 text-center rounded-r-lg">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in filteredPatients" :key="patient.id_patient" class="bg-gray-700 text-white">
          <td class="py-2 px-4 rounded-l-lg">{{ patient.user.fullName }}</td>
          <td class="py-2 px-4">{{ patient.user.phone || 'Não informado' }}</td>
          <td class="py-2 px-4">{{ patient.user.email }}</td>
          <td class="py-2 px-4 text-center rounded-r-lg flex justify-center space-x-2">
            <button class="bg-yellow-500 text-white py-1 px-2 rounded" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal" data-hs-overlay="#hs-scale-animation-modal">Editar</button>
            <button @click="deletePatient(patient.id_patient)" class="bg-red-500 text-white py-1 px-2 rounded" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-danger-alert" data-hs-overlay="#hs-danger-alert">Excluir</button>
            <button @click="viewDetails(patient.id_patient)" class="bg-blue-500 text-white py-1 px-2 rounded">Visualizar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Botão para adicionar novo paciente -->
    <div class="flex justify-end w-full max-w-4xl mt-6">
      <router-link to="/PatientRegister">
        <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          Adicionar Paciente
        </button>
      </router-link>
    </div>

    <!-- Modal de confirmação de exclusão -->
    <div id="hs-danger-alert" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto" role="dialog" tabindex="-1" aria-labelledby="hs-danger-alert-label">
      <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
        <div class="relative flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-800">
          <div class="absolute top-2 end-2">
            <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-danger-alert">
              <span class="sr-only">Close</span>
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
    
          <div class="p-4 sm:p-10 overflow-y-auto bg-gray-50">
            <div class="flex gap-x-4 md:gap-x-7">
              <span class="shrink-0 inline-flex justify-center items-center size-[46px] sm:w-[62px] sm:h-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500">
                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
              </span>
              <div class="grow">
                <h3 id="hs-danger-alert-label" class="mb-2 text-xl font-bold text-gray-800">Excluir Paciente</h3>
                <p class="text-gray-500">
                  Tem certeza que deseja excluir este paciente? Essa ação não poderá ser desfeita.
                </p>
              </div>
            </div>
          </div>
    
          <div class="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t">
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50" data-hs-overlay="#hs-danger-alert">
              Cancelar
            </button>
            <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Excluir
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal de edição de paciente -->  
  <div id="hs-scale-animation-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-scale-animation-modal-label">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
      <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
          <h3 id="hs-large-modal-label" class="font-bold text-gray-800 dark:text-white">
            Editar Dados do Paciente
          </h3>
          <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-large-modal">
            <span class="sr-only">Close</span>
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
  
        <form id="edit-patient-form" class="p-4 overflow-y-auto">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label for="fullName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome Completo</label>
              <input type="text" id="fullName" name="fullName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value="" required>
            </div>
            <div>
              <label for="cpf" class="block text-sm font-medium text-gray-700 dark:text-gray-300">CPF</label>
              <input type="text" id="cpf" name="cpf" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value="" required>
            </div>
            <div>
              <label for="dataNasc" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Data de Nascimento</label>
              <input type="date" id="dataNasc" name="dataNasc" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value="" required>
            </div>
            <div>
              <label for="gender" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Gênero</label>
              <select id="gender" name="gender" class="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="O">Outro</option>
              </select>
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Telefone</label>
              <input type="text" id="phone" name="phone" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value="" required>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value="" required>
            </div>
            <div>
              <label for="street" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Endereço</label>
              <input type="text" id="street" name="street" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value="" required>
            </div>
            <div>
              <label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Cidade</label>
              <input type="text" id="city" name="city" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value="" required>
            </div>
          </div>
        </form>
  
        <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
          <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-scale-animation-modal">
            Cancelar
          </button>
          <button type="submit" form="edit-patient-form" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            Salvar
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
  data() {
    return {
      searchQuery: '',
      patients: [],
    };
  },
  computed: {
    filteredPatients() {
      return this.patients.filter(patient => {
        const name = patient.user.fullName || ''; // Garante que 'name' não seja undefined
        return name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    async fetchPatients() {
      try {
        const response = await axios.get('http://localhost:3000/patients');
        this.patients = response.data;
      } catch (error) {
        console.error(error);
        // Exibir mensagem de erro
      }
    },
    viewDetails(patientId) {
      this.$router.push(`/ViewInformation/${patientId}`);
    },
    async deletePatient(patientId) {
      try {
        await axios.delete(`http://localhost:3000/patient/${patientId}`);
        this.patients = this.patients.filter(patient => patient.id_patient !== patientId);
      } catch (error) {
        console.error(error);
        // Exibir mensagem de erro
      }
    }
  },
  mounted() {
    this.fetchPatients(); // Busca os pacientes ao montar o componente
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

.table th,
.table td {
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #f4f4f4;
}
</style>