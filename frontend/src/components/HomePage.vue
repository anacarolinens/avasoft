<!-- HomePage.vue -->
<template>
 
  <div class="container">
    
    <header>
      <h1>Bem-vindo, <span>Usuário</span>!</h1>
    </header>

    <div class="sidebar">

      <router-link to="/RegisterPatient">registar paciente</router-link>
      
      <router-link to="/">Sair</router-link>

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
  background-color: #ff8818;
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
  cursor: pointer;
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
