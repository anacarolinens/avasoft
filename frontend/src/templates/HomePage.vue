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
      <a href="" id="btnnew" class="w-full md:w-auto text-center">+ Novo Paciente</a>
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

  <div class="text-center">
    <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-danger-alert" data-hs-overlay="#hs-danger-alert">
      Open modal
    </button>
  </div>
  
  <div id="hs-danger-alert" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto" role="dialog" tabindex="-1" aria-labelledby="hs-danger-alert-label">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
      <div class="relative flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden">
        <div class="absolute top-2 end-2">
          <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-danger-alert">
            <span class="sr-only">Close</span>
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
  
        <div class="p-4 sm:p-10 overflow-y-auto">
          <div class="flex gap-x-4 md:gap-x-7">
            <!-- Icon -->
            <span class="shrink-0 inline-flex justify-center items-center size-[46px] sm:w-[62px] sm:h-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500">
              <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </span>
            <!-- End Icon -->
  
            <div class="grow">
              <h3 id="hs-danger-alert-label" class="mb-2 text-xl font-bold text-gray-800">
                Delete Personal Account
              </h3>
              <p class="text-gray-500">
                Permanently remove your Personal Account and all of its contents from the Vercel platform. This action is not reversible, so please continue with caution.
              </p>
            </div>
          </div>
        </div>
  
        <div class="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t">
          <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50" data-hs-overlay="#hs-danger-alert">
            Cancel
          </button>
          <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Delete personal account
          </a>
        </div>
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
