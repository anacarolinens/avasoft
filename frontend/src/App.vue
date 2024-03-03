<!-- App.vue -->
<template>

  
  <div id="app">
    <router-view />  
  </div>



</template>

<script>
export default {
  name: 'App',
  components: {

  },

};
</script>

<style>

html, body {
  height: 100%;
  margin: 0; /* Remover margens padrão para garantir que não haja espaçamento adicional */
  padding: 0; /* Remover padding padrão */
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #393939;
}
</style>
