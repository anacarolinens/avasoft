<template>
  <div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-96 md:h-120 overflow-hidden rounded-lg">
      <!-- Slides -->
      <div v-for="(slide, index) in slides" :key="index"
        :class="{ 'hidden': currentSlide !== index, 'duration-700 ease-in-out': true }" data-carousel-item>
        <img :src="slide" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          :alt="'Slide ' + (index + 1)">
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button v-for="(slide, index) in slides.length" :key="index" type="button"
        :class="{ 'w-3 h-3 rounded-full': true, 'bg-orange-500/50': currentSlide === index, 'bg-white': currentSlide !== index }"
        aria-current="true" :aria-label="`Slide ${index + 1}`" @click="currentSlide = index"></button>
    </div>
    <!-- Slider controls -->
    <button type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="prevSlide" data-carousel-prev>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/30 group-hover:bg-orange-500/50 group-focus:ring-4 group-focus:ring-orange-500/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-orange-500 dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 1 1 5l4 4" />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="nextSlide" data-carousel-next>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/30 group-hover:bg-orange-500/50 group-focus:ring-4 group-focus:ring-orange-500/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-orange-500 dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 9 4-4-4-4" />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const imageBasePath = '/src/assets/';
    const slides = [
      imageBasePath + 'slide-1.png',
      imageBasePath + 'slide-2.png',
      imageBasePath + 'slide-3.png',
      imageBasePath + 'slide-4.png',
    ];

    const currentSlide = ref(0);

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % slides.length;
    };

    const prevSlide = () => {
      currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1;
    };

    // Autoplay interval
    let autoplayInterval = null;
    const startAutoplay = () => {
      autoplayInterval = setInterval(nextSlide, 3000); // 3000ms interval
    };
    const stopAutoplay = () => {
      clearInterval(autoplayInterval);
    };

    // Start autoplay when component is mounted
    onMounted(startAutoplay);

    return {
      slides,
      currentSlide,
      nextSlide,
      prevSlide,
      startAutoplay,
      stopAutoplay
    };
  }
};
</script>

<style scoped></style>
