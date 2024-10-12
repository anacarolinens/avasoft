// services/assessmentService.js

const Bmi = require('../models/bmi');

const calculateBMI = (weight, height) => {
  if (altura <= 0) return null; // Para evitar divisão por zero
  return (weight / ((height / 100) ** 2)).toFixed(2); // altura em metros
};

const classifyBMI = (bmi) => {
  if (bmi < 18.5) return 'Abaixo do peso';
  if (bmi < 24.9) return 'Peso normal';
  if (bmi < 29.9) return 'Sobrepeso';
  return 'Obesidade';
};

const calculateBodyDensity = (method, gender, age, skinfolds) => {
  let DC;

  switch (method) {
    case 'McArdle':
      if (gender === 'homem') {
        if (age >= 18 && age <= 34) {
          DC = 1.1610 - 0.0632 * Math.log10(skinfolds.BI + skinfolds.TR + skinfolds.SB + skinfolds.SI);
        }
        // Adicione outras faixas etárias conforme necessário
      } else if (gender === 'mulher') {
        if (age >= 18 && age <= 48) {
          DC = 1.06234 - 0.00068 * skinfolds.SB - 0.00039 * skinfolds.TR - 0.00025 * skinfolds.CX;
        }
        // Adicione outras faixas etárias conforme necessário
      }
      break;

    case 'Pollock':
      // Implementar fórmula do Pollock
      break;

    case 'Jackson & Pollock':
      // Implementar fórmula de Jackson & Pollock
     
      break;

    case 'Guedes':
      // Implementar fórmula de Guedes
     
      break;

    default:
      throw new Error("Método não reconhecido");
  }

  return DC;
};

const calculateBodyFatPercentage = (density) => {
  return ((4.95 / density) - 4.50) * 100;
};

const AssessmentService = async (assessmentData) => {
  const { weight, height, skinfolds, method, gender, age } = assessmentData;

  const bmiValue = calculateBMI(weight, height);
  const classification = classifyBMI(bmiValue);

  const density = calculateBodyDensity(method, gender, age, skinfolds);
  const bodyFatPercentage = calculateBodyFatPercentage(density);

  // Salvar BMI e outros dados no banco
  const bmiRecord = await Bmi.create({
    bmiValue,
    classification,
    bodyFatPercentage,
    id_assessment: assessmentData.id_assessment,
  });

  return { bmiRecord, bmiValue, classification, bodyFatPercentage };
};

module.exports = {
  AssessmentService,
};
