<!-- HomePage.vue -->

<template>
 
  <div class="container">
    
    <header>
      <h1>Bem-vindo, <span>Usuário</span>!</h1>
    </header>

    <div class="content">

      <div class="sidebar">

        <router-link to="/RegisterUser">Registar Usuario</router-link>

        <router-link to="/ListUser">Lista de usuarios</router-link>

        <router-link to="/PhysicalAssessments">Avaliação Fisica</router-link>

        <router-link to="/">Sair</router-link>
      </div>
    </div>


  </div>
</template>

<script>

export default {

  methods: {
 
  },
};
</script>

<style scoped>
div {
  box-sizing: border-box;
}

header {
  background-color: #ff8818;
  width: 100%;
}

button {
  background-color: #ff8818;
  color: #ffffff;
  border: none;
  padding: 1em;
  cursor: pointer;
  margin-top: auto;
  /* Faz o botão ficar no final da sidebar */
}
</style>
