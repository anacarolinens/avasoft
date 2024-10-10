<template>
  <div class="container flex flex-col justify-start items-center min-h-screen text-white px-4">
    <!-- Título do formulário -->
    <h2 class="text-2xl mb-6">Cadastro de Pacientes</h2>

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

        <!-- Nome de Usuário -->
        <div class="flex flex-col mx-4">
          <label for="userName" class="mb-2 text-white">Nome de Usuário</label>
          <input type="text" id="userName" placeholder="Digite seu nome de usuário aqui..." v-model="userName"
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

        <!-- Peso Inicial -->
        <div class="flex flex-col mx-4">
          <label for="weigth_ini" class="mb-2 text-white">Peso Inicial</label>
          <input type="number" id="weigth_ini" placeholder="Digite seu peso inicial aqui..." v-model="weigth_ini"
            class="w-full p-3 rounded focus:border-orange-500">
        </div>

        <!-- Altura Inicial -->
        <div class="flex flex-col mx-4">
          <label for="height_ini" class="mb-2 text-white">Altura Inicial</label>
          <input type="number" id="height_ini" placeholder="Digite sua altura inicial aqui..." v-model="height_ini"
            class="w-full p-3 rounded focus:border-orange-500">
        </div>
      </div>

      <!-- Botão de envio -->
      <button type="submit" class="mt-6 bg-orange-500 text-white p-3 rounded">Cadastrar</button>
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
      weigth_ini: '',
      height_ini: '',
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
        await axios.post('http://localhost:3000/register', {
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
          role: 'Paciente', // Sempre define o role como Paciente
          userName: this.userName,
          password: this.password,
          confirmPassword: this.confirmPassword,
          resetPasswordToken: null,

          // Campos específicos do paciente
          weigth_ini: this.weigth_ini,
          height_ini: this.height_ini,
        });
        alert('Paciente cadastrado com sucesso!');
      } catch (error) {
        console.error('Erro ao cadastrar paciente:', error);
        if (error.response && error.response.data && error.response.data.message) {
          alert(`Erro ao cadastrar paciente: ${error.response.data.message}`);
        } else {
          alert('Erro ao cadastrar paciente.');
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
  height: 50px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow .15s, transform .15s;
}

button:focus {
  box-shadow: #af6a0a 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

button:hover {
  box-shadow: rgba(255, 255, 255, 0.278) 0 4px 8px, rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

button:active {
  box-shadow: #ffa347 0 3px 7px inset;
  transform: translateY(2px);
}
</style>