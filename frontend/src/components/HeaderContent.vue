<template>

  <!-- ========== HEADER ========== -->
  <header class="fixed top-0 left-0 w-full flex flex-wrap md:justify-start md:flex-nowrap z-50 bg-orange-500">
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

  <!-- <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Kode+Mono:wght@400..700&family=Nanum+Gothic&display=swap">

  <header class="header bg-orange-500 h-24 flex items-center">
    <div class="menu">
      <input hidden="" class="check-icon" type="checkbox" id="sidebar-toggle" :checked="sidebarVisible"
        @change="toggleSidebar">
      <label class="icon-menu" for="sidebar-toggle">
        <div class="bar bar--1"></div>
        <div class="bar bar--2"></div>
        <div class="bar bar--3"></div>
      </label>
    </div>
    <h1 class="rounded-md text-4xl ml-10 text-black">AVA<span class="text-white">SOFT</span></h1>
  </header>

  <sidebar id="sidebar" :class="{ 'sidebar-closed': !sidebarVisible }">
    <div class="sidebar-links-container">
      <a class="sidebar-link">
        <router-link to="/HomePage" class="router-link">
          <div class="link-content"> 
            Home
            <img src="@/assets/img/home-icon.svg" class="w-12" alt="">
          </div>
        </router-link>
        <span class="link-border"></span>
      </a>
      <a class="sidebar-link">
        <router-link to="/ProfessionalRegister" class="router-link">
          Registar Usuario
        </router-link>
        <span class="link-border"></span>
      </a>
      
      <a class="sidebar-link">
        <router-link to="/PhysicalAssessments" class="router-link">
          Avaliação Fisica
        </router-link>
        <span class="link-border"></span>
      </a>

      <a class="sidebar-link">
        <router-link to="/patientlist" class="router-link">
          Lista de pacientes
        </router-link>
        <span class="link-border"></span>
      </a>

      <a class="sidebar-link">
        <router-link to="/" class="router-link">
          Sair
        </router-link>
        <span class="link-border"></span>
      </a>
    </div>
  </sidebar>
   -->

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


/*header .menu {
  padding-left: 30px;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background-color: #ff8000;
  z-index: 2;
}

#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 20%;
  max-width: 200px; 
  background-color: #1E2021;
  z-index: 1;
  transition: transform 0.3s ease-out;
  box-shadow: -15px 0px 20px 20px rgb(0 0 0 / 49%);
}

.sidebar-links-container {
  margin-top: 10vh;
}

#sidebar.sidebar-closed {
  transform: translateX(-76%);
}


sidebar a {
  display: flex;
  justify-content: space-between;
  padding: 10px 0 0 10px;
  text-decoration: none;
  color: #ffffff;
}

.sidebar-link {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.router-link {
  color: #fff; 
  text-decoration: none;
  padding: 10px 0;
  width: 100%;
  transition: background-color 0.3s; 
  display: inline-block; 
}


.link-content {
  display: flex; 
  justify-content: space-between;
  align-items: center;
}

.link-border {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px; 
  background-color: #ff8000; 
  width: 0%; 
  transition: width 0.3s; 
}

.router-link:hover + .link-border,
.router-link:focus + .link-border {
  width: 100%; 
}


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

.bar--1 {
  top: var(--pos-y-bar-one);
  transform: rotate(var(--rotate-bar-one));
  transition: top 200ms 100ms, transform 100ms;
}

.bar--2 {
  transform: scaleX(var(--scale-bar));
  transition: transform 150ms 100ms;
}

.bar--3 {
  bottom: var(--pos-y-bar-three);
  transform: rotate(var(--rotate-bar-three));
  transition: bottom 200ms 100ms, transform 100ms;
}

.check-icon:checked+.icon-menu>.bar--1 {
  transition: top 200ms, transform 200ms 100ms;
}

.check-icon:checked+.icon-menu>.bar--3 {
  transition: bottom 200ms, transform 200ms 100ms;
}

.check-icon:checked+.icon-menu {
  --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
  --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
  --scale-bar: 0;
  --rotate-bar-one: 45deg;
  --rotate-bar-three: -45deg;
} */
</style>