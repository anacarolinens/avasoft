<template>
    <main>
        <div id="attributes" class="mt-20 flex justify-center">
            <img class="w-3/4" :src="imagePath('notebook.png')" alt="Notebook com demonstração do">
        </div>

        <div class="flex flex-wrap justify-center text-center mt-16 mb-28" style="min-width: 320px;">
            <div v-for="feature in features" :key="feature.title" class="w-full feature-container mb-8" style="max-width: 200px;">
                <button @click="toggleDescription(feature)" class="feature-button">
                    <div class="flex flex-col items-center">
                        <div :class="['w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center', {'w-24 h-24': feature.showDescription}]">
                            <img :src="imagePath(feature.src)" class="feature-icon">
                        </div>
                        <p
                            :class="['text-sm font-medium mt-4 text-base', clickedFeature === feature ? 'font-semibold text-[#FF8139]' : 'text-[#A7A7A7]']">
                            {{ feature.title }}
                        </p>
                    </div>
                </button>
                <div v-if="feature.showDescription" class="description-area">
                    <p class="mt-2 text-center">
                        {{ feature.description}}
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            imageBasePath: '/src/assets/',
            features: [
                {
                    title: 'Simplificação',
                    src: 'simplify.png', 
                    description: 'Diga adeus aos cálculos manuais e planilhas complicadas com o Avasoft!',
                    showDescription: false
                },
                {
                    title: 'Dinamismo',
                    src: 'dynamic.png',
                    description: 'Realize avaliações antropométricas completas e precisas em minutos',
                    showDescription: false
                },
                {
                    title: 'Personalização',
                    src: 'personality.png',
                    description: 'Um relatório digital personalizado com gráficos e dados específicos de um cliente',
                    showDescription: false
                },
                {
                    title: 'Visualização',
                    src: 'visualization.png',
                    description: 'Acompanhe o progresso de forma visualmente atraente',
                    showDescription: false
                },
                {
                    title: 'Versatilidade',
                    src: 'versatility.png',
                    description: 'Perfeito para profissionais de saúde, entusiastas do fitness e estudantes',
                    showDescription: false
                },
            ],
            clickedFeature: null
        };
    },
    methods: {
        toggleDescription(clickedFeature) {
            if (this.clickedFeature === clickedFeature) {
                this.clickedFeature.showDescription = !this.clickedFeature.showDescription;
            } else {
                this.features.forEach(feature => {
                    if (feature !== clickedFeature) {
                        feature.showDescription = false;
                    }
                });
                clickedFeature.showDescription = true;
                this.clickedFeature = clickedFeature;
            }
        },
        imagePath(fileName) {
            return this.imageBasePath + fileName;
        },
        closeDescriptionOnOutsideClick(event) {
            if (!event.target.closest('.feature-container')) {
                this.features.forEach(feature => {
                    feature.showDescription = false;
                });
                this.clickedFeature = null;
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.closeDescriptionOnOutsideClick);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.closeDescriptionOnOutsideClick);
    }
};
</script>

<style scoped>
.feature-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px; 
    margin-bottom: 64px;
    width: 258px;
}

.feature-button {
    width: 100%;
    text-align: center;
}

.description-area {
    padding: 10px;
    text-align: center;
}

.feature-icon {
    width: 35%;
}
</style>
