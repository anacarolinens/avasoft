<!-- HomePage.vue -->
<template>
    <div>
      <h1>Home Page</h1>
      <button @click="handleLogout">Sair</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleLogout() {
        // Lógica de logout aqui
  
        // Emitir evento para notificar componente pai (App.vue) sobre o logout
        this.$emit('logout');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para esta página, se necessário */
  </style>
  