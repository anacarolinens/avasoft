<template>
  <div class="container">
    <header>
      <h1>Registro de avaliações</h1>
    </header>

    <div class="content">
      <div class="sidebar">
        <router-link to="/HomePage">Home</router-link>

        <router-link to="/RegisterUser">Registar Usuario</router-link>

        <router-link to="/ListUser">Lista de usuarios</router-link>

        <router-link to="/PhysicalAssessments">Avaliação Fisica</router-link>

        <router-link to="/">Sair</router-link>
      </div>

      <!-- Exibição do nome e sexo do usuário -->
      <div class="user-info">
        <h2>{{ userName }} ({{ userGender }})</h2>
      </div>

      <!-- Botão "Nova Avaliação" -->
      <router-link id="new-assess" to="/AssessmentPage">Nova Avaliação</router-link>

      <!-- Componente de formulário para nova avaliação -->


      <!-- Componente de lista para histórico de avaliações -->
      

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
  background-color: #18e4ff;
  width: 100%;
}

#new-assess {
  background-color: #28c8d7;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  height: 50px;
  width: 90px;
}

#new-assess:hover {
  background-color: #4562a0;
}

</style>
