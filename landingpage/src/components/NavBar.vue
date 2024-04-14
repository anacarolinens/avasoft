<template>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center">
                    <img class="h-15 md:h-12: w-auto" src="../assets/logo-avasoft.png" alt="Avasoft Company Logo" />
                </div>
                <div class="sm:ml-6 space-x-8  flex items-center sm:ml-auto">
                    <a href="#" class="relative">Home</a>
                    <a href="#" class="relative">Atributos</a>
                    <a href="#" class="relative">Avasoft</a>
                    <a href="#" class="relative">Contato</a>
                    <button class="flex items-center bg-[#FF8139] px-6 py-3 text-white rounded-md hover:bg-[#FF5C00]">
                        <span class="flex items-center">
                            Baixar agora
                            <img src="../assets/download.png" alt="Ícone de download" class="h-5 w-5 ml-2">
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
a.relative {
    position: relative;
}

a.relative::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(100% - 24px);
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s ease;
}

a.relative:hover::after {
    background-color: #FF8139; 
}  
</style>
