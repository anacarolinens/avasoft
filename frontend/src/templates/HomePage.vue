<template>

<div class="container">

  <h1 class="text-4xl text-center mt-5 mb-5 font-bold">Bem vindo (Profissional de Saude)</h1>

<form class="form">
    <label for="search">
        <input required="" autocomplete="off" placeholder="Pesquise por suas consultas..." id="search" type="text">
        <div class="icon">
            <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-on">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
            <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="swap-off">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
            <button type="reset" class="close-btn">
                <svg viewBox="0 0 20 20" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    </label>
</form>

<div id="buttons" class="flex justify-center mt-5 gap-12">
    <a href="" id="btnnew">+ Nova avaliação</a>
    <a href="" id="btnnew">+ Novo Paciente</a>
    <a href="" id="btnnew">+ Nova Prescrição</a>
</div>

<div class="container mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4">HISTORICO DE AVALIAÇÕES</h1>
  
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

</template>

<script>

export default {
  components: {

  },

}
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
}
</style>