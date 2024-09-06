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
    <h1 class="rounded-md text-4xl ml-10 text-black">AVA<span class="text-white">SOFT</span></h1>
  </header>

  <sidebar id="sidebar" :class="{ 'sidebar-closed': !sidebarVisible }">
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
      <router-link to="/ListUser" class="router-link">
        Lista de usuarios
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
      <router-link to="/" class="router-link">
        Sair
      </router-link>
      <span class="link-border"></span>
    </a>
  </sidebar>

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
  box-shadow: -15px 0px 20px 20px rgb(0 0 0 / 49%);
}

#sidebar.sidebar-closed {
  transform: translateX(-76%);
}

/* Estilo para os links no sidebar */
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

/* Novo estilo para o contêiner */
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
</style>