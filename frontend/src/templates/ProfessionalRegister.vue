<template>
    <div class="container flex flex-col justify-start items-center min-h-screen text-white px-4">
      <!-- Título do formulário -->
      <h2 class="text-2xl mb-6">Cadastro de Profissionais</h2>
  
      <!-- Formulário de cadastro -->
      <form @submit.prevent="handleRegister" id="register-form" class="w-full max-w-4xl text-black">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <!-- Nome completo -->
          <div class="flex flex-col mx-4">
            <label for="fullName" class="mb-2 text-white">Nome completo</label>
            <input type="text" id="fullName" placeholder="Digite seu nome completo aqui..." v-model="fullName"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- CPF -->
          <div class="flex flex-col mx-4">
            <label for="cpf" class="mb-2 text-white">CPF</label>
            <input type="text" id="cpf" placeholder="Digite seu CPF aqui..." v-model="cpf"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Data de Nascimento -->
          <div class="flex flex-col mx-4">
            <label for="dataNasc" class="mb-2 text-white">Data de Nascimento</label>
            <input type="date" id="dataNasc" v-model="dataNasc"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Gênero -->
          <div class="flex flex-col mx-4">
            <label for="gender" class="mb-2 text-white">Gênero</label>
            <select id="gender" v-model="gender" class="w-full p-3 rounded focus:border-orange-500">
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
  
          <!-- Nome de Usuário -->
          <div class="flex flex-col mx-4">
            <label for="userName" class="mb-2 text-white">Nome de Usuário</label>
            <input type="text" id="userName" placeholder="Digite seu nome de usuário aqui..." v-model="userName"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Telefone -->
          <div class="flex flex-col mx-4">
            <label for="phone" class="mb-2 text-white">Telefone</label>
            <input type="text" id="phone" placeholder="Digite seu telefone aqui..." v-model="phone"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Email -->
          <div class="flex flex-col mx-4">
            <label for="email" class="mb-2 text-white">Email</label>
            <input type="email" id="email" placeholder="Digite seu email aqui..." v-model="email"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Senha -->
          <div class="flex flex-col mx-4">
            <label for="password" class="mb-2 text-white">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha aqui..." v-model="password"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Confirmação de Senha -->
          <div class="flex flex-col mx-4">
            <label for="confirmPassword" class="mb-2 text-white">Confirme a Senha</label>
            <input type="password" id="confirmPassword" placeholder="Confirme sua senha aqui..." v-model="confirmPassword"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Rua -->
          <div class="flex flex-col mx-4">
            <label for="street" class="mb-2 text-white">Rua</label>
            <input type="text" id="street" placeholder="Digite sua rua aqui..." v-model="street"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Número -->
          <div class="flex flex-col mx-4">
            <label for="number" class="mb-2 text-white">Número</label>
            <input type="number" id="number" placeholder="Digite o número aqui..." v-model="number"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Complemento -->
          <div class="flex flex-col mx-4">
            <label for="complement" class="mb-2 text-white">Complemento</label>
            <input type="text" id="complement" placeholder="Digite o complemento aqui..." v-model="complement"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Bairro -->
          <div class="flex flex-col mx-4">
            <label for="district" class="mb-2 text-white">Bairro</label>
            <input type="text" id="district" placeholder="Digite seu bairro aqui..." v-model="district"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Cidade -->
          <div class="flex flex-col mx-4">
            <label for="city" class="mb-2 text-white">Cidade</label>
            <input type="text" id="city" placeholder="Digite sua cidade aqui..." v-model="city"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- Estado -->
          <div class="flex flex-col mx-4">
            <label for="state" class="mb-2 text-white">Estado</label>
            <input type="text" id="state" placeholder="Digite seu estado aqui..." v-model="state"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
  
          <!-- CEP -->
          <div class="flex flex-col mx-4">
            <label for="cep" class="mb-2 text-white">CEP</label>
            <input type="text" id="cep" placeholder="Digite seu CEP aqui..." v-model="cep"
              class="w-full p-3 rounded focus:border-orange-500">
          </div>
        </div>
  
        <!-- Botões de envio -->
        <div class="flex justify-center mt-6 gap-4">
          <button type="submit" class="bg-orange-500 text-white p-3 mb-3 rounded">Cadastrar</button>
          <router-link to="/">
            <button type="button" class="bg-orange-500 text-white p-3 mb-3 rounded">Voltar</button>
          </router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
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
        userName: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      async handleRegister() {
        if (this.password !== this.confirmPassword) {
          alert('As senhas não coincidem.');
          return;
        }
  
        try {
          // Envia a requisição com as senhas corretas
          await axios.post('http://localhost:5434/register', {
            fullName: this.fullName,
            cpf: this.cpf,
            dataNasc: this.dataNasc,
            gender: this.gender,
            phone: this.phone,
            email: this.email,
            street: this.street,
            number: this.number,
            complement: this.complement,
            district: this.district,
            city: this.city,
            state: this.state,
            cep: this.cep,
            role: 'Profissional',
            userName: this.userName,
            password: this.password, // Use a senha correta
            confirmPassword: this.confirmPassword, // Inclua o confirmPassword
            resetPasswordToken: null,
          });
          alert('Profissional cadastrado com sucesso!');
        } catch (error) {
          console.error('Erro ao cadastrar profissional:', error);
          if (error.response && error.response.data && error.response.data.message) {
            alert(`Erro ao cadastrar profissional: ${error.response.data.message}`);
          } else {
            alert('Erro ao cadastrar profissional.');
          }
        }
      },
    }
  };
  </script>
  
  <style scoped>
  p {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  #logo {
    max-width: 10%;
    max-height: 10%;
    opacity: 0.5;
    margin-right: 1rem;
  }
  
  h1 span {
    color: #ff8818;
  }
  
  button {
    width: 180px;
  }
  </style>
  