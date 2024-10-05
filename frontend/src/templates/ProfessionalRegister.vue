<template>
  <div class="container flex flex-col justify-start items-center min-h-screen text-white px-4">

    <!-- Logo e título -->
    <div id="hea" class="text-center w-full">
      <div class="flex items-center justify-center">
        <img id="logo" src="../assets/img/logo.svg" alt="logo avasoft"
        class="w-auto h-auto opacity-50 mr-4" />
        <div>
          <h1 class="text-8xl">AVA<span>SOFT</span></h1>
          <p class="text-center" style="color:#fff">Avaliação Antropometrica</p>
        </div>
      </div>
    </div>

    <!-- Título do formulário -->
    <h2 class="text-2xl mb-6">Cadastro de profissionais</h2>

    <!-- Formulário de cadastro -->
    <form action="" id="register-form" class="w-full max-w-4xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2  ">

        <!-- Nome completo -->
        <div class="flex flex-col mx-4">
          <label for="fullName" class="mb-2 text-white">Nome completo</label>
          <input type="text" id="fullName" placeholder="Digite seu nome completo aqui..." v-model="fullName"
            class="w-full p-3 rounded   focus:border-orange-500">
        </div>

        <!-- Telefone -->
        <div class="flex flex-col mx-4">
          <label for="phone" class="mb-2 text-white">Telefone</label>
          <input type="text" id="phone" placeholder="Digite seu telefone aqui..." v-model="phone"
            class="w-full p-3 rounded   focus:border-orange-500">
        </div>

        <!-- Email -->
        <div class="flex flex-col mx-4">
          <label for="email" class="mb-2 text-white">Email</label>
          <input type="email" id="email" placeholder="Digite seu email aqui..." v-model="email"
            class="w-full p-3 rounded   focus:border-orange-500">
        </div>

        <!-- Experiência -->
        <div class="flex flex-col mx-4">
          <label for="experience" class="mb-2 text-white">Experiência</label>
          <input type="text" id="experience" placeholder="Digite sua experiência aqui..." v-model="experience"
            class="w-full p-3 rounded   focus:border-orange-500">
        </div>

        <!-- Endereço -->
        <div class="flex flex-col mx-4">
          <label for="address" class="mb-2 text-white">Endereço</label>
          <input type="text" id="address" placeholder="Digite seu endereço aqui..." v-model="address"
            class="w-full p-3 rounded   focus:border-orange-500">
        </div>

        <!-- Usuário -->
        <div class="flex flex-col mx-4">
          <label for="username" class="mb-2 text-white">Usuário</label>
          <input type="text" id="username" placeholder="Digite seu usuário aqui..." v-model="username"
            class="w-full p-3 rounded   focus:border-orange-500">
        </div>

        <!-- Especialidade -->
        <div class="flex flex-col mx-4">
          <label for="specialty" class="mb-2 text-white">Especialidade</label>
          <input type="text" id="specialty" placeholder="Digite sua especialidade aqui..." v-model="specialty"
            class="w-full p-3 rounded   focus:border-orange-500">
        </div>

        <!-- CRN / Matrícula -->
        <div class="flex flex-col mx-4">
          <label for="crn" class="mb-2 text-white">CRN / Matrícula</label>
          <input type="text" id="crn" placeholder="Digite seu CRN ou Matrícula aqui..." v-model="crn"
            class="w-full p-3 rounded   focus:border-orange-500">
        </div>

        <!-- Senha -->
        <div class="flex flex-col mx-4">
          <label for="password" class="mb-2 text-white">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha aqui..." v-model="password"
            class="w-full p-3 rounded   focus:border-orange-500">
        </div>

        <!-- Confirmar Senha -->
        <div class="flex flex-col mx-4">
          <label for="confirmPassword" class="mb-2 text-white">Confirmar Senha</label>
          <input type="password" id="confirmPassword" placeholder="Digite sua confirmação de senha aqui..."
            v-model="confirmPassword" class="w-full p-3 rounded   focus:border-orange-500">
        </div>

      </div>

      <!-- Botões -->
      <div class="flex justify-between mx-4 my-8 ">
        <button type="button" class="button-reset bg-gray-600 hover:bg-gray-500" @click="goBack">Voltar</button>
        <button type="submit" class="button-reset bg-orange-500 hover:bg-orange-600"
          @click="handleRegister">Cadastrar</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      phone: '',
      email: '',
      experience: '',
      address: '',
      username: '',
      specialty: '',
      crn: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    goBack() {
      //voltar à página anterior
      this.$router.go(-1);
    },
    async handleRegister() {
      // Lógica para enviar os dados do formulário para o backend
      try {
        const response = await this.$axios.post('http://localhost:3000/professional-register', {
          fullName: this.fullName,
          phone: this.phone,
          email: this.email,
          experience: this.experience,
          address: this.address,
          username: this.username,
          specialty: this.specialty,
          crn: this.crn,
          password: this.password,
          confirmPassword: this.confirmPassword,
        });

        console.log('Cadastro realizado com sucesso:', response.data);
        // Mostrar uma notificação de sucesso ou redirecionar para outra página
      } catch (error) {
        console.error('Erro ao realizar cadastro:', error);
        // falta Tratar o erro e exibir uma mensagem de erro
      }
    },
  },
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