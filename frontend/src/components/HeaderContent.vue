<template>

  <!-- ========== HEADER ========== -->
  <header class="fixed top-0 left-0 w-full flex flex-wrap md:justify-start md:flex-nowrap z-20 bg-orange-500">
    <nav class="relative max-w-[110rem] w-full mx-auto flex items-center justify-start gap-3 py-2 px-4 sm:px-6 lg:px-8">
  
      <!-- Offcanvas Toggle -->
      <button type="button"
        class="relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent text-gray-800 focus:outline-none focus:border-white disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-header-base-offcanvas"
        aria-label="Toggle navigation" data-hs-overlay="#hs-header-base-offcanvas">
        <label class="icon-menu" for="sidebar-toggle">
          <div class="bar bar--1"></div>
          <div class="bar bar--2"></div>
          <div class="bar bar--3"></div>
        </label>
        <span class="sr-only">Toggle navigation</span>
      </button>
      <!-- End Offcanvas Toggle -->
      
      <!-- Brand Name -->
      
        <router-link to="/HomePage"
         >
          <a class="flex-none font-semibold text-4xl ml-3 text-black focus:outline-none focus:opacity-80" href="#"
          aria-label="Brand">AVA<span class="text-white">SOFT</span></a>
        </router-link>
    </nav>
  </header>
  <!-- ========== END HEADER ========== -->

  <!-- Offcanvas -->
  <div id="hs-header-base-offcanvas"
    class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80]"
    role="dialog" tabindex="-1" aria-labelledby="hs-header-base-offcanvas-label">
    <div class="flex justify-between items-center py-3 px-4 bg-orange-500 rounded-tr-lg">
      <h3 id="hs-header-base-offcanvas-label" class="font-bold text-white">
        Menu
      </h3>
      <button type="button"
        class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Close" data-hs-overlay="#hs-header-base-offcanvas">
        <span class="sr-only">Close</span>
        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
    <div class="p-4 bg-gray-900 h-full rounded-br-lg">
      <nav class="space-y-2">
        <router-link to="/HomePage"
          class="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
          active-class="bg-gray-800 text-white" aria-label="Close" data-hs-overlay="#hs-header-base-offcanvas">
          Home
        </router-link>

        <router-link to="/PatientRegister"
          class="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
          active-class="bg-gray-800 text-white" aria-label="Close" data-hs-overlay="#hs-header-base-offcanvas">
          Cadastrar Paciente
        </router-link>

        <router-link to="/PhysicalAssessments"
          class="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
          active-class="bg-gray-800 text-white" aria-label="Close" data-hs-overlay="#hs-header-base-offcanvas">
          Avaliação Física
        </router-link>

        <router-link to="/patientlist"
          class="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
          active-class="bg-gray-800 text-white" aria-label="Close" data-hs-overlay="#hs-header-base-offcanvas">
          Lista de Pacientes
        </router-link>

        <router-link to="/"
          class="flex items-center text-gray-300 hover:text-white hover:bg-red-600 rounded-md px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
          active-class="bg-red-700 text-white" aria-label="Close" data-hs-overlay="#hs-header-base-offcanvas" >
          Sair
        </router-link>
      </nav>
    </div>
  </div>


  <!-- End Offcanvas -->

</template>

<script>

export default {
  data() {
    return {
      sidebarVisible: false // Inicialmente visível, input marcado
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible; // Alterna o valor do iput
    }
  }
};
</script>


<style>
.icon-menu {
  --gap: 5px;
  --height-bar: 2.5px;
  --pos-y-bar-one: 0;
  --pos-y-bar-three: 0;
  --scale-bar: 1;
  --rotate-bar-one: 0;
  --rotate-bar-three: 0;
  width: 25px;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  cursor: pointer;
  position: relative;
}

.bar {
  position: relative;
  height: var(--height-bar);
  width: 100%;
  border-radius: .5rem;
  background-color: #ffffff;
}

</style>