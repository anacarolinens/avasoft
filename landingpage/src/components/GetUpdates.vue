<template>
    <div id="get-updates" class="text-center mt-28">
        <h1 class="mb-16 font-medium text-3xl relative">
            <span class="relative inline-block">Receba</span> atualizações do sistema em seu e-mail
        </h1>
        <div class="flex justify-center">
            <input type="text" class="input-field rounded px-4 py-2 text-sm h-14"
                placeholder="Digite seu email aqui...">
        </div>
        <div class="flex justify-center mt-10">
            <button class="ml-5 bg-[#FF8139] px-4 lg:px-6 py-3 text-white rounded-md hover:bg-[#FF5C00]">Inscreva-se</button>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.text-center {
    text-align: center;
}

.input-field {
    width: 450px;
    border: 2px solid #E1E1E1;
    padding-left: 20px; 
    padding-right: 20px; 
}

.font-medium > span::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background-color: #FF8139;
}
</style>
