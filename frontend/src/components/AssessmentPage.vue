<template>
    <div class="container">
      <header>
        <h1>IMC - Avaliação de Anderson</h1>
      </header>
  
      <div class="content">
        <div class="sidebar">
          <router-link to="/HomePage">Home</router-link>

          <router-link to="/RegisterUser">Registar Usuario</router-link>

          <router-link to="/ListUser">Lista de usuarios</router-link>
  
          <router-link to="/PhysicalAssessments">Avaliação Fisica</router-link>
  
          <router-link to="/">Sair</router-link>
        </div>
  
        <!-- Formulário para avaliação IMC -->
        <form @submit.prevent="saveAssessment">
          <label for="weight">Peso (kg):</label>
          <input type="number" id="weight" v-model="weight" @input="updateIMC" required>
    
          <label for="height">Altura (m):</label>
          <input type="number" id="height" v-model="height" @input="updateIMC" required>
    
          <label for="result">Resultado IMC:</label>
          <input type="text" id="result" v-model="result" disabled>
    
          <label for="classification">Classificação:</label>
          <input type="text" id="classification" v-model="classification" disabled>
    
          <button type="submit">Salvar Avaliação</button>
        </form>
      </div>
  
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        weight: null,
        height: null,
        result: null,
        classification: null,
      };
    },
    methods: {
      updateIMC() {
        // Implemente o cálculo do IMC e a classificação aqui
        if (this.weight && this.height) {
          const bmi = (this.weight / (this.height * this.height)).toFixed(2);
          this.result = isNaN(bmi) ? null : bmi;
  
          if (bmi < 18.5) {
            this.classification = 'Magreza (0)';
          } else if (bmi >= 18.5 && bmi < 25.0) {
            this.classification = 'Normal (0)';
          } else if (bmi >= 25.0 && bmi < 30.0) {
            this.classification = 'Sobrepeso (I)';
          } else if (bmi >= 30.0 && bmi < 40.0) {
            this.classification = 'Obesidade (II)';
          } else {
            this.classification = 'Obesidade Grave (III)';
          }
        } else {
          this.result = null;
          this.classification = null;
        }
      },
      saveAssessment() {
        // Implemente a lógica de salvar a avaliação aqui
        // Você pode usar this.weight, this.height, this.result e this.classification
      },
    },
  };
  </script>
  
  
  <style scoped>
  div {
    box-sizing: border-box;
  }
  
  header {
    background-color: #18e4ff;
    width: 100%;
  }
  
  #userForm {
    flex: 1;
    /* Faz com que a lista de usuários ocupe o restante do espaço disponível na horizontal */
    padding: 1em;
  }
  
  form {
    width: 50%;
    margin: auto;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  #result, #classification {
    background-color: #f4f4f4;
  }
  
  
  </style>