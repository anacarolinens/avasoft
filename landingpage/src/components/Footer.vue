<template>
    <!-- Footer -->
    <footer aria-labelledby="footer-heading" class="relative py-8 px-3 bg-[#FF8139]">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="flex flex-col gap-4">
                    <h3 class="text-white text-lg font-semibold">AVASOFT</h3>
                    <a href="#" class="text-white text-sm">Home</a>
                    <a href="#" class="text-white text-sm">Atributos</a>
                    <a href="#" class="text-white text-sm">Avasoft</a>
                    <a href="#" class="text-white text-sm">Baixar</a>
                </div>
                <div class="flex flex-col gap-4">
                    <h3 class="text-white text-lg font-semibold">CONTATO</h3>
                    <a href="#" class="text-white text-sm">+55 99 9999-9999</a>
                    <a href="#" class="text-white text-sm">contato.avasoft@gmail.com</a>
                    <a href="#" class="text-white text-sm">Rua Alguma Coisa, 81, Qualquer Lugar</a>
                </div>
            </div>
        </div>
    </footer>
    <div class="md:flex md:items-center md:justify-between bg-[#1E2021] md:px-8 px-4 py-3">
      <p class="text-sm text-gray-200 mb-4 md:mb-0 md:text-start text-center">
        &copy; {{ year }} <span>Avasoft</span> 
          <a href="#" class="inline-block ml-8">Configurações de Cookies</a> 
          <a href="#" class="inline-block ml-8">Política de Privacidade</a>   
          <a href="#" class="inline-block ml-8">Termos e Condições</a>  
      </p>
      <span class="flex gap-8 items-center justify-center">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img class="h-5 cursor-pointer" src="../assets/facebook.png" alt="Logo do Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img class="h-4 cursor-pointer" src="../assets/x-twitter.png" alt="Logo do X (antigo Twitter)" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img class="h-4 cursor-pointer" src="../assets/instagram.png" alt="Logo do Instagram" />
        </a>
        <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
          <img class="h-4 cursor-pointer" src="../assets/discord.png" alt="Logo do Discord" />
        </a>
      </span>
    </div>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  let year = new Date().getFullYear();
  </script>
  
  <style scoped></style>
  