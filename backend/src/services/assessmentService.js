// services/assessmentService.js

const Bmi = require('../models/bmi');

const calculateBMI = (weight, height) => {
  if (height <= 0) return 0; // Para evitar divisão por zero
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
    // Implementar os cálculos de densidade corporal com base no método
    default:
      DC = 1; // Placeholder
  }

  return DC;
};

const calculateBodyFatPercentage = (density) => {
  return ((4.95 / density) - 4.50) * 100;
};

const createOrUpdateBMI = async (assessmentId, weight, height, dateRecorded) => {
  const bmiValue = calculateBMI(weight, height);
  const classification = classifyBMI(bmiValue);

  // Verificar se já existe um registro de BMI para esta avaliação
  let bmiRecord = await Bmi.findOne({ where: { id_assessment: assessmentId } });

  if (bmiRecord) {
    // Atualizar o registro existente
    bmiRecord.bmiValue = bmiValue;
    bmiRecord.classification = classification;
    bmiRecord.dateRecorded = dateRecorded;
    await bmiRecord.save();
  } else {
    // Criar um novo registro
    bmiRecord = await Bmi.create({
      id_assessment: assessmentId,
      bmiValue,
      classification,
      dateRecorded,
    });
  }

  return bmiRecord;
};

const AssessmentService = async (assessmentData) => {
  const { id_assessment, weight, height, skinfolds, method, gender, age, dateRecorded } = assessmentData;

  const density = calculateBodyDensity(method, gender, age, skinfolds);
  const bodyFatPercentage = calculateBodyFatPercentage(density);

  // Criar ou atualizar BMI no banco de dados
  await createOrUpdateBMI(id_assessment, weight, height, dateRecorded);

  // Salvar outros dados relacionados à avaliação, se necessário
};

module.exports = {
  AssessmentService,
};
