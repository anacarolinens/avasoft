<template>
    <ToastComponent v-if="showToast" :message="toastMessage" :type="toastType" />
    <div class="flex p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-x-6">
        <h3 class="font-bold text-gray-800" v-if="selectedAssessment">
            Edição da Avaliação {{ selectedAssessment.id_assessment }}
        </h3>

        <div v-if="selectedAssessment" class="p-4">
            <form @submit.prevent="updateAssessment">
                <div class="grid grid-cols-2 gap-4">
                    <label for="assessmentDate">Data da Avaliação:</label>
                    <p>{{ formatDate(selectedAssessment.assessmentDate) }}</p>

                    <label for="weight">Peso (kg):</label>
                    <input type="number" v-model="selectedAssessment.weight" id="weight" class="border p-2 rounded"
                        required />

                    <label for="height">Altura (cm):</label>
                    <input type="number" v-model="selectedAssessment.height" id="height" class="border p-2 rounded"
                        required />

                    <label for="method">Método:</label>
                    <select v-model="selectedAssessment.method" id="method" class="border p-2 rounded" required>
                        <option value="" disabled selected>Selecione o método</option>
                        <option value="Guedes">Guedes</option>
                        <option value="Pollock" disabled>Pollock</option>
                        <option value="Jackson & Pollock" disabled>Jackson & Pollock</option>
                        <option value="McArdle">McArdle</option>
                        <option value="Dados Livres">Dados Livres</option>
                    </select>
                </div>

                <h4 class="my-4 font-bold text-black">Circunferências (cm)</h4>
                <div class="grid grid-cols-2 gap-4">
                    <!-- Entradas para circunferências -->
                    <label for="neck">Pescoço:</label>
                    <input type="number" v-model="selectedAssessment.circumference.neck" id="neck"
                        class="border p-2 rounded" />

                    <label for="thorax">Tórax:</label>
                    <input type="number" v-model="selectedAssessment.circumference.thorax" id="thorax"
                        class="border p-2 rounded" />

                    <label for="waist">Cintura:</label>
                    <input type="number" v-model="selectedAssessment.circumference.waist" id="waist"
                        class="border p-2 rounded" />

                    <label for="abdomen">Abdômen:</label>
                    <input type="number" v-model="selectedAssessment.circumference.abdomen" id="abdomen"
                        class="border p-2 rounded" />

                    <label for="hip">Quadril:</label>
                    <input type="number" v-model="selectedAssessment.circumference.hip" id="hip"
                        class="border p-2 rounded" />

                    <label for="leftArm">Braço Esquerdo:</label>
                    <input type="number" v-model="selectedAssessment.circumference.leftArm" id="leftArm"
                        class="border p-2 rounded" />

                    <label for="rightArm">Braço Direito:</label>
                    <input type="number" v-model="selectedAssessment.circumference.rightArm" id="rightArm"
                        class="border p-2 rounded" />

                    <label for="leftForearm">Antebraço Esquerdo:</label>
                    <input type="number" v-model="selectedAssessment.circumference.leftForearm" id="leftForearm"
                        class="border p-2 rounded" />

                    <label for="rightForearm">Antebraço Direito:</label>
                    <input type="number" v-model="selectedAssessment.circumference.rightForearm" id="rightForearm"
                        class="border p-2 rounded" />

                    <label for="leftGlutealThigh">Coxa Esquerda:</label>
                    <input type="number" v-model="selectedAssessment.circumference.leftGlutealThigh"
                        id="leftGlutealThigh" class="border p-2 rounded" />

                    <label for="rightGlutealThigh">Coxa Direita:</label>
                    <input type="number" v-model="selectedAssessment.circumference.rightGlutealThigh"
                        id="rightGlutealThigh" class="border p-2 rounded" />

                    <label for="leftLeg">Perna Esquerda:</label>
                    <input type="number" v-model="selectedAssessment.circumference.leftLeg" id="leftLeg"
                        class="border p-2 rounded" />

                    <label for="rightLeg">Perna Direita:</label>
                    <input type="number" v-model="selectedAssessment.circumference.rightLeg" id="rightLeg"
                        class="border p-2 rounded" />

                    <label for="leftWrist">Punho Esquerdo:</label>
                    <input type="number" v-model="selectedAssessment.circumference.leftWrist" id="leftWrist"
                        class="border p-2 rounded" />

                    <label for="rightWrist">Punho Direito:</label>
                    <input type="number" v-model="selectedAssessment.circumference.rightWrist" id="rightWrist"
                        class="border p-2 rounded" />
                </div>

                <h4 class="my-4 font-bold text-black">Dobras Cutâneas (mm)</h4>
                <div class="grid grid-cols-2 gap-4">
                    <label for="triceps">Tríceps:</label>
                    <input type="number" v-model="selectedAssessment.skinfold.triceps" id="triceps"
                        class="border p-2 rounded" />

                    <label for="abdominal">Abdominal:</label>
                    <input type="number" v-model="selectedAssessment.skinfold.abdominal" id="abdominal"
                        class="border p-2 rounded" />

                    <label for="subscapular">Subescapular:</label>
                    <input type="number" v-model="selectedAssessment.skinfold.subscapular" id="subscapular"
                        class="border p-2 rounded" />

                    <label for="suprailiac">Supra-ilíaca:</label>
                    <input type="number" v-model="selectedAssessment.skinfold.suprailiac" id="suprailiac"
                        class="border p-2 rounded" />

                    <label for="thigh">Coxa:</label>
                    <input type="number" v-model="selectedAssessment.skinfold.thigh" id="thigh"
                        class="border p-2 rounded" />
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
            selectedAssessment: null,
            showToast: false,
            toastMessage: '',
            toastType: '',
        };
    },
    methods: {
        async fetchAssessmentById() {
            try {
                const id_assessment = this.$route.params.id;
                console.log('ID da avaliação:', id_assessment);// Assumindo que a rota contém o ID
                const response = await axios.get(`http://localhost:3000/assessments/${id_assessment}`);
                this.selectedAssessment = response.data;
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
                this.$router.go(-1); // Redirecionar após a atualização
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
    mounted() {
        this.fetchAssessmentById();
    },
};
</script>
