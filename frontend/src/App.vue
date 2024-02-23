<template>
  <div id="app">
    <component :is="currentComponent" @loginSuccess="handleLoginSuccess" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import LoginPage from './components/LoginPage.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginPage,
  },
  data() {
    return {
      showLoginPage: true,
    };
  },
  computed: {
    currentComponent() {
      return this.showLoginPage ? 'LoginPage' : 'HelloWorld';
    },
  },
  methods: {
    handleLoginSuccess() {
      // Lógica para lidar com o sucesso do login
      console.log('Login bem-sucedido. Redirecionando...');
      this.showLoginPage = false;
    },
  },
};
</script>

<style>
/* Seus estilos aqui */
</style>
