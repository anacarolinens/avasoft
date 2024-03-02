<!-- App.vue -->
<template>

  
  <div id="app">
    <router-view />  
  </div>

 <!-- <component :is="currentComponent" @loginSuccess="handleLoginSuccess" @logout="handleLogout"/>  -->

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import LoginPage from './components/LoginPage.vue';
// import HomePage from './components/HomePage.vue';
// import RegisterPatient from './components/RegisterPatient.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LoginPage,
    // HomePage,
    // RegisterPatient
  },
  // data() {
  //   return {
  //     showLoginPage: false,
  //   };
  // },
  // computed: {
  //   currentComponent() {
  //     return this.showLoginPage ? 'LoginPage' : 'HomePage';
  //   },
  // },
  // methods: {
  //   handleLoginSuccess() {
  //     // Lógica para lidar com o sucesso do login
  //     console.log('Login bem-sucedido. Redirecionando para HomePage...');
  //     this.showLoginPage = false;
  //   },
  //   handleLogout() {
  //     // Lógica para lidar com o logout
  //     console.log('Logout realizado. Redirecionando para LoginPage...');
  //     this.showLoginPage = true;
  //   },
  // },
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
