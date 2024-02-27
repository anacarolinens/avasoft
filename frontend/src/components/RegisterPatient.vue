<!-- RegisterPatient.vue -->
<template>
  <router-view></router-view>

  <div class="container">

    <header>
      <h1>Bem-vindo, <span>paciente</span>!</h1>

    <router-link to="/home">home</router-link>

    </header>

    <div class="sidebar">

      <button @click="handleLogout">Sair</button>

    </div>

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
div {
  box-sizing: border-box;
}

header {
  background-color: #52ff18;
  width: 100%;
}

.container {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.sidebar {
  display: flex;
  flex-direction: column;
  background-color: #555;
  color: rgb(255, 255, 255);
  padding: 1em;
  width: 20%;
  /* ou qualquer outra largura desejada */
  height: calc(100vh - 80px);
  /* 4em é a altura do header */
  box-sizing: border-box;
}

#links-sidebar {
  margin-bottom: 1em;
  color: #ff8818;
  text-decoration: none;
  font-size: 1em;
}

#links-sidebar:hover {
  text-decoration: underline;
  color: #ffbb4c;
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
  