<template>
  <div class="container-patient">
    <header>
      <h1>Bem-vindo</h1>
      <router-link to="/HomePage">home</router-link>
    </header>

    <h2>Registrar Usuario</h2>
    <form id="userForm" action="http://localhost:3000/register" method="post">
      <!-- Personal Information -->
      <label for="fullName">Nome:</label>
      <input type="text" id="fullName" name="fullName" required><br>

      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" name="cpf" required><br>

      <label for="dataNasc">Data de nascimento:</label>
      <input type="text" id="dataNasc" name="dataNasc" required><br>

      <label for="gender">Genero:</label>
      <input type="text" id="gender" name="gender" required><br>

      <!-- Contact Information -->
      <label for="phone">Telefone:</label>
      <input type="text" id="phone" name="phone" required><br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br>

      <!-- Address Information -->
      <label for="street">Rua:</label>
      <input type="text" id="street" name="street" required><br>

      <label for="number">Numero:</label>
      <input type="text" id="number" name="number" required><br>

      <label for="complement">Complemento:</label>
      <input type="text" id="complement" name="complement"><br>

      <label for="district">Bairro:</label>
      <input type="text" id="district" name="district" required><br>

      <label for="city">Cidade:</label>
      <input type="text" id="city" name="city" required><br>

      <label for="state">Estado:</label>
      <input type="text" id="state" name="state" required><br>

      <label for="cep">CEP:</label>
      <input type="text" id="cep" name="cep" required><br>

      <!-- Account Information -->
      <label for="role">Role:</label>
      <select id="role" name="role" required>
        <option value="Profissional Nutricionista">Profissional Nutricionista</option>
        <option value="Paciente">Paciente</option>
      </select><br>

      <label for="userName">Login:</label>
      <input type="text" id="userName" name="userName" required><br>

      <label for="password">Senha:</label>
      <input type="password" id="password" name="password" required><br>

      <label for="confirmPassword">Confirmar Senha:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" required><br>

      <button type="submit">Salvar</button>
    </form>


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
  width: 80%;
  /* Ajuste conforme necessário */
  padding: 1em;
}

.form-group {
  margin-bottom: 1em;
}
</style>