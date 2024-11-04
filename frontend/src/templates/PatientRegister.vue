<template>
  <ToastComponent v-if="showToast" :message="toastMessage" :type="toastType" />
  <div class="flex justify-center p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-x-6">


    <!-- Formulário de cadastro -->
    <form @submit.prevent="handleRegister" id="register-form" class="w-full max-w-4xl text-black">
      <!-- Título do formulário -->
      <h2 class="text-2xl px-4 mb-3 text-black">Cadastro de Pacientes</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <!-- Nome completo -->
        <div class="flex flex-col mx-4">
          <label for="fullName" class="mb-2">
            Nome completo <span class="text-red-500">*</span>
          </label>
          <input type="text" id="fullName" placeholder="Digite seu nome completo aqui..." v-model="fullName"
            class="w-full p-3 rounded focus:border-orange-500">
         
        </div>


        <!-- CPF -->
        <div class="flex flex-col mx-4">
          <label for="cpf" class="mb-2">
            CPF <span class="text-red-500">*</span>
          </label>
          <input type="text" id="cpf" placeholder="Digite seu CPF aqui..." v-model="cpf"
            class="w-full p-3 rounded focus:border-orange-500">
          <span class="text-gray-500 text-sm mt-1">Somente números</span>
          <span v-if="cpf && !ValidaCPF(cpf)" class="text-red-500 text-sm mt-1">CPF inválido.</span>
         
        </div>

        <!-- Data de Nascimento -->
        <div class="flex flex-col mx-4">
          <label for="dataNasc" class="mb-2">
            Data de Nascimento <span class="text-red-500">*</span>
          </label>
          <input type="date" id="dataNasc" v-model="dataNasc" class="w-full p-3 rounded focus:border-orange-500">
          <span v-if="dataNasc && !isDateValid(dataNasc)" class="text-red-500 text-sm mt-1">Data inválida </span>
         
        </div>

        <!-- Gênero -->
        <div class="flex flex-col mx-4">
          <label for="gender" class="mb-2">
            Gênero <span class="text-red-500">*</span>
          </label>
          <select id="gender" v-model="gender" class="w-full p-3 rounded focus:border-orange-500">
            <option value="" disabled selected>Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
         
        </div>


        <div class="flex flex-col mx-4">
          <label for="phone" class="mb-2">
            Telefone <span class="text-red-500">*</span>
          </label>
          <input type="text" id="phone" placeholder="Digite seu telefone aqui..." v-model="phone"
            class="w-full p-3 rounded focus:border-orange-500" @input="validatePhone">
          <span v-if="phone && phoneError" class="text-red-500 text-sm mt-1">{{ phoneError }}</span>
        </div>

        <div class="flex flex-col mx-4">
          <label for="email" class="mb-2">
            Email <span class="text-red-500">*</span>
          </label>
          <input type="email" id="email" placeholder="Digite seu email aqui..." v-model="email"
            class="w-full p-3 rounded focus:border-orange-500">
          <span v-if="email && !ValidaEmail(email)" class="text-red-500 text-sm mt-1">Email inválido.</span>
          
        </div>

        <div class="flex flex-col mx-4">
          <label for="cep" class="mb-2">
            CEP <span class="text-red-500">*</span>
          </label>
          <input type="text" id="cep" placeholder="Digite seu CEP aqui..." v-model="cep"
            class="w-full p-3 rounded focus:border-orange-500">
          <span v-if="cep && !ValidaCEP(cep)" class="text-red-500 text-sm mt-1">CEP inválido.</span>
         
        </div>

        <div class="flex flex-col mx-4">
          <label for="street" class="mb-2">
            Rua <span class="text-red-500">*</span>
          </label>
          <input type="text" id="street" placeholder="Digite sua rua aqui..." v-model="street"
            class="w-full p-3 rounded focus:border-orange-500">
          
        </div>

        <div class="flex flex-col mx-4">
          <label for="number" class="mb-2">
            Número <span class="text-red-500">*</span>
          </label>
          <input type="number" id="number" placeholder="Digite o número aqui..." v-model="number"
            class="w-full p-3 rounded focus:border-orange-500">
          
        </div>

        <div class="flex flex-col mx-4">
          <label for="district" class="mb-2">
            Bairro <span class="text-red-500">*</span>
          </label>
          <input type="text" id="district" placeholder="Digite seu bairro aqui..." v-model="district"
            class="w-full p-3 rounded focus:border-orange-500">
         
        </div>

        <div class="flex flex-col mx-4">
          <label for="city" class="mb-2">
            Cidade <span class="text-red-500">*</span>
          </label>
          <input type="text" id="city" placeholder="Digite sua cidade aqui..." v-model="city"
            class="w-full p-3 rounded focus:border-orange-500">
          
        </div>

        <div class="flex flex-col mx-4">
          <label for="state" class="mb-2">
            Estado <span class="text-red-500">*</span>
          </label>
          <input type="text" id="state" placeholder="Digite seu estado aqui..." v-model="state"
            class="w-full p-3 rounded focus:border-orange-500">
         
        </div>

        <div class="flex flex-col mx-4 col-span-2">
          <label for="complement" class="mb-2">Complemento</label>
          <input type="text" id="complement" placeholder="Digite o complemento aqui..." v-model="complement"
            class="w-full p-3 rounded focus:border-orange-500">
        </div>
        <!-- Nome de Usuário -->
        <div class="flex flex-col mx-4">
          <label for="userName" class="mb-2">
            Nome de Usuário <span class="text-red-500">*</span>
          </label>
          <input type="text" id="userName" placeholder="Digite seu nome de usuário aqui..." v-model="userName"
            class="w-full p-3 rounded focus:border-orange-500">
         
        </div>

        <!-- Peso Inicial -->
        <div class="flex flex-col mx-4">
          <label for="weigth_ini" class="mb-2 ">Peso Inicial<span class="text-red-500">*</span></label>
          <input type="number" id="weigth_ini" min="1" placeholder="Digite seu peso inicial aqui..." v-model="weigth_ini"
            class="w-full p-3 rounded focus:border-orange-500">
         
        </div>

        <!-- Altura Inicial -->
        <div class="flex flex-col mx-4">
          <label for="height_ini" class="mb-2 ">Altura Inicial<span class="text-red-500">*</span></label>
          <input type="number" id="height_ini" min="1" placeholder="Digite sua altura inicial aqui..." v-model="height_ini"
            class="w-full p-3 rounded focus:border-orange-500">
         
        </div>
      </div>

      <!-- Botões de envio e voltar -->
      <div class="flex justify-between my-6">
        <button type="button" @click="goBack" class="bg-gray-500 text-white p-3 rounded">Voltar</button>
        <button type="submit" class="bg-orange-500 text-white p-3 rounded">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import ToastComponent from '../components/ToastNotification.vue'

