<template>
  <header class="transition-transform duration-300" :class="{ 'ml-64': menuOpen }">
    <NavBarPatient @toggle-menu="toggleMenu" :menuOpen="menuOpen" />
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import NavBarPatient from "./NavBarPatient.vue";

const props = defineProps({
  menuOpen: Boolean
});

const emit = defineEmits(['toggle-menu']);

function toggleMenu() {
  emit('toggle-menu');
}
</script>

<style lang="scss" scoped></style>