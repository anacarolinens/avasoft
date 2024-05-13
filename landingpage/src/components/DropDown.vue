<template>
  <div class="flex justify-center">
    <button v-if="isWindows"
      class="flex items-center justify-center bg-[#FF8139] px-6 py-3 text-white rounded-l-md hover:bg-[#FF5C00]">
      <span class="flex items-center">
        Baixar para Windows
        <img src="../assets/microsoft.png" alt="Ícone de download" class="h-5 w-5 ml-2">
      </span>
    </button>
    <button v-else-if="isMacOS"
      class="flex items-center justify-center bg-[#FF8139] px-6 py-3 text-white rounded-l-md hover:bg-[#FF5C00]">
      <span class="flex items-center">
        Baixar para macOS
        <img src="../assets/macos.png" alt="Ícone de download" class="h-5 w-5 ml-2">
      </span>
    </button>
    <button v-if="isLinux"
      class="flex items-center justify-center bg-[#FF8139] px-6 py-3 text-white rounded-l-md hover:bg-[#FF5C00]">
      <span class="flex items-center">
        Baixar para Linux
        <img src="../assets/linux.png" alt="Ícone de download" class="h-5 w-5 ml-2">
      </span>
    </button>
    <div class="relative">
      <div id="dropdown" class="dropdown absolute z-50 mt-12 w-max origin-top-right rounded-md shadow-lg right-0">
        <div class="bg-white rounded-md ring-1 ring-black ring-opacity-5">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" class="block px-8 py-2 text-sm text-gray-700 hover:bg-[#FFD6CE] hover:text-gray-900"
              role="menuitem">Baixar para Windows</a>
            <a href="#" class="block px-8 py-2 text-sm text-gray-700 hover:bg-[#FFD6CE] hover:text-gray-900"
              role="menuitem">Baixar para Linux</a>
            <a href="#" class="block px-8 py-2 text-sm text-gray-700 hover:bg-[#FFD6CE] hover:text-gray-900"
              role="menuitem">Baixar para MacOS</a>
          </div>
        </div>
      </div>
    </div>
    <button @click="toggleDropdown" class="ml-0.5 bg-[#FF8139] rounded-r-lg px-3 py-2 hover:bg-[#FF5C00]">
      <img src="../assets/seta.png" alt="Seta dropdown">
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const detectOS = () => {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Win")) {
    return { name: "Windows", isLinux: false };
  } else if (userAgent.includes("Mac")) {
    return { name: "MacOS", isLinux: false };
  } else if (userAgent.includes("Linux")) {
    return { name: "Linux", isLinux: true };
  } else {
    return { name: "Outro", isLinux: false };
  }
};

const os = detectOS();
const isWindows = ref(os.name === "Windows");
const isMacOS = ref(os.name === "MacOS");
const isLinux = ref(os.isLinux);

const toggleDropdown = () => {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
};

const closeDropdownOnOutsideClick = (event) => {
  const dropdown = document.getElementById("dropdown");
  if (!dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
};

</script>

<style scoped>
.dropdown {
  display: none;
}

.dropdown.hidden {
  display: block;
}
</style>
