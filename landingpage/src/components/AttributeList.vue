<template>
    <main>
        <div id="attributes" class="mt-20 flex justify-center">
            <img class="h-auto lg:w-auto" src="../assets/notebook.png" alt="Notebook com demonstração do">
        </div>

        <div class="flex flex-wrap justify-center text-center mt-16 mb-14" style="min-width: 320px;">
            <div v-for="feature in features" :key="feature.title" class="w-full feature-container mb-8"
                style="max-width: 200px;">
                <div @mouseover="toggleDescription(feature, true)" @mouseleave="toggleDescription(feature, false)"
                    class="feature-button">
                    <div class="flex flex-col items-center">
                        <div
                            :class="['w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center', {'w-24 h-24': feature.showDescription}]">
                            <img :src="imagePath(feature.src)" class="feature-icon">
                        </div>
                        <p
                            :class="['text-sm font-medium mt-4 text-base', clickedFeature === feature ? 'font-semibold text-[#FF8139]' : 'text-[#A7A7A7]']">
                            {{ feature.title }}
                        </p>
                    </div>
                </div>
                <div v-if="feature.showDescription" class="description-area">
                    <p class="mt-2 text-center">
                        {{ feature.description }}
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import simplifyImage from '@/assets/simplify.png';
import dynamicImage from '@/assets/dynamic.png';
import personalityImage from '@/assets/personality.png';
import visualizationImage from '@/assets/visualization.png';
import versatilityImage from '@/assets/versatility.png';

export default {
    data() {
        return {
            features: [
                {
                    title: 'Simplificação',
                    src: simplifyImage, 
                    description: 'Diga adeus aos cálculos manuais e planilhas complicadas com o Avasoft!',
                    showDescription: false
                },
                {
                    title: 'Dinamismo',
                    src: dynamicImage,
                    description: 'Realize avaliações antropométricas completas e precisas em minutos',
                    showDescription: false
                },
                {
                    title: 'Personalização',
                    src: personalityImage,
                    description: 'Um relatório digital personalizado com gráficos e dados específicos de um cliente',
                    showDescription: false
                },
                {
                    title: 'Visualização',
                    src: visualizationImage,
                    description: 'Acompanhe o progresso de forma visualmente atraente',
                    showDescription: false
                },
                {
                    title: 'Versatilidade',
                    src: versatilityImage,
                    description: 'Perfeito para profissionais de saúde, entusiastas do fitness e estudantes',
                    showDescription: false
                },
            ],
            clickedFeature: null
        };
    },
    methods: {
        toggleDescription(feature, show) {
            if (show) {
                this.features.forEach(f => {
                    f.showDescription = f === feature;
                });
                this.clickedFeature = feature;
            } else {
                feature.showDescription = false;
                this.clickedFeature = null;
            }
        },
        imagePath(fileName) {
            return fileName;
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
