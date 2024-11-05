<template>
    <div class="container mx-auto mt-10">
        <h1 class="text-3xl text-white mb-16 mt-10 text-center">HISTORICO DE AVALIAÇÕES</h1>
        
        <div class="flex justify-center items-center">
            <table class="w-3/4 border-collapse rounded" style="border-collapse: separate; border-spacing: 0 6px;">
                <thead>
                    <tr class="rounded-t-lg">
                        <th class="bg-[#FF8139] text-white py-3 px-6 text-center rounded-tl-lg">NOME</th>
                        <th class="bg-[#FF8139] text-white py-3 px-6 text-center">DATA</th>
                        <th class="bg-[#FF8139] text-white py-3 px-6 text-center rounded-tr-lg">AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(avaliacao, index) in avaliacoes" :key="index" class="border-b border-gray-600 text-center">
                        <td :class="['py-3 px-6 text-white', { 'rounded-bl-lg': index === avaliacoes.length - 1 }]">{{ avaliacao.nome }}</td>
                        <td class="py-3 px-6 text-white">{{ avaliacao.data }}</td>
                        <td :class="['py-3 px-6', { 'rounded-br-lg': index === avaliacoes.length - 1 }]">
                            <div class="flex justify-center gap-4">
                                <button class="w-5 h-5" @click="toggleCheckbox(index)">
                                    <img :src="avaliacao.checked ? checkedImg : checkboxImg" alt="Checkbox Button" class="w-full h-full object-contain" />
                                </button>
                                <button class="w-5 h-5">
                                    <img :src="downloadImg" alt="Download Button" class="w-full h-full object-contain" />
                                </button>
                                <button class="w-6 h-6">
                                    <img :src="viewImg" alt="View Button" class="w-full h-full object-contain" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
        <!-- Botões -->
        <div class="flex flex-col sm:flex-row items-end sm:space-x-4 mt-16 mx-auto w-3/4 justify-end">
            <button type="button" class="w-full sm:w-auto min-w-[200px] h-12 px-4 py-3 bg-transparent text-white border border-white rounded">
                Cancelar
            </button>
            <button type="submit" class="w-full sm:w-auto min-w-[200px] h-12 bg-[#FF8139] text-white p-3 rounded">
                Download
            </button>
        </div>    
    </div>
</template>

<script>
import axios from '../plugins/config';
import checkedImg from '../assets/checked.png';
import checkboxImg from '../assets/checkbox.png';
import downloadImg from '../assets/download2.png';
import viewImg from '../assets/visualization.png';

export default {
    data() {
        return {
            avaliacoes: [],
            checkedImg,
            checkboxImg,
            downloadImg,
            viewImg
        };
    },
    async mounted() {
        const userId = localStorage.getItem('userId');
        if (userId) {
            try {
                const userResponse = await axios.get(`/users/${userId}`);
                const userData = userResponse.data.user;
                const patientId = userData.patient?.id_patient;
                if (patientId) {
                    const assessmentsResponse = await axios.get(`/assessments/patient/${patientId}`);
                    const assessments = assessmentsResponse.data;
                    this.avaliacoes = assessments.map((assessment, index) => {
                        return {
                            nome: `Avaliação ${index + 1}`, 
                            data: new Date(assessment.assessmentDate).toLocaleDateString(),
                            checked: false,
                            idPatient: assessment.patient?.id_patient || '',
                        };
                    });
                } else {
                    console.warn("Paciente não encontrado para este usuário.");
                }
            } catch (error) {
                console.error('Erro ao buscar dados do usuário ou avaliações:', error);
            }
        } else {
            console.warn("ID do usuário não encontrado no localStorage.");
        }
    },
    methods: {
        toggleCheckbox(index) {
            this.avaliacoes[index].checked = !this.avaliacoes[index].checked;
        }
    }
};
</script>


<style scoped>


table tbody tr:last-child {
    border-radius: 0 0 50px 0;
}

table tbody td{
    background-color: #3E3E3E;
}

table tbody tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}

table tbody tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}

</style>