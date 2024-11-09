<template>
    <div class="container">
      
      <div class="content">
        <div class="content">
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
      
    </div>
  </template>
  
  <script>
export default {
  components: {

  },
  methods: {

  },
};
</script>

<style scoped>

</style>