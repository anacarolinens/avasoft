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
          <Button type="submit" class="bg-[#FF8139] px-12 py-3 text-white rounded-md hover:bg-[#FF5C00]">
            Entrar
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import axios from 'axios';

export default {
  components: {
    Button
  },
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
  mounted() {
    // Verifique se há um token no localStorage e configure o Axios
    const token = localStorage.getItem('authToken');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:5434/login', {
          userName: this.userName,
          password: this.password,
        });

        const { token } = response.data;

        // Armazene o token em localStorage
        localStorage.setItem('authToken', token);

        // Defina o token no cabeçalho de autorização para todas as requisições Axios
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Redirecione para a HomePage ou faça outras ações necessárias após o login
        this.$router.push('/homePatient');
        this.close();
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        // Trate o erro, exiba uma mensagem de erro, etc.
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