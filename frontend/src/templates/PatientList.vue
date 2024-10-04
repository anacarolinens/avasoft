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
          <td class="py-2 px-4 rounded-l-lg">{{ patient.user.fullName }}</td> <!-- Nome completo do paciente -->
          <td class="py-2 px-4">{{ patient.phone || 'Não informado' }}</td> <!-- Telefone -->
          <td class="py-2 px-4">{{ patient.user.email }}</td> <!-- E-mail -->
          <td class="py-2 px-4 text-center rounded-r-lg flex space-x-2">
            <button  class="bg-yellow-500 text-white py-1 px-2 rounded mr-2">Editar</button>
            <button  class="bg-red-500 text-white py-1 px-2 rounded" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-danger-alert" data-hs-overlay="#hs-danger-alert">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>

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

    <!-- Botão para adicionar novo paciente -->
    <div class="flex justify-end w-full max-w-4xl mt-6">
      <router-link to="/add-patient">
        <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          Adicionar Paciente
        </button>
      </router-link>
    </div>
  </div>

  <!-- Table Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Card -->
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <!-- Header -->
          <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
            <div>
              <div class="inline-flex gap-x-2">
                <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  Novo Paciente
                </a>
              </div>
            </div>
          </div>
          <!-- End Header -->

          <!-- Table -->
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>


                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                      Nome
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                      E-mail
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                      Telefone
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                      Avalições
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-end"></th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              <tr>


                <td class="size-px whitespace-nowrap">
                  <div class="px-6 py-3">
                    <span class="text-sm text-gray-600">Streamlab</span>
                  </div>
                </td>
                <td class="size-px whitespace-nowrap">
                  <div class="px-6 py-3">
                    <div class="flex items-center gap-x-2">
                      <div class="grow">
                        <span class="text-sm text-gray-600">Christina Bersh</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="size-px whitespace-nowrap">
                  <div class="px-6 py-3">
                    <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-xs rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                      Copy Key
                      <svg class="shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
                    </button>
                  </div>
                </td>
                <td class="size-px whitespace-nowrap">
                  <div class="px-6 py-3">
                    <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                      <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      Successful
                    </span>
                  </div>
                </td>

                <td class="size-px whitespace-nowrap">
                  <div class="px-6 py-1.5">
                    <div class="hs-dropdown [--placement:bottom-right] relative inline-block">
                      <button id="hs-table-dropdown-1" type="button" class="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                      </button>
                      <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-10 bg-white shadow-2xl rounded-lg p-2 mt-2" role="menu" aria-orientation="vertical" aria-labelledby="hs-table-dropdown-1">
                        <div class="py-2 first:pt-0 last:pb-0">
                          <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Editar
                          </a>
                          <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                            Visualizar
                          </a>
                        </div>
                        <div class="py-2 first:pt-0 last:pb-0">
                          <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                            Excluir
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End Table -->

          <!-- Footer -->
          <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
            <div>
              <p class="text-sm text-gray-600">
                <span class="font-semibold text-gray-800">6</span> results
              </p>
            </div>

            <div>
              <div class="inline-flex gap-x-2">
                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  Prev
                </button>

                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                  Next
                  <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
          <!-- End Footer -->
        </div>
      </div>
    </div>
  </div>
  <!-- End Card -->
</div>
<!-- End Table Section -->
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      patients: [],
      selectedPatientId: null // Armazena o id do paciente a ser excluído
    };
  },
  computed: {
    filteredPatients() {
      return this.patients.filter(patient => {
        const name = patient.name || ''; // Garante que 'name' não seja undefined
        return name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    // Busca os pacientes do backend
    async fetchPatients() {
      try {
        const response = await this.$axios.get('http://localhost:3000/patients');
        this.patients = response.data;
      } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
      }
    },

    // Confirma a exclusão e remove o paciente
    async confirmDeletePatient() {
      if (this.selectedPatientId) {
        try {
          // Exclui o paciente selecionado
          await this.$axios.delete(`http://localhost:3000/patients/${this.selectedPatientId}`);
          this.fetchPatients(); // Atualiza a lista de pacientes
          this.closeDeleteModal(); // Fecha o modal
        } catch (error) {
          console.error('Erro ao excluir paciente:', error);
        }
      }
    },

    // Redireciona para a página de detalhes do paciente
    viewDetails(patientId) {
      this.$router.push(`/patients/${patientId}`);
    },

    // Redireciona para a página de edição do paciente
    editPatient(patientId) {
      this.$router.push(`/edit-patient/${patientId}`);
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