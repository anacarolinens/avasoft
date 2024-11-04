<template>
    <ToastComponent v-if="showToast" :message="toastMessage" :type="toastType" />
    <div class="flex p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-x-6">
        
        <div class="w-3/3">
            <h3 class="font-bold text-gray-800" v-if="selectedAssessment">
            Edição da Avaliação {{ selectedAssessment.id_assessment }}
        </h3>
            <div v-if="selectedAssessment" class="p-4">
                <form @submit.prevent="updateAssessment">
                    <div class="mb-4 flex space-x-4">
                        <div class="w-1/2">
                            <label for="weight" class="block text-sm font-medium text-gray-700">Peso (kg)</label>

                            <input class="mt-1 p-2 w-full border-gray-300 rounded-md" type="number" min="0"
                                v-model="selectedAssessment.weight" id="weight" required />
                        </div>
                        <div class="w-1/2">
                            <label for="altura" class="block text-sm font-medium text-gray-700">Altura (cm)</label>

                            <input type="number" min="0" v-model="selectedAssessment.height" id="height"
                                class="mt-1 p-2 w-full border-gray-300 rounded-md" required />
                        </div>
                    </div>
                    <!-- Seleção do Método de Avaliação -->
                    <div class="mb-4">
                        <label for="method" class="block text-sm font-medium text-gray-700" >Método de
                            Avaliação</label>
                        <select v-model="selectedAssessment.method" id="method"
                            class="mt-1 p-2 w-full border-gray-300 rounded-md" disabled >
                            <option value="" disabled selected>Selecione o método</option>
                            <option value="Guedes">Guedes</option>
                            <option value="Pollock" disabled>Pollock</option>
                            <option value="Jackson & Pollock" disabled>Jackson & Pollock</option>
                            <option value="McArdle">McArdle</option>
                            <option value="Dados Livres">Dados Livres</option>
                        </select>
                    </div>
                    <!-- Dobras Cutâneas -->
                    <legend class="text-lg font-medium text-gray-700">Dobras Cutâneas (mm)</legend>
                    <div v-if="selectedAssessment && selectedAssessment.skinfold"  class="grid grid-cols-3 gap-4">
                        <div v-for="(value, key) in skinfoldData" :key="key">
                            <label :for="key" class="block text-sm font-medium">{{ traduzirDobrasCutaneas(key)
                                }}</label>
                            <input v-model="selectedAssessment.skinfold[key]"
                                :disabled="!camposNecessarios.includes(key)"
                                :class="{ 'disabled-input': !camposNecessarios.includes(key) }" type="number"
                                class="mt-1 p-2 w-full border-gray-300 rounded-md" min="0"/>
                        </div>
                    </div>

                    <!-- Circunferências -->
                    <legend class="text-lg font-medium text-gray-700 mt-4">Circunferências (cm)</legend>
                    <div v-if="selectedAssessment && selectedAssessment.skinfold" class="grid grid-cols-3 gap-4">
                        <div v-for="(value, key) in circumferenceData" :key="key">
                            <label :for="key" class="block text-sm font-medium">{{ traduzirCircunferencia(key)
                                }}</label>
                            <input v-model="selectedAssessment.circumference[key]"
                                :disabled="!camposNecessarios.includes(key)"
                                :class="{ 'disabled-input': !camposNecessarios.includes(key) }" type="number"
                                class="mt-1 p-2 w-full border-gray-300 rounded-md" min="0" />
                        </div>
                    </div>



                    <div class="flex justify-end items-center gap-x-2 py-3">
                        <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Salvar Alterações
                        </button>
                        <button @click="goBack" type="button"
                            class="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
            <div v-else>
                <p>Carregando dados da avaliação...</p>
            </div>
        </div>



    </div>
</template>

