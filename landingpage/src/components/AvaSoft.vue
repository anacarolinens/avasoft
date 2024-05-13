<template>
  <main id="home" class="flex justify-center items-center">
    <!-- Hero section -->
    <div class="text-center ">
      <h1
        class="text-7xl font-bold mb-12 mt-40 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 lg:mb-10 xl:mb-12 mt-20 md:mt-24 lg:mt-32 xl:mt-40">
        <p>SIMPLES, INTUITIVO E</p>
        <p>
          <span class="text-[#FF8139]">EFICIENTE</span>, É AVA<span class="text-[#FF8139]">SOFT</span>
        </p>
      </h1>
      <p class="mb-12 md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto" style="white-space: pre-line;">
        O Avasoft simplifica suas avaliações antropométricas,
        coletando e armazenando dados dos alunos ao longo
        do tempo. Com gráficos intuitivos, oferecemos resultados
        comparativos, facilitando a visualização da
        evolução dos alunos.
      </p>

      <DropDown />
    </div>
  </main>
</template>

<script>
import DropDown from "./DropDown.vue";

export default {
  components: {
    DropDown,
  },
};
</script>
