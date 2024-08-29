<template>
    <main>
      <div class="relative isolate overflow-hidden">
        <div class="mx-auto justify-center lg:flex flex-col items-center">
            <div>
                <AvaSoft></AvaSoft>
            </div>
            <div>
              <AttributeList></AttributeList>
            </div>
            <div>
              <SimplifyAva></SimplifyAva>
            </div>
            <div>
              <GetUpdates></GetUpdates>
            </div>
            <div>
              <DownloadHere></DownloadHere>
            </div>
          
         
        </div>
      </div>
    </main>
  </template>
  
<script setup>
import AvaSoft from "../components/AvaSoft.vue";
import AttributeList from "../components/AttributeList.vue";
import SimplifyAva from "../components/SimplifyAva.vue";
import GetUpdates from "../components/GetUpdates.vue";
import DownloadHere from '../components/DownloadHere.vue';
</script>
  
<style scoped>
 </style>
  