<script>
import axios from 'axios';
import ToastComponent from '../components/ToastNotification.vue'
export default {
    name: 'EditAssessment',
    components: {
        ToastComponent,
    },
    data() {
        return {
            selectedAssessment: {},
            showToast: false,
            toastMessage: '',
            toastType: '',
            camposNecessarios: [],
            circumferenceData: {
                neck: null,
                thorax: null,
                shoulderBlade: null,
                waist: null,
                abdomen: null,
                hip: null,
                leftWrist: null,
                rightWrist: null,
                leftArm: null,
                rightArm: null,
                leftContractedArm: null,
                rightContractedArm: null,
                leftForearm: null,
                rightForearm: null,
                leftGlutealThigh: null,
                rightGlutealThigh: null,
                leftMedialThigh: null,
                rightMedialThigh: null,
                leftLeg: null,
                rightLeg: null,
                leftAnkle: null,
                rightAnkle: null,
            },
            skinfoldData: {
                triceps: null,
                axillary: null,
                abdominal: null,
                thigh: null,
                calf: null,
                subscapular: null,
                suprailiac: null,
                pectoral: null,
                bicep: null,
            },
        };
    },
    methods: {
        traduzirCircunferencia(key) {
            const traducoes = {
                neck: 'Pescoço',
                thorax: 'Tórax',
                shoulderBlade: 'Ombro',
                waist: 'Cintura',
                abdomen: 'Abdômen',
                hip: 'Quadril',
                leftWrist: 'Pulso Esquerdo',
                rightWrist: 'Pulso Direito',
                leftArm: 'Braço Esquerdo',
                rightArm: 'Braço Direito',
                leftContractedArm: 'Braço Contraído Esquerdo',
                rightContractedArm: 'Braço Contraído Direito',
                leftForearm: 'Antebraço Esquerdo',
                rightForearm: 'Antebraço Direito',
                leftGlutealThigh: 'Coxa Glútea Esquerda',
                rightGlutealThigh: 'Coxa Glútea Direita',
                leftMedialThigh: 'Coxa Medial Esquerda',
                rightMedialThigh: 'Coxa Medial Direita',
                leftLeg: 'Perna Esquerda',
                rightLeg: 'Perna Direita',
                leftAnkle: 'Tornozelo Esquerdo',
                rightAnkle: 'Tornozelo Direito',
            };
            return traducoes[key] || key;

        },
        traduzirDobrasCutaneas(key) {
            const traducoes = {
                triceps: 'Tríceps',
                axillary: 'Axilar',
                abdominal: 'Abdominal',
                thigh: 'Coxa',
                calf: 'Panturrilha',
                subscapular: 'Subescapular',
                suprailiac: 'Suprailíaca',
                pectoral: 'Peitoral',
                bicep: 'Bíceps',
            };
            return traducoes[key] || key;
        },
        atualizarCamposNecessarios() {
            const metodo = this.selectedAssessment.method;
            if (metodo === 'Guedes') {
                this.camposNecessarios = ['triceps', 'suprailiac', 'abdominal'];
            } else if (metodo === 'Pollock') {
                this.camposNecessarios = ['triceps', 'suprailiac', 'abdominal', 'thigh', 'pectoral'];
            } else if (metodo === 'Jackson & Pollock') {
                this.camposNecessarios = ['triceps', 'subscapular', 'axillary', 'abdominal', 'thigh', 'suprailiac', 'pectoral'];
            } else if (metodo === 'McArdle') {
                this.camposNecessarios = ['triceps', 'subscapular', 'suprailiac', 'abdominal', 'thigh'];
            } else if (metodo === 'Dados Livres') {
                this.camposNecessarios = [
                    ...Object.keys(this.selectedAssessment.skinfold || {}),
                    ...Object.keys(this.selectedAssessment.circumference || {})
                ];
            } else {
                this.camposNecessarios = [
                    ...Object.keys(this.selectedAssessment.skinfold || {}),
                    ...Object.keys(this.selectedAssessment.circumference || {})
                ];
            }
        },

        async fetchAssessmentById() {
            try {
                const id_assessment = this.$route.params.id;
                console.log('ID da avaliação:', id_assessment);
                const response = await axios.get(`http://localhost:3000/assessments/${id_assessment}`);
                this.selectedAssessment = response.data;
                // Atualiza os campos necessários após carregar os dados da avaliação
                this.atualizarCamposNecessarios();
                this.selectedAssessment = response.data;
        this.selectedAssessment.skinfold = this.selectedAssessment.skinfold || {};
        this.selectedAssessment.circumference = this.selectedAssessment.circumference || {};
            } catch (error) {
                console.error('Erro ao buscar avaliação:', error);
            }
        },
        async updateAssessment() {
            try {
                const id_assessment = this.selectedAssessment.id_assessment;
                const circumferenceData = {
                    neck: this.selectedAssessment.circumference.neck,
                    thorax: this.selectedAssessment.circumference.thorax,
                    waist: this.selectedAssessment.circumference.waist,
                    abdomen: this.selectedAssessment.circumference.abdomen,
                    hip: this.selectedAssessment.circumference.hip,
                    leftArm: this.selectedAssessment.circumference.leftArm,
                    rightArm: this.selectedAssessment.circumference.rightArm,
                    leftForearm: this.selectedAssessment.circumference.leftForearm,
                    rightForearm: this.selectedAssessment.circumference.rightForearm,
                    leftGlutealThigh: this.selectedAssessment.circumference.leftGlutealThigh,
                    rightGlutealThigh: this.selectedAssessment.circumference.rightGlutealThigh,
                    leftLeg: this.selectedAssessment.circumference.leftLeg,
                    rightLeg: this.selectedAssessment.circumference.rightLeg,
                    leftWrist: this.selectedAssessment.circumference.leftWrist,
                    rightWrist: this.selectedAssessment.circumference.rightWrist,
                };

                const skinfoldData = {
                    triceps: this.selectedAssessment.skinfold.triceps,
                    abdominal: this.selectedAssessment.skinfold.abdominal,
                    subscapular: this.selectedAssessment.skinfold.subscapular,
                    suprailiac: this.selectedAssessment.skinfold.suprailiac,
                    thigh: this.selectedAssessment.skinfold.thigh,
                };
                const dataToUpdate = {
                    id_patient: this.selectedAssessment.id_patient,
                    assessmentDate: this.selectedAssessment.assessmentDate,
                    weight: this.selectedAssessment.weight,
                    height: this.selectedAssessment.height,
                    method: this.selectedAssessment.method,
                    circumferenceData, // Incluir dados de circunferência
                    skinfoldData, // Incluir dados de dobras cutâneas
                    gender: this.selectedAssessment.gender,
                    age: this.selectedAssessment.age,
                    dateRecorded: this.selectedAssessment.dateRecorded
                };

                console.log('Dados enviados para atualização:', dataToUpdate); // Adicione um log para verificar os dados
                const response = await axios.put(`http://localhost:3000/assessments/${id_assessment}`, dataToUpdate);

                console.log('Resposta do servidor:', response.data); // Adicione um log para verificar a resposta

                this.showToast = true;
                this.toastMessage = 'Avaliação atualizada com sucesso!';
                this.toastType = 'success';
                // Redirecionar após a atualização
            } catch (error) {
                console.error('Erro ao atualizar avaliação:', error);
                this.showToast = true;
                this.toastMessage = 'Erro ao atualizar avaliação.';
                this.toastType = 'error';
            }
        },
        goBack() {
            this.$router.go(-1);
        },
        formatDate(date) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            return new Date(date).toLocaleDateString('pt-BR', options);
        }
    },
    watch: {
        'selectedAssessment.method': 'atualizarCamposNecessarios',
    },
    mounted() {
        this.atualizarCamposNecessarios();
        this.fetchAssessmentById();
    },
};
</script>
