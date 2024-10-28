<template>
  <div class="modal" v-if="isOpen" @click.self="close">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <div class="flex flex-col items-center">
        <img class="w-25 h-20" src="../assets/login-logo.png" alt="">
        <h1 class="mt-10 mb-10 rounded font-semibold">ÁREA DO PACIENTE</h1>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="flex flex-col">
          <label for="name">Usuário</label>
          <input type="text" id="name" v-model="userName" class="mt-2 mb-5 rounded border border-stone-700 p-2" placeholder="Digite seu usuário aqui..." required>

          <label for="pass">Senha</label>
          <input type="password" id="pass" v-model="password" class="mt-2 mb-5 rounded border border-stone-700 p-2" placeholder="Digite sua senha aqui..." required>
        </div>

        <p class="text-end text-sm">
          <a href="#">Esqueceu a senha?</a>
        </p>
        <div class="flex justify-center mt-10">
          <button type="submit" class="flex items-center bg-[#FF8139] px-12 py-3 text-white rounded-md hover:bg-[#FF5C00]">
            Entrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      userName: '',
      password: ''
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    async handleLogin() {
      try {
        const response = await axios.post('/login', { 
          userName: this.userName,
          password: this.password,
        });
        this.$router.push('/homePatient');
        this.close();
      } catch (error) {
        if (error.response) {
          console.error('Erro ao fazer login:', error.response.data);
        } else if (error.request) {
          console.error('Erro ao fazer login: Nenhuma resposta do servidor');
        } else {
          console.error('Erro ao fazer login:', error.message);
        }
      }
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  padding: 50px;
  border-radius: 5px;
  width: 800px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 40px;
  cursor: pointer;
}
</style>