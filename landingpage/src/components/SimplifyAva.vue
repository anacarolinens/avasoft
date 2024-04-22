<template>
    <div id="avasoft" class="text-center mb-15">
        <h1 class="mb-12 font-medium text-3xl">
            <span class="relative inline-block"> Simplificando </span> Avaliações
            Antropométricas
        </h1>
        <p class="mb-28 md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto" style="white-space: pre-line;">
            Explore a inovação em avaliações antropométricas. Com coleta de dados simplificada,
            análises instantâneas e acompanhamento visual do progresso, o Avasoft é a solução
            definitiva. Veja abaixo nossa plataforma em ação.
        </p>
    <Carousel></Carousel>
    </div>
   
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