<template>
  <link rel="stylesheet"
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
    <h1 class="rounded-md text-4xl ml-10">AVA<span class="text-white">SOFT</span></h1>
  </header>


  <sidebar id="sidebar" :class="{ 'sidebar-closed': !sidebarVisible }">
    <a><router-link to="/HomePage">Home</router-link></a>
    <a><router-link to="/RegisterUser">Registar Usuario</router-link></a>
    <a><router-link to="/ListUser">Lista de usuarios</router-link></a>
    <a><router-link to="/PhysicalAssessments">Avaliação Fisica</router-link></a>
    <a><router-link to="/">Sair</router-link></a>
  </sidebar>


  <section>
    <!-- corpo da pagina -->
  </section>

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
header .menu {
  padding-left: 30px;
}

.header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

#sidebar {
  position: fixed;
  height: 100vh;
  width: 200px;
  background-color: #1E2021;
  z-index: 0;
  transition: transform 0.3s ease-out;
 /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.494); */
}

#sidebar.sidebar-closed {
  transform: translateX(-76%); /* Adicione esta linha */
}


/* Estilo para os links no sidebar */
sidebar a {
  display: block;
  padding: 10px 0 0 10px;
  text-decoration: none;
  color: #ffffff;
}

sidebar a:hover {
  background-color: #ddd;
}


/* menu amburguer */
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
}

/* movimentação do sidebar */
/*.hidden {
  transform: translateX(-250px);
}

#sidebar {
  transition: transform 0.3s ease;
}*/
</style>