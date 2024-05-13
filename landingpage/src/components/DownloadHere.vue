<template>
    <div class="relative isolate overflow-hidden mt-36 ">
        <div class="mx-auto justify-center lg:flex">
            <img src="../assets/notebook.png" alt="Notebook com demonstração do sistema"
                class="h-auto lg:w-auto w-2/3 lg:h-96 mx-auto">
            <div class="mx-auto lg:text-left lg:mx-0">
                <h1 class="mt-10 font-bold text-4xl text-center lg:text-left">Baixe aqui <br> <span
                        class="text-[#FF8139]">agora</span>!</h1>
                <p class="mt-6 mb-10 text-center lg:text-left">
                    Não perca tempo. baixe já em seu desktop, o novo aplicativo
                    que irá fazer você transformar a sua avaliação antropométrica
                    com facilidade e precisão.
                </p>
                <Button class="text-center lg:text-left flex justify-center">
                    Baixar agora
                    <img src="../assets/download.png" alt="Ícone de download" class="h-5 w-5 ml-2">
                </Button>
            </div>
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

<style scoped></style>
