<template>
  <div class="container">

    <header>
      <h1>Bem-vindo</h1>

    </header>



    <div class="content">

      <div class="sidebar">

        <router-link to="/HomePage">home</router-link>
        
        <router-link to="/RegisterUser">registar paciente</router-link>

        <router-link to="/ListUser">Lista de usuarios</router-link>

        <router-link to="/">Sair</router-link>

      </div>



      <form id="userForm" action="http://localhost:3000/register" method="post">
        <h2>Registrar Usuário</h2>

        <!-- Informações do Usuário -->
        <fieldset>
          <legend>Informações do Usuário</legend>

          <div class="form-group">
            <label for="fullName">Nome:</label>
            <input type="text" id="fullName" name="fullName" required>
          </div>

          <div class="form-group">
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required>
          </div>

          <div class="form-group">
            <label for="dataNasc">Data de Nascimento:</label>
            <input type="text" id="dataNasc" name="dataNasc" required>
          </div>

          <div class="form-group">
            <label for="gender">Gênero:</label>
            <input type="text" id="gender" name="gender" required>
          </div>

          <div class="form-group">
            <label for="phone">Telefone:</label>
            <input type="text" id="phone" name="phone" required>
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>
        </fieldset>

        <!-- Endereço -->
        <fieldset>
          <legend>Endereço</legend>

          <div class="form-group">
            <label for="street">Rua:</label>
            <input type="text" id="street" name="street" required>
          </div>

          <div class="form-group">
            <label for="number">Número:</label>
            <input type="text" id="number" name="number" required>
          </div>

          <div class="form-group">
            <label for="complement">Complemento:</label>
            <input type="text" id="complement" name="complement">
          </div>

          <div class="form-group">
            <label for="district">Bairro:</label>
            <input type="text" id="district" name="district" required>
          </div>

          <div class="form-group">
            <label for="city">Cidade:</label>
            <input type="text" id="city" name="city" required>
          </div>

          <div class="form-group">
            <label for="state">Estado:</label>
            <input type="text" id="state" name="state" required>
          </div>

          <div class="form-group">
            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" required>
          </div>
        </fieldset>

        <!-- Login -->
        <fieldset>
          <legend>Login</legend>

          <div class="form-group">
            <label for="role">Role:</label>
            <select id="role" name="role" required>
              <option value="Profissional Nutricionista">Profissional Nutricionista</option>
              <option value="Paciente">Paciente</option>
            </select>
          </div>

          <div class="form-group">
            <label for="userName">Login:</label>
            <input type="text" id="userName" name="userName" required>
          </div>

          <div class="form-group">
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" required>
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirmar Senha:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
          </div>
        </fieldset>

        <button type="submit">Salvar</button>
      </form>
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

.section-form {
  width: 80%;
  /* Ajuste conforme necessário */
  padding: 1em;
}

.form-group {
  margin-bottom: 1em;
}


#userForm {
  flex: 1;
  /* Faz com que a lista de usuários ocupe o restante do espaço disponível na horizontal */
  padding: 1em;
}

form {
  width: 50%;
  margin: auto;
}

fieldset {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}

legend {
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>