<template>
  <div class="justify-center mx-auto">
    <Header></Header>
    <main class="py-4 px-2 max-w-7xl mb-12 mx-auto">
      <div class="relative isolate overflow-hidden">
        <div class="mx-auto justify-center lg:flex flex-col items-center">
          <AvaSoft></AvaSoft>
          <AttributeList></AttributeList>
          <SimplifyAva></SimplifyAva>
          <GetUpdates></GetUpdates>
          <DownloadHere></DownloadHere>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import AvaSoft from "../components/AvaSoft.vue";
import AttributeList from "../components/AttributeList.vue";
import SimplifyAva from "../components/SimplifyAva.vue";
import GetUpdates from "../components/GetUpdates.vue";
import DownloadHere from '../components/DownloadHere.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>
  
<style scoped>
 </style>
  