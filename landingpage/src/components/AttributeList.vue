<template>
    <main>
        <div class="mt-20 flex justify-center">
            <img class="w-3/4" src="/src/assets/notebook.png" alt="Notebook com demonstração do">
        </div>

        <div class="flex justify-center space-x-24 text-center mt-12 mb-40" style="min-width: 800px;">
            <div v-for="feature in features" :key="feature.title" class="relative">
                <button @click="toggleDescription(feature)">
                    <div class="flex flex-col items-center">
                        <div class="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                            <img :src="feature.src" class="">
                        </div>
                        <p
                            :class="['text-sm font-medium mt-4', clickedFeature === feature ? 'text-[#FF8139]' : 'text-[#A7A7A7]']">
                            {{
                            feature.title }}
                        </p>
                    </div>
                </button>
                <p 
                    v-if="feature.showDescription" class="text-sm mt-2 max-w-xs text-center fade">
                    {{ feature.description}}
                </p>

            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            features: [
                {
                    title: 'Simplificação',
                    src: '/landingpage/public/simplify.png',
                    description: 'Diga adeus aos cálculos manuais e planilhas complicadas com o Avasoft!',
                    showDescription: false
                },
                {
                    title: 'Dinamismo',
                    src: '/landingpage/public/dynamic.png',
                    description: 'Realize avaliações antropométricas completas e precisas em minutos',
                    showDescription: false
                },
                {
                    title: 'Personalização',
                    src: '/landingpage/public/personality.png',
                    description: 'Um relatório digital personalizado com gráficos e dados específicos de um cliente',
                    showDescription: false
                },
                {
                    title: 'Visualização',
                    src: '/landingpage/public/visualization.png',
                    description: 'Acompanhe o progresso de forma visualmente atraente',
                    showDescription: false
                },
                {
                    title: 'Versatilidade',
                    src: '/landingpage/public/versatility.png',
                    description: 'Perfeito para profissionais de saúde, entusiastas do fitness e estudantes',
                    showDescription: false
                },
            ],
            clickedFeature: null
        };
    },
    methods: {
        toggleDescription(clickedFeature) {
            this.features.forEach(feature => {
                if (feature !== clickedFeature) {
                    feature.showDescription = false;
                }
            });
            clickedFeature.showDescription = !clickedFeature.showDescription;
            this.clickedFeature = clickedFeature.showDescription ? clickedFeature : null;
        }
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.max-w-xs {
    max-width: 250px;
}
</style>
