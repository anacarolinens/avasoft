<template>
  <div class="carousel relative flex items-center justify-center">
    <!-- Controles -->
    <button @click="prevSlide" class="control-btn left-btn absolute left-0 top-0 bottom-0 flex items-center">
      <img src="../assets/next-e.png" alt="Left Arrow" class="w-8 h-8">
    </button>

    <!-- Slide Principal Menor -->
    <div class="main-slide w-45">
      <img :src="mainSlides[0]" alt="Main Slide" class="w-full h-auto">
    </div>

    <!-- Slide Principal Maior -->
    <div class="main-slide w-45">
      <img :src="mainSlides[1]" alt="Main Slide" class="w-full h-auto">
    </div>

    <!-- Slides Menores -->
    <div class="side-slides flex justify-between w-75">
      <div v-for="(slide, index) in sideSlides" :key="index" class="w-75">
        <img :src="slide" alt="Side Slide" class="w-full h-auto">
      </div>
    </div>

    <!-- Controles -->
    <button @click="nextSlide" class="control-btn right-btn absolute right-0 top-0 bottom-0 flex items-center">
      <img src="../assets/next-d.png" alt="Right Arrow" class="w-8 h-8">
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const imageBasePath = '/src/assets/';
    const mainSlides = [
      imageBasePath + "slide-1.png", // Slide principal menor
      imageBasePath + "slide-2.png", // Slide principal maior
    ];

    // Definindo slides menores
    const sideSlides = [
      imageBasePath + "slide-3.png",
      imageBasePath + "slide-4.png",
    ];

    const currentSlide = ref(0);

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % sideSlides.length;
    };

    const prevSlide = () => {
      currentSlide.value = currentSlide.value === 0 ? sideSlides.length - 1 : currentSlide.value - 1;
    };

    return {
      mainSlides,
      sideSlides,
      currentSlide,
      nextSlide,
      prevSlide
    };
  }
};
</script>

<style scoped>
</style>
