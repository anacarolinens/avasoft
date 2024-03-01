<template>
  <div class="container">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Kode+Mono:wght@400..700&family=Nanum+Gothic&display=swap">

    <h1>AVA<span>SOFT</span></h1>

    <form action="" id="login-form">

      <div class="name-pass">
        <label for="name" id="label-name">NOME</label>
        <input type="text" id="name" placeholder="" v-model="name">

        <label for="pass" id="label-pass">SENHA</label>
        <input type="password" id="pass" placeholder="">

      </div>

      <!-- <button role="button" class="button-login" @click="handleLogin">LOGIN</button> -->
      <RouterLink to="/HomePage" role="button" class="button-login" @click="handleLogin">LOGIN</RouterLink>
    </form>

    <img src="../assets/vitruvianwoman.png" alt="">

  </div>
</template>
  
<script>

export default {

  mounted() {
    document.documentElement.style.overflow = 'hidden';
  },
  beforeUnmount() {
    document.documentElement.style.overflow = '';
  },

  methods: {
    handleLogin() {
      // Lógica de login aqui

      // Emite o evento loginSuccess para notificar o componente pai (App.vue) sobre o sucesso do login
      this.$emit('loginSuccess');
    }
  }
}
</script>
  
<style scoped>

.container {
  display: flex;
  flex-direction: column;
  margin-left: 5em;
  height: 100vh;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
}

h1 {
  
  color: #ffffff;
  font-size: 4em;
  align-self: center;
  margin-top: 1em;
}

span {
  color: #ff8818;
}

img {
  position: absolute;
  bottom: -2px;
  right: -2px;
  z-index: -1;
}

#login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  
}

#label-name,
#label-pass {
  width: 100%;
  margin-left: 1em;
  margin-bottom: 10px;
}

.name-pass {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

#name,
#pass {
  width: 100%; /* Alterado para ocupar 100% da largura do contêiner pai */
  max-width: 45vh; /* Adicionado um valor máximo */
  padding: 1em;
  border-radius: 5px;
  border: none;
  background-color: #ffffff;
  margin-bottom: 2em;
}

/* Adicionando regras de mídia para ajustes em telas menores */
@media screen and (max-width: 768px) {
  .container {
    margin-left: 1em; /* Reduzindo a margem para telas menores */
  }

  #name,
  #pass {
    max-width: 100%; /* Ocupa 100% da largura para telas menores */
  }
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
  color: #000000;
  cursor: pointer;
  display: inline-flex;
  width: 180px;
  height: 80px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  margin-left: 60px;
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


#pass,
#name {
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 1em;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
  transition: 300ms ease-in-out;
}

#pass:focus,
#name:focus {
  background-color: white;
  transform: scale(1.05);
  box-shadow: 13px 0px 20px #969696;
}
</style>