<template>
  <div class="container">


      <!-- Exibição do nome e sexo do usuário -->
      <div class="user-info">
        <h2>{{ userName }} ({{ userGender }})</h2>
      </div>

      <!-- Botão "Nova Avaliação" -->
      <router-link id="new-assess" to="/AssessmentPage">Nova Avaliação</router-link>

      <!-- Componente de formulário para nova avaliação -->


      <!-- Componente de lista para histórico de avaliações -->
      


  </div>
</template>

<script>


export default {
  
  
  methods: {
    
  },

};
</script>

<style scoped>


</style>
