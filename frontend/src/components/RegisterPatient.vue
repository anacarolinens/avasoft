<template>
  <div class="container-patient">
    <header>
      <h1>Bem-vindo, <span>paciente</span>!</h1>
      <router-link to="/HomePage">home</router-link>
    </header>

    <div class="content-wrapper">
      <div class="sidebar">
        <router-link to="/">Sair</router-link>
      </div>

      <div class="section-form">
        <form>
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome">
          </div>

          <div class="form-group">
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf">
          </div>

          <div class="form-group">
            <label for="datanasc">Data de Nascimento:</label>
            <input type="date" id="datanasc" name="datanasc">
          </div>

          <div class="form-group">
            <label for="sexo">Sexo:</label>
            <select id="sexo" name="sexo">
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>

          <div class="form-group">
            <label for="contato">Contato:</label>
            <input type="text" id="contato" name="contato">
          </div>

          <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email">
          </div>

          <div class="form-group">
            <label for="endereco">Endereço:</label>
            <textarea id="endereco" name="endereco"></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
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

.content-wrapper {
  display: flex;
}

.section-form {
  width: 80%; /* Ajuste conforme necessário */
  padding: 1em;
}

.form-group {
  margin-bottom: 1em;
}

</style>
  