<template>
    <div class="relative isolate overflow-hidden mt-36">
        <div class="mx-auto justify-center lg:flex">
            <img src="../assets/notebook.png" alt="Notebook com demonstração do sistema"
                class="w-96 h-auto lg:w-auto lg:h-96 md:">
            <div class="mx-auto max-w-2xl">
                <!-- Adicionando a classe 'text-center' para alinhar o conteúdo ao centro -->
                <h1 class="mt-10 text-2xl font-bold tracking-tight sm:text-4xl">Baixe aqui <br> <span
                        class="text-[#FF8139]">agora</span>!
                </h1>
                <p class="mt-6 mb-10 items-start">
                    Não perca tempo. baixe já em seu desktop, o novo aplicativo
                    que irá fazer você transformar a sua avaliação antropométrica
                    com facilidade e precisão.
                </p>
                <Button>
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
