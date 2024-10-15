<template>
  <div class="container-login">

    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Kode+Mono:wght@400..700&family=Nanum+Gothic&display=swap">

    <header class="flex flex-col justify-center items-center xl:m-0 pl-14" style="width: fit-content;">
      <h1 class="text-8xl mt-3">AVA<span>SOFT</span></h1>
      <p class="text-center" style="color:#fff">Avaliação Antropometrica</p>
    </header>


    <form action="" id="login-form" class="" style="width: fit-content;">
      <div class="flex flex-col">
        <label for="name" id="label-name" class="">Nome</label>
        <input type="text" id="name" placeholder="" v-model="userName">

        <label for="pass" id="label-pass">Senha</label>
        <input type="password" id="pass" placeholder="" v-model="password">
      </div>

      <p class="text-end text-white pt-2"><a class="text-orange-400 hover:underline"><router-link to="/PasswordReset">Esqueceu a senha?</router-link></a></p>

      <div class="flex justify-center">
        <button type="button" class="button-login" @click="handleLogin">Entrar</button>
      </div>
      <div class="text-center text-white pt-2">
        <p>Não tem uma conta? <a href="#" class="text-orange-400 hover:underline" ><router-link to="/ProfessionalRegister">Registre-se aqui!</router-link></a></p>
        <p class="pt-2">__________ OU __________</p>

        <div id="micro-google" class="flex justify-around pt-4">
          <a @click="logingoogle" class="flex justify-around rounded-md items-center w-40"><img src="../assets/img/google.png" alt="">Google</a>
          <a href="#" class="flex justify-around  rounded-md items-center w-40"><img src="../assets/img/microsoft.png" alt="">Microsoft</a>
        </div>
      </div>


    </form>

    <img id="logo" src="../assets/img/logo.svg" alt="logo avasoft" class="fixed top-1/2 right-0 transform -translate-y-1/2 max-w-[100%] max-h-[100%] opacity-50 z-[-1] md:max-w-[100%] md:max-h-[100%] sm:max-w-[100%] sm:max-h-[100%]" />

    <router-link to="/HomePage" class="router-link">
      <div class="link-content"> 
        Home
        <img src="@/assets/img/home-icon.svg" class="w-12" alt="">
      </div>
    </router-link>
    <GoogleLogin :callback="callback" prompt auto-login/>
  </div>
</template>

<script>
import { googleTokenLogin } from "vue3-google-login"
import { decodeCredential } from "vue3-google-login";

export default {

  data() {
    return {
      userName: '',
      password: ''
    }
  },

  mounted() {
  // Verifica se há um token na URL ao montar o componente
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');

  if (token) {
    // Se encontrar um token na URL, armazene-o em localStorage e configure o cabeçalho do Axios
    localStorage.setItem('authToken', token);
    this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    // Redirecione para a HomePage
    this.$router.push('/HomePage');
  } else {
    // Caso contrário, verifique se já existe um token no localStorage
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      // Defina o token no cabeçalho de autorização para todas as requisições Axios
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    }
  }

  document.documentElement.style.overflow = 'hidden';
},
beforeUnmount() {
  document.documentElement.style.overflow = '';
},

  methods: {
    callback(response) {
      const userData = decodeCredential(response.credential)
      console.log("Handle the userData", userData)
    },
    logingoogle(){
      googleTokenLogin().then((response) => {
      console.log("Handle the response", response)
  })
    },
    async handleLogin() {
      try {
        const response = await this.$axios.post('http://localhost:5434/login', {
          userName: this.userName,
          password: this.password,
        });

        const { token } = response.data;

        // Armazene o token em localStorage
        localStorage.setItem('authToken', token);

        // Redirecione para a HomePage ou faça outras ações necessárias após o login
        this.$router.push('/HomePage');
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        // Trate o erro, exiba uma mensagem de erro, etc.
      }
    },
  },
};

</script>

<style>


#label-name,
#label-pass {
  color: #ffffff;
  font-size: 1em;
  margin: 0.5em 0 0.5em 0;
  font-family: "Nanum Gothic", sans-serif;
}

#name,
#pass {
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

#name:hover,
#pass:hover {
  border: 2px solid lightgrey;
  box-shadow: 0px 0px 20px -17px;
}

#name:active,
#pass:active {
  transform: scale(0.99);
}

#name:focus,
#pass:focus {
  border: 1px solid grey;
}

#logo {
  z-index: -1;
}

.container-login {
  display: flex;
  flex-direction: column;
  margin-left: 12em;
  height: 100vh;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
}

h1 {
  color: #ffffff;
  font-size: 7em;
}

span {
  color: #FF5C00;
}


#micro-google img {
  width: 30px;
  height: auto;
}

#micro-google a{
  background-color: #555555;
  color: #ffffff;
  padding: 0.5em 1em 0.5em 1em;
  border-radius: 5px;
  font-weight: bold;
}

.button-login {
  margin-top: 1em;
  align-items: center;
  appearance: none;
  background-color: #ff8818;
  border-radius: 5px;
  border-width: 0;
 /*box-shadow: rgba(255, 157, 0, 0.2) 0 2px 4px, rgba(66, 55, 35, 0.15) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;*/
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  width: 180px;
  height: 40px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  font-weight: bold;
}

.button-login:hover {
  box-shadow: rgba(255, 255, 255, 0.278) 0 4px 8px, rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-1px);
}

.button-login:active {
  box-shadow: #ffa347 0 3px 7px inset;
  transform: translateY(0.80px);
}
</style>