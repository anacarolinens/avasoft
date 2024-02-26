<!-- App.vue -->
<template>
  <div id="app">
    <component :is="currentComponent" @loginSuccess="handleLoginSuccess" @logout="handleLogout" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginPage,
    HomePage,
  },
  data() {
    return {
      showLoginPage: true,
    };
  },
  computed: {
    currentComponent() {
      return this.showLoginPage ? 'LoginPage' : 'HomePage';
    },
  },
  methods: {
    handleLoginSuccess() {
      // Lógica para lidar com o sucesso do login
      console.log('Login bem-sucedido. Redirecionando para HomePage...');
      this.showLoginPage = false;
    },
    handleLogout() {
      // Lógica para lidar com o logout
      console.log('Logout realizado. Redirecionando para LoginPage...');
      this.showLoginPage = true;
    },
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  margin: 0;
  padding: 0;
  background-color: #393939;
  display: flex;
  height: 100vh;
}
</style>
