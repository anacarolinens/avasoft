<template>
  <div class="container mx-auto md:px-20">
    <h1 class="text-2xl sm:text-3xl md:text-4xl text-center mt-5 mb-5 font-bold">
      Bem vindo (Profissional de Saude)
    </h1>

    <form class="flex justify-center w-full max-w-md mx-auto mb-5">
      <label for="search" class="relative w-full">
        <input required autocomplete="off" placeholder="Pesquise por suas consultas..." id="search" type="text"
          class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-500">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </div>
        <button type="reset" class="absolute right-2 top-2 text-gray-500 hover:text-gray-700">
          <svg viewBox="0 0 20 20" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              fill-rule="evenodd"></path>
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
</template>

<script>
export default {
  components: {},
};
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
</style>
