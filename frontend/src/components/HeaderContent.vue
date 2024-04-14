<template>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Kode+Mono:wght@400..700&family=Nanum+Gothic&display=swap">

  <header class="bg-orange-500 h-24 flex items-center">
    <div class="menu">
      <input hidden="" class="check-icon" type="checkbox" id="sidebar-toggle" :checked="sidebarVisible" @change="toggleSidebar">
      <label class="icon-menu" for="sidebar-toggle">
        <div class="bar bar--1"></div>
        <div class="bar bar--2"></div>
        <div class="bar bar--3"></div>
      </label>
    </div>
    <h1 class="rounded-md text-4xl">AVA<span class="text-black">SOFT</span></h1>
  </header>


  <sidebar id="sidebar" :class="{ 'hidden': !sidebarVisible }">
    <router-link to="/HomePage">Home</router-link>
    <router-link to="/RegisterUser">Registar Usuario</router-link>
    <router-link to="/ListUser">Lista de usuarios</router-link>
    <router-link to="/PhysicalAssessments">Avaliação Fisica</router-link>
    <router-link to="/">Sair</router-link>
  </sidebar>


  <!-- <div class="sidebar :class="{ 'hidden': !sidebarVisible }"">

    <router-link to="/HomePage">Home</router-link>

    <router-link to="/RegisterUser">Registar Usuario</router-link>

    <router-link to="/ListUser">Lista de usuarios</router-link>

    <router-link to="/PhysicalAssessments">Avaliação Fisica</router-link>

    <router-link to="/">Sair</router-link>
  </div> -->



</template>

<script>

export default {
  data() {
    return {
      sidebarVisible: true // Inicialmente visível, input marcado
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
header h1 {
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 900;
  padding-left: 30px;
}

header .menu {
  padding-left: 30px;
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
.hidden {
  transform: translateX(-250px); /* Esconde o sidebar */
}

#sidebar {
  transition: transform 0.3s ease;
}

</style>