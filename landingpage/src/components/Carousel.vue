<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
    <Slide v-for="slide in slides" :key="slide.id">
      <img :src="imageBasePath + slide.imageName" alt="Slide Image" class="rounded-lg">
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      slides: [
        { id: 1, imageName: 'slide-1.png' },
        { id: 2, imageName: 'slide-2.png' },
        { id: 3, imageName: 'slide-3.png' },
        { id: 4, imageName: 'slide-4.png' },
        { id: 5, imageName: 'slide-5.png' },
        { id: 6, imageName: 'slide-6.png' },
      ]
    }
  },
  computed: {
    imageBasePath() {
      return '/src/assets/';
    }
  }
})
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
