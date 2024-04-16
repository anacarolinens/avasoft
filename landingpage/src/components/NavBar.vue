<template>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center">
            <div class="flex flex-1 items-center justify-center">
                <div class="flex flex-shrink-0 items-center">
                    <img class="h-15 md:h-12: w-auto" src="../assets/logo-avasoft.png" alt="Avasoft Company Logo" />
                </div>
                <div class="sm:ml-6 space-x-8  flex items-center sm:ml-auto">

                    <ul class="md:flex md:items-center" >
                        <li class="md:mx-4" v-for="link in Links">
                            <a :href="link.link" class="relative">
                                {{ link.name }}
                            </a>
                        </li>
                    </ul>
                    

                    <Button>
                        Baixar agora
                        <img src="../assets/download.png" alt="Ícone de download" class="h-5 w-5 ml-2">
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
    components: {
        Button
    },

    setup() {
        let Links = [
            { name: 'Home', link: '/' },
            { name: 'Atributos', link: '/atributos' },
            { name: 'Avasoft', link: '/avasoft' },
            { name: 'Contato', link: '/contato' },
        ]

        return {
            Links
        }
    }
}


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
