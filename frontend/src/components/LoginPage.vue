<template>
    <div>
      <h1>Login Page</h1>
      <button @click="handleLogin">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
  handleLogin() {
    // Lógica de login aqui

    // Emite o evento loginSuccess para notificar o componente pai (App.vue) sobre o sucesso do login
    this.$emit('loginSuccess');
  }
}
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para esta página, se necessário */
  </style>
  