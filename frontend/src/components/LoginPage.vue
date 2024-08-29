<template>
  <div class="container-login">

    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Kode+Mono:wght@400..700&family=Nanum+Gothic&display=swap">

    <header class="flex flex-col  xl:m-0" style="width: fit-content;">
      <h1 class="mt-16">AVA<span>SOFT</span></h1>
      <p class="text-center" style="color:#fff">Avaliação Antropometrica</p>
    </header>


    <form action="" id="login-form" class="" style="width: fit-content;">
      <div class="flex flex-col">
        <label for="name" id="label-name" class="">Nome</label>
        <input type="text" id="name" placeholder="" v-model="userName">

        <label for="pass" id="label-pass">Senha</label>
        <input type="password" id="pass" placeholder="" v-model="password">
      </div>

      <p class="text-end text-white pt-8"><a href="#">Esqueceu a senha?</a></p>

      <div class="flex justify-center">
        <button type="button" class="button-login" @click="handleLogin">LOGIN</button>
      </div>

      <div class="text-center text-white pt-11">
        <p>Não tem uma conta? <a href="#">Registre-se aqui!</a></p>
        <p class="pt-8">__________ OU __________</p>

        <div id="micro-google" class="flex justify-around pt-8">
          <a href="#" class="flex justify-around  rounded-md items-center w-40"><img src="../assets/img/google.png" alt="">Google</a>
          <a href="#" class="flex justify-around  rounded-md items-center w-40"><img src="../assets/img/microsoft.png" alt="">Microsoft</a>
        </div>
      </div>


    </form>

    <div class="flex justify-center"><img id="vitruvianwoman" src="../assets/img/vitruvianwoman.svg" alt="logo avasoft" class=" absolute bottom-0 right-0 z-0 xll:my-12 xl:my-0 lg:my-0"></div>


  </div>
</template>

<script>


export default {

  data() {
    return {
      userName: '',
      password: ''
    }
  },

  mounted() {

    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      // Defina o token no cabeçalho de autorização para todas as requisições Axios
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    }

    document.documentElement.style.overflow = 'hidden';
  },
  beforeUnmount() {
    document.documentElement.style.overflow = '';
  },



  methods: {
    async handleLogin() {
      try {
        const response = await this.$axios.post('http://localhost:3000/login', {
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

<style scoped>


#label-name,
#label-pass {
  color: #ffffff;
  font-size: 1em;
  margin: 1em 0 1em 0;
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
  transform: scale(0.95);
}

#name:focus,
#pass:focus {
  border: 2px solid grey;
}

#vitruvianwoman {
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
  width: 50px;
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
  margin-top: 2em;
  align-items: center;
  appearance: none;
  background-color: #ff8818;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(255, 157, 0, 0.2) 0 2px 4px, rgba(66, 55, 35, 0.15) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  width: 180px;
  height: 80px;
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

.button-login:focus {
  box-shadow: #af6a0a 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-login:hover {
  box-shadow: rgba(255, 255, 255, 0.278) 0 4px 8px, rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-login:active {
  box-shadow: #ffa347 0 3px 7px inset;
  transform: translateY(2px);
}
</style>