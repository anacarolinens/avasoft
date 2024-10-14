const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const Assessment = require('../models/assessment');
const Patient = require('../models/patient');
const Professional = require('../models/professional');
const Circumference = require('../models/circumference');
const Skinfold = require('../models/skinfold');
const Bmi = require('../models/bmi');

class PatientHistoryService {
  // Fetch all assessments for a patient and generate PDF report
  static async generatePatientHistory(id_patient) {
    try {
      // Buscando o paciente e incluindo o profissional relacionado
      const patient = await Patient.findByPk(id_patient, {
      
      });
      
      if (!patient) {
        throw new Error('Patient not found');
      }

      const professional = patient.Professional; // Acessa o profissional associado diretamente

      const assessments = await Assessment.findAll({
        where: { id_patient: id_patient },
        include: [
          { model: Circumference, as: 'circumference' },
          { model: Skinfold, as: 'skinfold' },
          { model: Bmi, as: 'bmi' },
        ],
      });

      // Criação do documento PDF
      const doc = new PDFDocument();
      const pdfPath = path.join(__dirname, '..', 'historys', `paciente_${patient.id}_historico.pdf`);
      const writeStream = fs.createWriteStream(pdfPath);
      doc.pipe(writeStream);

      // Adiciona a logo da avasoft à esquerda
      doc.image(path.join(__dirname, '..', 'utils', 'avasoftlogo.png'), 50, 50, { width: 130 });

      // Define a posição inicial das colunas
      const startX = 200; // Define a posição à direita da logo
      const colSpacing = 205; // Espaço entre as duas colunas

      // Coluna 1 (Paciente)
      doc.fontSize(12).text(`Nome: ${patient.fullName}`, startX, 50);
      doc.text(`Data de Nascimento: ${patient.birthDate}`, startX, 70);
      doc.text(`Data do Relatório: ${new Date().toLocaleDateString()}`, startX, 90);

      // Coluna 2 (Profissional)
      doc.fontSize(12).text(`Profissional: `, startX + colSpacing, 50);
      doc.text(`Especialidade: `, startX + colSpacing, 70);
      doc.text(`Registro Profissional: `, startX + colSpacing, 90);


            // Centralizando o título do relatório
            const title = 'Relatório de Acompanhamento Antropométrico'; // Defina o título
            doc.moveDown(3); // Pula 3 linhas antes do título
      
            // Calcula a largura do título e centraliza
            const titleWidth = doc.widthOfString(title);
            const xOffset = (doc.page.width - titleWidth) / 2; // Calcula a posição X para centralização
      
            doc.fontSize(14).text(title, xOffset, doc.y); // Centraliza o título
            doc.moveDown(3); // Pula 3 linhas após o título
      
            // Definir o ponto de partida à esquerda para as medidas e avaliações
            const leftMargin = 50; // Próximo à margem esquerda da página
      
            // Agora as medidas começam logo abaixo do título, alinhadas à esquerda
            doc.fontSize(12).text('Avaliações', leftMargin, doc.y, { underline: true });
            assessments.forEach((assessment, index) => {
              doc.moveDown();
      
              // A partir de agora, todos os textos começarão na posição 'leftMargin' para garantir alinhamento à esquerda
              doc.text(`Método: ${assessment.method}`, leftMargin);
              doc.text(`Peso: ${assessment.weight} kg`, leftMargin);
              doc.text(`Altura: ${assessment.height} cm`, leftMargin);
              doc.moveDown();
      
              // Dados de Circunferência
              if (assessment.circumference) {
                doc.fontSize(12).text('Circunferências:', leftMargin);
                doc.text(`Pescoço: ${assessment.circumference.neck} cm`, leftMargin);
                doc.text(`Tórax: ${assessment.circumference.thorax} cm`, leftMargin);
                doc.text(`Escápula: ${assessment.circumference.shoulderBlade} cm`, leftMargin);
                doc.text(`Cintura: ${assessment.circumference.waist} cm`, leftMargin);
                doc.text(`Abdômen: ${assessment.circumference.abdomen} cm`, leftMargin);
                doc.text(`Quadril: ${assessment.circumference.hip} cm`, leftMargin);
                doc.text(`Punho Esquerdo: ${assessment.circumference.leftWrist} cm`, leftMargin);
                doc.text(`Punho Direito: ${assessment.circumference.rightWrist} cm`, leftMargin);
                doc.text(`Braço Esquerdo: ${assessment.circumference.leftArm} cm`, leftMargin);
                doc.text(`Braço Direito: ${assessment.circumference.rightArm} cm`, leftMargin);
                doc.text(`Braço Esquerdo Contraído: ${assessment.circumference.leftContractedArm} cm`, leftMargin);
                doc.text(`Braço Direito Contraído: ${assessment.circumference.rightContractedArm} cm`, leftMargin);
                doc.text(`Antebraço Esquerdo: ${assessment.circumference.leftForearm} cm`, leftMargin);
                doc.text(`Antebraço Direito: ${assessment.circumference.rightForearm} cm`, leftMargin);
                doc.text(`Coxa Glútea Esquerda: ${assessment.circumference.leftGlutealThigh} cm`, leftMargin);
                doc.text(`Coxa Glútea Direita: ${assessment.circumference.rightGlutealThigh} cm`, leftMargin);
                doc.text(`Coxa Medial Esquerda: ${assessment.circumference.leftMedialThigh} cm`, leftMargin);
                doc.text(`Coxa Medial Direita: ${assessment.circumference.rightMedialThigh} cm`, leftMargin);
                doc.text(`Perna Esquerda: ${assessment.circumference.leftLeg} cm`, leftMargin);
                doc.text(`Perna Direita: ${assessment.circumference.rightLeg} cm`, leftMargin);
                doc.text(`Tornozelo Esquerdo: ${assessment.circumference.leftAnkle} cm`, leftMargin);
                doc.text(`Tornozelo Direito: ${assessment.circumference.rightAnkle} cm`, leftMargin);
                doc.moveDown();
              }
      
              // Dados de Dobras Cutâneas
              if (assessment.skinfold) {
                doc.fontSize(12).text('Dobras Cutâneas:', leftMargin);
                doc.text(`Tríceps: ${assessment.skinfold.triceps} mm`, leftMargin);
                doc.text(`Abdominal: ${assessment.skinfold.abdominal} mm`, leftMargin);
                doc.text(`Peitoral: ${assessment.skinfold.pectoral} mm`, leftMargin);
                doc.text(`Subescapular: ${assessment.skinfold.subscapular} mm`, leftMargin);
                doc.text(`Supra-ilíaca: ${assessment.skinfold.suprailiac} mm`, leftMargin);
                doc.text(`Coxa: ${assessment.skinfold.thigh} mm`, leftMargin);
                doc.moveDown();
              }
      
              // Dados de IMC
              if (assessment.bmi) {
                doc.fontSize(12).text('Índice de Massa Corporal (IMC):', leftMargin);
                doc.text(`IMC: ${assessment.bmi.bmiValue}`, leftMargin);
                doc.moveDown();
              }
      
              doc.moveDown();
            });
      
            doc.end();

      // Return the PDF path for future use (emailing, downloading)
      return pdfPath;
    } catch (error) {
      console.error('Erro ao gerar o histórico do paciente:', error);
      throw error;
    }
  }
}

module.exports = PatientHistoryService;
