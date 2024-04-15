<template>
    <div class="text-center mb-15">
        <h1 class="mb-12 font-medium text-3xl">
            <span class="relative inline-block"> Simplificando </span> Avaliações
            Antropométricas
        </h1>
        <p class="mb-28">
            Explore a inovação em avaliações antropométricas. Com coleta de dados simplificada,<br>
            análises instantâneas e acompanhamento visual do progresso, o Avasoft é a solução <br>
            definitiva. Veja abaixo nossa plataforma em ação.
        </p>
      
    </div>
  <Carousel></Carousel>
</template>

<script setup>
import Carousel from '../components/Carousel.vue'

</script>

<style scoped>
.font-medium>span::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background-color: #FF8139;
}
</style>