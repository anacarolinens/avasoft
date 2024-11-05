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
                                <button class="w-6 h-6">
                                    <img :src="viewImg" alt="View Button" class="w-full h-full object-contain" />
                                </button>
                                <button class="w-5 h-5">
                                    <img :src="downloadImg" alt="Download Button" class="w-full h-full object-contain" @click="generatePdf(avaliacao.idPatient)"/>
                                </button>
                                <button class="w-5 h-5" @click="toggleCheckbox(index)"  @change="toggleSelectAll" >
                                    <img :src="avaliacao.checked ? checkedImg : checkboxImg" alt="Checkbox Button" class="w-full h-full object-contain" />
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
            <button type="button" @click="generatePdf(selectedPatientId)" class="w-full sm:w-auto min-w-[200px] h-12 bg-[#FF8139] text-white p-3 rounded">
                Download
            </button>
        </div> 
        <!-- Componente PdfAssessment com ref -->
        <PdfAssessment ref="pdfContent" :selectedAssessment="selectedAssessment" />   
    </div>
</template>

<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Adicione essa importação para o html2canvas
import axios from '../plugins/config';
import checkedImg from '../assets/checked.png';
import checkboxImg from '../assets/checkbox.png';
import downloadImg from '../assets/download2.png';
import viewImg from '../assets/visualization.png';
import PdfAssessment from '../components/PdfAssessment.vue';
import PdfselectedAssessments from '../components/PdfselectedAssessments.vue';

export default {
    components: {
        PdfAssessment,
        PdfselectedAssessments,
    },
    data() {
        return {
            avaliacoes: [],
            checkedImg,
            checkboxImg,
            downloadImg,
            viewImg,
            assessments: [],
            selectedAssessments: [],
            selectedAssessment: null,
            selectedPatientId: null,
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
    computed: {
        selectedAssessmentsData() {
            return this.assessments.filter(assessment => this.selectedAssessments.includes(assessment.id_assessment));
        },
    },
    methods: {
        toggleCheckbox(index) {
            this.avaliacoes[index].checked = !this.avaliacoes[index].checked;
        },
        toggleSelectAll(event) {
            if (event.target.checked) {
                this.selectedAssessments = this.assessments.map(assessment => assessment.id_assessment);
            } else {
                this.selectedAssessments = [];
            }
        },
        async generatePdf(patientId) {
            try {
                const assessment = this.assessments.find(a => a.id_assessment === patientId);
                this.selectedAssessment = assessment;

                // Espera até que o DOM seja atualizado
                await this.$nextTick();

                // Verifica se pdfContent está disponível
                const pdfElement = this.$refs.pdfContent;
                if (!pdfElement) {
                    console.error("Elemento pdfContent não encontrado.");
                    return;
                }

                // Continua com a geração do PDF
                const canvas = await html2canvas(pdfElement.$el, { scale: 2 });
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('portrait', 'mm', 'a4');
                const pageWidth = pdf.internal.pageSize.getWidth();
                const imgWidth = pageWidth - 50; 
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                const positionY = (pdf.internal.pageSize.getHeight() - imgHeight) / 2; 
                const positionX = (pageWidth - imgWidth) / 2; 
                pdf.addImage(imgData, 'PNG', positionX, positionY, imgWidth, imgHeight);
                pdf.save(`Paciente_${patientId}_Avaliacao.pdf`);
            } catch (error) {
                console.error('Erro ao gerar PDF:', error);
            }
        },
    }
};
</script>

<style scoped>
table tbody tr:last-child {
    border-radius: 0 0 50px 0;
}
table tbody td {
    background-color: #3E3E3E;
}
table tbody tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}
table tbody tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}
</style>
