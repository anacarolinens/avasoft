<template>
  <div class="container">





    <div class="content">





      <form id="userForm" @submit.prevent="updateUser">
        <h2>Editar dados do Usuario</h2>

        <!-- Informações do Usuário -->
        <fieldset>
          <legend>Informações do Usuário</legend>

          <div v-if="user" class="form-group">
            <label for="fullName">Nome:</label>
            <input v-model="user.fullName" type="text" id="fullName" name="fullName" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="cpf">CPF:</label>
            <input v-model="user.cpf" type="text" id="cpf" name="cpf" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="dataNasc">Data de Nascimento:</label>
            <input v-model="user.dataNasc" type="text" id="dataNasc" name="dataNasc" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="gender">Gênero:</label>
            <input v-model="user.gender" type="text" id="gender" name="gender" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="phone">Telefone:</label>
            <input v-model="user.phone" type="text" id="phone" name="phone" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="email">Email:</label>
            <input v-model="user.email" type="email" id="email" name="email" required>
          </div>
        </fieldset>

        <!-- Endereço -->
        <fieldset>
          <legend>Endereço</legend>

          <div v-if="user" class="form-group">
            <label for="street">Rua:</label>
            <input v-model="user.street" type="text" id="street" name="street" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="number">Número:</label>
            <input v-model="user.number" type="text" id="number" name="number" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="complement">Complemento:</label>
            <input v-model="user.complement" type="text" id="complement" name="complement">
          </div>

          <div v-if="user" class="form-group">
            <label for="district">Bairro:</label>
            <input v-model="user.district" type="text" id="district" name="district" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="city">Cidade:</label>
            <input v-model="user.city" type="text" id="city" name="city" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="state">Estado:</label>
            <input v-model="user.state" type="text" id="state" name="state" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="cep">CEP:</label>
            <input v-model="user.cep" type="text" id="cep" name="cep" required>
          </div>
        </fieldset>

        <!-- Login -->
        <fieldset>
          <legend>Login</legend>

          <div v-if="user" class="form-group">
            <label for="role">Role:</label>
            <select v-model="user.role" id="role" name="role" required>
              <option value="Profissional Nutricionista">Profissional Nutricionista</option>
              <option value="Paciente">Paciente</option>
            </select>
          </div>

          <div v-if="user" class="form-group">
            <label for="userName">Login:</label>
            <input v-model="user.userName" type="text" id="userName" name="userName" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="password">Senha:</label>
            <input v-model="user.password" type="password" id="password" name="password" required>
          </div>

          <div v-if="user" class="form-group">
            <label for="confirmPassword">Confirmar Senha:</label>
            <input v-model="user.confirmPassword" type="password" id="confirmPassword" name="confirmPassword" required>
          </div>
        </fieldset>

        <button type="submit">Salvar</button>
      </form>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        fullName: '',
        cpf: '',
        dataNasc: '',
        gender: '',
        phone: '',
        email: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
        cep: '',
        role: '',
        userName: '',
        password: '',
        resetPasswordToken: '',
      },
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const userId = this.$route.params.id;
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        this.user = response.data.user;
        console.log("Dados do usuário:", this.user);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário", error);
      }
    },
    async updateUser() {
  try {
    const userId = this.$route.params.id;
    await axios.put(`http://localhost:3000/users/${userId}`, this.user);
    this.$router.push("/users");
  } catch (error) {
    console.error("Erro ao atualizar dados do usuário:", error);
    // Adicione lógica de manipulação de erro, se necessário
  }
},

  },
};
</script>

 
<style scoped>

</style>