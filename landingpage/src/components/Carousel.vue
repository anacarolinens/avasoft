<template>
  <Carousel :itemsToShow="itemsToShow" :wrapAround="true" :transition="500" :breakpoints="breakpoints">
    <Slide v-for="slide in slides" :key="slide.id">
      <img :src="imagePath(slide.imageName)" alt="Slide Image" class="carousel__image rounded-lg" />
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel'

import slide1 from '@/assets/slide-1.png'
import slide2 from '@/assets/slide-2.png'
import slide3 from '@/assets/slide-3.png'
import slide4 from '@/assets/slide-4.png'
import slide5 from '@/assets/slide-5.png'
import slide6 from '@/assets/slide-6.png'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      itemsToShow: 2.5,
      slides: [
        { id: 1, imageName: slide1 },
        { id: 2, imageName: slide2 },
        { id: 3, imageName: slide3 },
        { id: 4, imageName: slide4 },
        { id: 5, imageName: slide5 },
        { id: 6, imageName: slide6 },
      ],
      breakpoints: {
        1200: {
          itemsToShow: 2.5
        },
        1024: {
          itemsToShow: 2
        },
        768: {
          itemsToShow: 1.5
        },
        640: {
          itemsToShow: 1.2
        },
        480: {
          itemsToShow: 1
        },
        320: {
          itemsToShow: 1
        },
        300: {
          itemsToShow: 1
        },
      }
    }
  },
  methods: {
    imagePath(imageName) {
      return imageName;
    }
  },
  mounted() {
    const prevButton = document.querySelector('.carousel__prev');
    const nextButton = document.querySelector('.carousel__next');
    const prevIcon = prevButton.querySelector('.carousel__icon');
    const nextIcon = nextButton.querySelector('.carousel__icon');
    prevIcon.style.fill = 'white';
    nextIcon.style.fill = 'white';
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
  transform: rotateY(0) scale(1);
}

.carousel__image {
  width: 100%;
  height: auto;
}

/* Media queries to adjust slide padding */
@media (max-width: 1024px) {
  .carousel__slide {
    padding: 4px;
    transform: none;
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .carousel__slide {
    padding: 3px;
  }
}

@media (max-width: 640px) {
  .carousel__slide {
    padding: 2px;
  }
}

@media (max-width: 480px) {
  .carousel__slide {
    padding: 1px;
  }
}
</style>
