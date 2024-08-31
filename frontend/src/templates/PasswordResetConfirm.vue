<template>
    <div class="container-reset">
  
      <header class="flex flex-col  xl:m-0" style="width: fit-content;">
        <h1 class="text-9xl mt-4">AVA<span>SOFT</span></h1>
        <p class="text-center" style="color:#fff">Redefina sua senha</p>
      </header>
  
      <form action="" id="reset-form" class="" style="width: fit-content;">
        <div class="flex flex-col">
          <label for="userName" id="label-userName">Usuário</label>
          <input type="text" id="userName" placeholder="Digite seu usuário aqui..." v-model="userName">
  
          <label for="newPassword" id="label-newPassword">Nova Senha</label>
          <input type="password" id="newPassword" placeholder="Digite sua senha aqui..." v-model="newPassword">
  
          <label for="confirmPassword" id="label-confirmPassword">Confirmar Senha</label>
          <input type="password" id="confirmPassword" placeholder="Digite sua confirmação de senha aqui..." v-model="confirmPassword">
        </div>
  
        <div class="flex justify-center">
          <button type="button" class="button-reset" @click="handlePasswordReset">Redefinir</button>
        </div>
      </form>
  
      <img id="logo" src="../assets/img/logo.svg" alt="logo avasoft" class="fixed top-1/2 right-0 transform -translate-y-1/2 max-w-[100%] max-h-[100%] opacity-50 z-[-1]" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userName: '',
        newPassword: '',
        confirmPassword: '',
      }
    },
    methods: {
      async handlePasswordReset() {
        if (this.newPassword !== this.confirmPassword) {
          alert('As senhas não coincidem!');
          return;
        }
  
        try {
          const response = await this.$axios.post('http://localhost:3000/password-reset-confirm', {
            userName: this.userName,
            newPassword: this.newPassword,
          });
  
          console.log('Senha redefinida com sucesso:', response.data);
          // Redirecionar para a página de login ou mostrar uma mensagem de sucesso
        } catch (error) {
          console.error('Erro ao redefinir a senha:', error);
          // Trate o erro, exiba uma mensagem de erro, etc.
        }
      },
    },
  };
  </script>
  
  <style scoped>
  #label-userName,
  #label-newPassword,
  #label-confirmPassword {
    color: #ffffff;
    font-size: 1em;
    margin: 1em 0;
    font-family: "Nanum Gothic", sans-serif;
  }
  
  #userName,
  #newPassword,
  #confirmPassword {
    width: 30rem;
    max-width: 30rem;
    height: 45px;
    padding: 12px;
    border-radius: 5px;
    border: 1.5px solid lightgrey;
    outline: none;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 2px 2px 20px 0px;
  }
  
  #userName:hover,
  #newPassword:hover,
  #confirmPassword:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
  }
  
  #userName:active,
  #newPassword:active,
  #confirmPassword:active {
    transform: scale(0.95);
  }
  
  #userName:focus,
  #newPassword:focus,
  #confirmPassword:focus {
    border: 2px solid grey;
  }
  
  .button-reset {
    margin-top: 2em;
    margin-bottom: 2em;
    background-color: #ff8818;
    color: #ffffff;
    width: 180px;
    height: 80px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: box-shadow .15s, transform .15s;
  }
  
  .button-reset:focus {
    box-shadow: #af6a0a 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  }
  
  .button-reset:hover {
    box-shadow: rgba(255, 255, 255, 0.278) 0 4px 8px, rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  
  .button-reset:active {
    box-shadow: #ffa347 0 3px 7px inset;
    transform: translateY(2px);
  }
  
  .container-reset {
    display: flex;
    flex-direction: column;
    margin-left: 12em;
    height: 100vh;
    font-family: "Nanum Gothic", sans-serif;
  }
  </style>
  