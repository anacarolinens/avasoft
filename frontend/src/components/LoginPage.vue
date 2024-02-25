<template>


    <div>
      <h1>Login Page</h1>
    
      <form action="">

      <label for="name"></label>
      <input type="text" id="name" placeholder="usuario" v-model="name">

      <label for="pass"></label>
      <input type="password" id="pass" placeholder="pass">

      <button @click="handleLogin">Login</button>

      </form>

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