<template>
    <div class="text-center mt-48 md:">
        <h1 class="mb-16 font-medium text-3xl relative">
            <span class="relative inline-block">Receba</span> atualizações do sistema em seu e-mail
        </h1>
        <div class="flex justify-center">
            <input type="text" class="input-field rounded px-4 py-2 text-sm h-14"
                placeholder="Digite seu email aqui...">
        </div>
        <div class="flex justify-center mt-10">
            <Button>Inscreva-se</Button>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
    components: {
        Button
    }
}
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
