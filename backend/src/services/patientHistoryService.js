const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const Assessment = require('../models/assessment');
const Patient = require('../models/patient');
const Circumference = require('../models/circumference');
const Skinfold = require('../models/skinfold');
const Bmi = require('../models/bmi');

class PatientHistoryService {
  // Fetch all assessments for a patient and generate PDF report
  static async generatePatientHistory(patientId) {
    try {
      const patient = await Patient.findByPk(patientId);
      if (!patient) {
        throw new Error('Patient not found');
      }

      const assessments = await Assessment.findAll({
        where: { id_patient: patientId },
        include: [
          { model: Circumference, as: 'circumference' },
          { model: Skinfold, as: 'skinfold' },
          { model: Bmi, as: 'bmi' },
        ],
      });

      // Create the PDF document
      const doc = new PDFDocument();
      const pdfPath = path.join(__dirname, '..', 'reports', `paciente_${patientId}_historico.pdf`);
      const writeStream = fs.createWriteStream(pdfPath);
      doc.pipe(writeStream);

      // Header of the PDF
      doc.fontSize(20).text(`Relatório do histórico do paciente`, { align: 'center' });
      doc.moveDown();
      doc.fontSize(14).text(`Nome: ${patient.fullName}`);
      doc.text(`ID: ${patient.id_patient}`);
      doc.text(`Peso Inicial: ${patient.weight_ini} kg`);
      doc.text(`Altura Inicial: ${patient.height_ini} cm`);
      doc.moveDown();

      // Loop through assessments
      doc.fontSize(16).text('Avaliações', { underline: true });
      assessments.forEach((assessment, index) => {
        doc.moveDown();
        doc.fontSize(14).text(`Avaliação ${index + 1} - Data: ${assessment.assessmentDate}`);
        doc.text(`Método: ${assessment.method}`);
        doc.text(`Peso: ${assessment.weight} kg`);
        doc.text(`Altura: ${assessment.height} cm`);
        doc.moveDown();

        // Circumference dat
        if (assessment.circumference) {
            doc.fontSize(12).text('Circunferências:');
            doc.text(`Pescoço: ${assessment.circumference.neck} cm`);
            doc.text(`Tórax: ${assessment.circumference.thorax} cm`);
            doc.text(`Escápula: ${assessment.circumference.shoulderBlade} cm`);
            doc.text(`Cintura: ${assessment.circumference.waist} cm`);
            doc.text(`Abdômen: ${assessment.circumference.abdomen} cm`);
            doc.text(`Quadril: ${assessment.circumference.hip} cm`);
            doc.text(`Punho Esquerdo: ${assessment.circumference.leftWrist} cm`);
            doc.text(`Punho Direito: ${assessment.circumference.rightWrist} cm`);
            doc.text(`Braço Esquerdo: ${assessment.circumference.leftArm} cm`);
            doc.text(`Braço Direito: ${assessment.circumference.rightArm} cm`);
            doc.text(`Braço Esquerdo Contraído: ${assessment.circumference.leftContractedArm} cm`);
            doc.text(`Braço Direito Contraído: ${assessment.circumference.rightContractedArm} cm`);
            doc.text(`Antebraço Esquerdo: ${assessment.circumference.leftForearm} cm`);
            doc.text(`Antebraço Direito: ${assessment.circumference.rightForearm} cm`);
            doc.text(`Coxa Glútea Esquerda: ${assessment.circumference.leftGlutealThigh} cm`);
            doc.text(`Coxa Glútea Direita: ${assessment.circumference.rightGlutealThigh} cm`);
            doc.text(`Coxa Medial Esquerda: ${assessment.circumference.leftMedialThigh} cm`);
            doc.text(`Coxa Medial Direita: ${assessment.circumference.rightMedialThigh} cm`);
            doc.text(`Perna Esquerda: ${assessment.circumference.leftLeg} cm`);
            doc.text(`Perna Direita: ${assessment.circumference.rightLeg} cm`);
            doc.text(`Tornozelo Esquerdo: ${assessment.circumference.leftAnkle} cm`);
            doc.text(`Tornozelo Direito: ${assessment.circumference.rightAnkle} cm`);
            doc.moveDown();
        }
  
        // Skinfold data (Dobras cutâneas)
        if (assessment.skinfold) {
          doc.fontSize(12).text('Dobras Cutâneas:');
          doc.text(`Tríceps: ${assessment.skinfold.triceps} mm`);
          doc.text(`Abdominal: ${assessment.skinfold.abdominal} mm`);
          doc.text(`Peitoral: ${assessment.skinfold.pectoral} mm`);
          doc.text(`Subescapular: ${assessment.skinfold.subscapular} mm`);
          doc.text(`Supra-ilíaca: ${assessment.skinfold.suprailiac} mm`);
          doc.text(`Coxa: ${assessment.skinfold.thigh} mm`);
          doc.moveDown();
        }

        // BMI data
        if (assessment.bmi) {
          doc.fontSize(12).text('Índice de Massa Corporal (IMC):');
          doc.text(`IMC: ${assessment.bmi.bmiValue}`);
          doc.moveDown();
        }

        doc.moveDown();
        doc.fontSize(14).text('--------------------------------');
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
