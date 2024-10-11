<template>
  <div class="container mx-auto md:px-20">
    <h1 class="text-2xl sm:text-3xl md:text-4xl text-center mt-5 mb-5 font-bold">
      Bem vindo (Profissional de Saude)
    </h1>

    <form class="form">
      <label for="search">
          <input required="" autocomplete="off" placeholder="search your chats" id="search" type="text">
          <div class="icon">
              <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-on">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
              <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-off">
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
          </div>
          <button type="reset" class="close-btn">
              <svg viewBox="0 0 20 20" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
              </svg>
          </button>
      </label>
    </form>

    <div id="buttons" class="flex flex-row md:flex-row justify-center mt-5 gap-4">
      <a href="" id="btnnew" class="w-full md:w-auto text-center">+ Nova avaliação</a>
      <router-link to="/PatientRegister" id="btnnew" class="w-full md:w-auto text-center">+ Novo Paciente</router-link>
      <a href="" id="btnnew" class="w-full md:w-auto text-center">+ Nova Prescrição</a>
    </div>

    <div class="container mx-auto mt-10">
      <h1 class="text-xl md:text-2xl font-bold mb-4">HISTÓRICO DE AVALIAÇÕES</h1>

      <div class="overflow-x-auto">
        <table class="min-w-full" style="border-collapse: separate; border-spacing: 0 20px;">
          <thead>
            <tr class="bg-orange-500 text-white">
              <th class="py-2 px-4 text-start rounded-l-lg">NOME</th>
              <th class="py-2 px-4 text-start">DATA</th>
              <th class="py-2 px-4 text-start">AVALIAÇÕES</th>
              <th class="py-2 px-4 text-center rounded-r-lg">AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-700 text-white">
              <td class="py-2 px-4 rounded-l-lg">Anderson Dantas Santos</td>
              <td class="py-2 px-4">12/08/2024</td>
              <td class="py-2 px-4">1</td>
              <td class="py-2 px-4 text-center rounded-r-lg">
                <button class="bg-blue-500 text-white py-1 px-2 rounded mr-2">Editar</button>
                <button class="bg-red-500 text-white py-1 px-2 rounded">Excluir</button>
              </td>
            </tr>
            <tr class="bg-gray-700 text-white">
              <td class="py-2 px-4 rounded-l-lg">Felipe dos Santos</td>
              <td class="py-2 px-4">15/07/2024</td>
              <td class="py-2 px-4">1</td>
              <td class="py-2 px-4 text-center rounded-r-lg">
                <button class="bg-blue-500 text-white py-1 px-2 rounded mr-2">Editar</button>
                <button class="bg-red-500 text-white py-1 px-2 rounded">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  
  

  
</template>

<script>
export default {
  components: {},
};

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar o Preline para aplicar o comportamento overlay e animações
    window.hsOverlay?.init();
  });
</script>

<style>
#btnnew {
  background-color: #707070;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
}

@media (min-width: 768px) {
  #btnnew {
    width: auto;
  }
}

.form {
  --input-bg: #FFf;
 /*  background of input */
  --padding: 1.5em;
  --rotate: 80deg;
 /*  rotation degree of input*/
  --gap: 2em;
  /*  gap of items in input */
  --icon-change-color: #15A986;
 /*  when rotating changed icon color */
  --height: 55px;
 /*  height */

  padding-inline-end: 1em;
 /*  change this for padding in the end of input */
  background: var(--input-bg);
  position: relative;
  border-radius: 4px;
}

.form label {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--height);
}

.form input {
  width: 100%;
  padding-inline-start: calc(var(--padding) + var(--gap));
  outline: none;
  background: none;
  border: 0;
}
/* style for both icons -- search,close */
.form svg {
  /* display: block; */
  color: #111;
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  position: absolute;
  height: 25px;
}
/* search icon */
.icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  display: flex;
  justify-content: center;
  align-items: center;
}
/* arrow-icon*/
.swap-off {
  transform: rotate(-80deg);
  opacity: 0;
  visibility: hidden;
}
/* close button */
.close-btn {
  /* removing default bg of button */
  background: none;
  border: none;
  right: calc(var(--padding) - var(--gap));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  padding: 0.1em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.3s;
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
}

.form input:focus ~ .icon {
  transform: rotate(var(--rotate)) scale(1.3);
}

.form input:focus ~ .icon .swap-off {
  opacity: 1;
  transform: rotate(-80deg);
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:focus ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .icon {
  transform: scale(1.3) rotate(var(--rotate))
}

.form input:valid ~ .icon .swap-off {
  opacity: 1;
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:valid ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .close-btn {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transition: 0s;
}
</style>
