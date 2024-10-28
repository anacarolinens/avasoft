<template>
    <div class="container flex flex-col justify-start min-h-screen text-white px-4">
      <!-- Título do formulário -->
      <h1 class="text-3xl mb-16 mt-10 text-center">CONFIGURAÇÕES</h1>
    
      <!-- Formulário de configurações -->
      <form @submit.prevent="handleRegister" id="register-form" class="w-full max-w-4xl mx-auto text-black">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Nome completo -->
          <div class="flex flex-col mx-4">
            <label for="fullName" class="mb-2 text-white">Nome completo</label>
            <input type="text" id="fullName" placeholder="Digite seu nome completo aqui..." v-model="fullName"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- CPF -->
          <div class="flex flex-col mx-4">
            <label for="cpf" class="mb-2 text-white">CPF</label>
            <input type="text" id="cpf" placeholder="Digite seu CPF aqui..." v-model="cpf"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- Telefone -->
          <div class="flex flex-col mx-4">
            <label for="phone" class="mb-2 text-white">Telefone</label>
            <input type="text" id="phone" placeholder="Digite seu telefone aqui..." v-model="phone"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- Email -->
          <div class="flex flex-col mx-4">
            <label for="email" class="mb-2 text-white">Email</label>
            <input type="email" id="email" placeholder="Digite seu email aqui..." v-model="email"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- Nome de Usuário -->
          <div class="flex flex-col mx-4">
            <label for="userName" class="mb-2 text-white">Nome de Usuário</label>
            <input type="text" id="userName" placeholder="Digite seu nome de usuário aqui..." v-model="userName"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- Rua -->
          <div class="flex flex-col mx-4">
            <label for="street" class="mb-2 text-white">Rua</label>
            <input type="text" id="street" placeholder="Digite sua rua aqui..." v-model="street"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- Número -->
          <div class="flex flex-col mx-4">
            <label for="number" class="mb-2 text-white">Número</label>
            <input type="number" id="number" placeholder="Digite o número aqui..." v-model="number"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- Complemento -->
          <div class="flex flex-col mx-4">
            <label for="complement" class="mb-2 text-white">Complemento</label>
            <input type="text" id="complement" placeholder="Digite o complemento aqui..." v-model="complement"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- Bairro -->
          <div class="flex flex-col mx-4">
            <label for="district" class="mb-2 text-white">Bairro</label>
            <input type="text" id="district" placeholder="Digite seu bairro aqui..." v-model="district"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- Cidade -->
          <div class="flex flex-col mx-4">
            <label for="city" class="mb-2 text-white">Cidade</label>
            <input type="text" id="city" placeholder="Digite sua cidade aqui..." v-model="city"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- Estado -->
          <div class="flex flex-col mx-4">
            <label for="state" class="mb-2 text-white">Estado</label>
            <input type="text" id="state" placeholder="Digite seu estado aqui..." v-model="state"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- CEP -->
          <div class="flex flex-col mx-4">
            <label for="cep" class="mb-2 text-white">CEP</label>
            <input type="text" id="cep" placeholder="Digite seu CEP aqui..." v-model="cep"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- Senha Atual -->
          <div class="flex flex-col mx-4">
            <label for="currentPassword" class="mb-2 text-white">Senha Atual</label>
            <input type="password" id="currentPassword" placeholder="Digite sua senha atual aqui..." v-model="currentPassword"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
          <!-- Nova Senha -->
          <div class="flex flex-col mx-4">
            <label for="newPassword" class="mb-2 text-white">Nova Senha</label>
            <input type="password" id="newPassword" placeholder="Digite sua nova senha aqui..." v-model="newPassword"
              class="w-full text-white p-3 rounded focus:border-orange-500 bg-input-color bg-[#3E3E3E]">
          </div>
        </div>
    
        <!-- Botões -->
        <div class="flex flex-col sm:flex-row justify-end sm:space-x-4 mt-10 mx-4 space-y-4 sm:space-y-0">
          <button type="button" class="w-full sm:w-auto min-w-[200px] h-12 px-4 py-3 bg-transparent text-white border border-white rounded">
            Limpar
          </button>
          <button type="submit" class="w-full sm:w-auto min-w-[200px] h-12 bg-[#FF8139] text-white p-3 rounded">
            Salvar
          </button>
        </div>
    </form>
  </div>
</template>
<script>

</script>

<style scoped>

</style>