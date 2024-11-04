<template>
  <ToastComponent v-if="showToast" :message="toastMessage" :type="toastType" />
  <div class="flex justify-center p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-x-6">
    <!-- Formulário de cadastro -->
    <form @submit.prevent="handleRegister" id="register-form" class="w-full max-w-4xl text-black">
      <h2 class="text-2xl px-4 mb-3 text-black">Cadastro de Profissionais</h2>

      <!-- Informações Pessoais -->
      <div class="mb-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col mx-4">
            <label for="fullName" class="mb-2">
              Nome completo <span class="text-red-500">*</span>
            </label>
            <input type="text" id="fullName" placeholder="Digite seu nome completo aqui..." v-model="fullName"
              class="w-full p-3 rounded focus:border-orange-500">

          </div>

          <div class="flex flex-col mx-4">
            <label for="cpf" class="mb-2">
              CPF <span class="text-red-500">*</span>
            </label>
            <input type="text" id="cpf" placeholder="Digite seu CPF aqui..." v-model="cpf"
              class="w-full p-3 rounded focus:border-orange-500">
            <span v-if="cpf && !ValidaCPF(cpf)" class="text-red-500 text-sm mt-1">CPF inválido.</span>

          </div>

          <div class="flex flex-col mx-4">
            <label for="dataNasc" class="mb-2">
              Data de Nascimento <span class="text-red-500">*</span>
            </label>
            <input type="date" id="dataNasc" v-model="dataNasc" class="w-full p-3 rounded focus:border-orange-500">
            <span v-if="dataNasc && !isDateValid(dataNasc)" class="text-red-500 text-sm mt-1">Data inválida ou no
              futuro.</span>

          </div>

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
        </div>
      </div>

      <!-- Informações de Contato -->
      <div class="mb-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col mx-4">
            <label for="phone" class="mb-2">
              Telefone <span class="text-red-500">*</span>
            </label>
            <input type="text" id="phone" placeholder="Digite seu telefone aqui..." v-model="phone"
              class="w-full p-3 rounded focus:border-orange-500">

          </div>

          <div class="flex flex-col mx-4">
            <label for="email" class="mb-2">
              Email <span class="text-red-500">*</span>
            </label>
            <input type="email" id="email" placeholder="Digite seu email aqui..." v-model="email"
              class="w-full p-3 rounded focus:border-orange-500">
            <span v-if="email && !ValidaEmail(email)" class="text-red-500 text-sm mt-1">Email inválido.</span>

          </div>
        </div>
      </div>

      <!-- Informações de Endereço -->
      <div class="mb-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      </div>

      <!-- Informações de Acesso -->
      <div class="mb-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col mx-4">
            <label for="userName" class="mb-2">
              Nome de Usuário <span class="text-red-500">*</span>
            </label>
            <input type="text" id="userName" placeholder="Digite seu nome de usuário aqui..." v-model="userName"
              class="w-full p-3 rounded focus:border-orange-500">

          </div>

          <div class="flex flex-col mx-4">
            <label for="password" class="mb-2">
              Senha <span class="text-red-500">*</span>
            </label>
            <input :type="showPassword ? 'text' : 'password'" id="password" placeholder="Digite sua senha aqui..."
              v-model="password" class="w-full p-3 rounded focus:border-orange-500">
            <span v-if="password && !ValidaSenha(password)" class="text-red-500 text-sm mt-1">
              A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres
              especiais.
            </span>
            <div class="flex items-center mt-2">
              <input type="checkbox" id="showPassword" v-model="showPassword" class="mr-2">
              <label for="showPassword" class="text-sm">Mostrar Senha</label>
            </div>
          </div>
          <div class="flex flex-col mx-4">
            <label for="confirmPassword" class="mb-2">Confirme a Senha<span class="text-red-500">*</span></label>
            <input :type="showPassword ? 'text' : 'password'" id="confirmPassword"
              placeholder="Confirme sua senha aqui..." v-model="confirmPassword"
              class="w-full p-3 rounded focus:border-orange-500">

          </div>
        </div>
      </div>

      <!-- Botões de envio -->
      <div class="flex justify-center mt-6 gap-4">
        <router-link to="/">
          <button type="button" class="bg-gray-300 p-3 mb-3 hover:bg-gray-400 rounded">Voltar</button>
        </router-link>
        <button type="submit" class="bg-orange-500 p-3 mb-3 hover:bg-orange-600 rounded">Cadastrar</button>

      </div>
    </form>
    <!-- Modal de Sucesso -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white rounded-lg p-6 text-center">
        <h3 class="text-lg font-semibold">Cadastro Realizado com Sucesso!</h3>
        <p class="mt-4">Você pode agora fazer login.</p>
        <router-link to="/">
          <button class="bg-orange-500 p-2 mt-4 rounded">Ir para Login</button>
        </router-link>
        <button @click="closeModal" class="mt-4 text-gray-600">Fechar</button>
      </div>
    </div>
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
      userName: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showModal: false, // Estado para controlar a visibilidade da senha
      showToast: false,
      toastMessage: '',
      toastType: 'success',
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
      return age >= 18;
    },
    ValidaSenha(senha) {
      // A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(senha);
    },
    async handleRegister() {
      // Verificação dos campos obrigatórios
      if (!this.fullName || !this.cpf || !this.dataNasc || !this.gender || !this.phone || !this.email ||
        !this.street || !this.number || !this.district || !this.city || !this.state || !this.cep ||
        !this.userName || !this.password || !this.confirmPassword) {
        this.showToastMessage('Por favor, preencha todos os campos onrigatórios', 'error');
        return;
      }
      // Verificação da robustez da senha
      if (!this.ValidaSenha(this.password)) {
        this.showToastMessage(
          'A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.',
          'error'
        );
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
          role: 'Profissional',
          userName: this.userName,
          password: this.password,
          confirmPassword: this.confirmPassword,
          resetPasswordToken: null,
        });
        this.showModal = true;
        this.showToastMessage('Cadastrado com sucesso!', 'success'); // Mostra o modal ao cadastrar com sucesso
      } catch (error) {
        console.error('Erro ao cadastrar profissional:', error);
        if (error.response && error.response.data && error.response.data.message) {
          this.showToastMessage(`Erro ao cadastrar profissional: ${error.response.data.message}`, 'error');

        } else {
          this.showToastMessage('Erro ao cadastrar profissional.', 'error');
        }
      }
    },
    closeModal() {
      this.showModal = false; // Método para fechar o modal
    },
    showToastMessage(message, type) {
      this.toastMessage = message;
      this.toastType = type;
      this.showToast = false;
      this.$nextTick(() => {
        this.showToast = true;
      });
    },
  }
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
}

/* Estilos para o modal */
.fixed {
  position: fixed;
  z-index: 50;
}

.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.bg-white {
  background-color: #ffffff;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.p-6 {
  padding: 1.5rem;
}

.text-center {
  text-align: center;
}
</style>