export default {
  components: {
    ToastComponent,
  },
  data() {
    return {
      fullName: '',
      cpf: '',
      dataNasc: '',
      gender: '',
      phone: '',
      email: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      cep: '',
      weigth_ini: '',
      height_ini: '',
      userName: '',
      password: '',
      confirmPassword: '',
      toastMessage: '',
      toastType: 'success',
      showToast: false,
      phoneError: ''
    };
  },
  methods: {
    ValidaCPF(strCPF) {
      // Verifica se o CPF tem exatamente 11 caracteres
      if (strCPF.length !== 11) return false;

      // Verifica se todos os caracteres são iguais, como "11111111111" ou "00000000000"
      if (/^(\d)\1{10}$/.test(strCPF)) return false;

      let Soma = 0;
      let Resto;

      // Calcula o primeiro dígito verificador
      for (let i = 1; i <= 9; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      }
      Resto = (Soma * 10) % 11;
      if (Resto === 10 || Resto === 11) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

      // Calcula o segundo dígito verificador
      Soma = 0;
      for (let i = 1; i <= 10; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      }
      Resto = (Soma * 10) % 11;
      if (Resto === 10 || Resto === 11) Resto = 0;

      return Resto === parseInt(strCPF.substring(10, 11));
    },

    ValidaEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },
    ValidaCEP(cep) {
      // Expressão regular para o formato de CEP: XXXXX-XXX ou XXXXXXXX
      const regex = /^[0-9]{5}-?[0-9]{3}$/;

      // Verifica o formato inicial do CEP (com ou sem hífen)
      if (!regex.test(cep)) return false;

      // Remove o hífen, se houver, para facilitar a validação numérica
      const numericCEP = cep.replace('-', '');

      // Verifica se o CEP é formado por números repetidos, como "11111111"
      if (/^(\d)\1+$/.test(numericCEP)) return false;

      // Extrai o primeiro dígito para verificar a região postal
      const firstDigit = parseInt(numericCEP.charAt(0));

      // Verifica se o primeiro dígito está no intervalo válido de 0 a 9
      if (firstDigit < 0 || firstDigit > 9) return false;

      // O CEP passou por todas as verificações e é considerado válido
      return true;
    },

    isDateValid(date) {
      // Verifica se a data está no formato YYYY-MM-DD
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      if (!regex.test(date)) {
        return false;
      }

      // Tenta criar um objeto Date com a data fornecida
      const parsedDate = new Date(date);
      // Verifica se a data é válida
      if (isNaN(parsedDate.getTime())) {
        return false;
      }

      // Verifica se a data não é futura
      const today = new Date();
      if (parsedDate > today) {
        return false;
      }

      // Calcula a idade a partir da data fornecida
      const birthDate = parsedDate;
      let age = today.getFullYear() - birthDate.getFullYear(); // Alterado para let
      const monthDifference = today.getMonth() - birthDate.getMonth();

      // Ajusta a idade se o aniversário ainda não ocorreu este ano
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      // Verifica se a idade é menor que 15 anos
      return age >= 9;
    },

    validatePhone() {
      const phonePattern = /^\d{11}$/;
      if (!phonePattern.test(this.phone)) {
        this.phoneError = 'O número de telefone conter 11 dígitos.';
      } else {
        this.phoneError = '';
      }
    },

    async handleRegister() {
      // Verificação dos campos obrigatórios
      if (!this.fullName || !this.cpf || !this.dataNasc || !this.gender || !this.phone || !this.email ||
        !this.street || !this.number || !this.district || !this.city || !this.state || !this.cep ||
        !this.userName) {

        this.showToastMessage('Por favor, preencha todos os campos obrigatórios', 'error');

        return;
      }


      if (this.password !== this.confirmPassword) {
        this.showToastMessage('As senhas não coincidem.', 'error');
        return;
      }
      // Validação do CPF
      if (!this.ValidaCPF(this.cpf)) {
        alert('CPF inválido. Por favor, insira um CPF válido.');
        return;
      }
      // Validação do Email
      if (!this.ValidaEmail(this.email)) {
        alert('Email inválido. Por favor, insira um email válido.');
        return;
      }

      // Valida a data de nascimento antes de enviar os dados
      if (!this.isDateValid(this.dataNasc)) {
        alert('A data de nascimento fornecida é inválida ou está no futuro.');
        return;
      }

      if (!this.ValidaCEP(this.cep)) {
        alert('CEP inválido. Por favor, insira um CEP válido.');
        return;
      }

      this.validatePhone();
      if (this.phoneError) {
        this.showToastMessage(this.phoneError, 'error');
        return;
      }

      try {
        await axios.post('http://localhost:3000/register', {
          fullName: this.fullName,
          cpf: this.cpf,
          dataNasc: this.dataNasc,
          gender: this.gender,
          phone: this.phone,
          email: this.email,
          street: this.street,
          number: this.number,
          complement: this.complement,
          district: this.district,
          city: this.city,
          state: this.state,
          cep: this.cep,
          role: 'Paciente', // Sempre define o role como Paciente
          userName: this.userName,
          password: this.password,
          confirmPassword: this.confirmPassword,
          resetPasswordToken: null,

          // Campos específicos do paciente
          weigth_ini: this.weigth_ini,
          height_ini: this.height_ini,
        });
        this.showToastMessage('Paciente cadastrado com sucesso!', 'success');
        setTimeout(() => {
          this.$router.push({ name: 'PatientList' });
        }, 3000); // Delay de 3 segundos
      } catch (error) {
        console.error('Erro ao cadastrar paciente:', error);

        if (error.response && error.response.data && error.response.data.message) {
          this.showToastMessage(`Erro ao cadastrar paciente: ${error.response.data.message}`, 'error');
        } else {
          this.showToastMessage('Erro ao cadastrar paciente.', 'error');
        }
      }
    },
    showToastMessage(message, type) {
      this.toastMessage = message;
      this.toastType = type;
      this.showToast = false;
      this.$nextTick(() => {
        this.showToast = true;
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    // Verifica se a página já foi recarregada
    if (!localStorage.getItem('pageReloaded')) {
      // Marca que a página foi recarregada
      localStorage.setItem('pageReloaded', 'true');
      // Recarrega a página
      window.location.reload();
    } else {
      // Remove a marcação para futuras visitas
      localStorage.removeItem('pageReloaded');
    }
  },
};
</script>

<style scoped>
p {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

#logo {
  max-width: 10%;
  max-height: 10%;
  opacity: 0.5;
  margin-right: 1rem;
}

h1 span {
  color: #ff8818;
}

button {
  width: 180px;
  height: 50px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow .15s, transform .15s;
}

button:focus {
  box-shadow: #af6a0a 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

button:hover {
  box-shadow: rgba(255, 255, 255, 0.278) 0 4px 8px, rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

button:active {
  box-shadow: #ffa347 0 3px 7px inset;
  transform: translateY(2px);
}
</style>