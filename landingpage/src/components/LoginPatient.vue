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
  
  
  </script>
  
  <style scoped>

  </style>