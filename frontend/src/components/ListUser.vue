<template>
    <div class="container">
        <header>
            <h1>Lista de Usuários</h1>
            <router-link to="/HomePage">Home</router-link>
        </header>

        <div class="content">
            <div class="sidebar">
                <router-link to="/RegisterUser">Registrar Paciente</router-link>
                <router-link to="/">Sair</router-link>
            </div>

            <div class="user-list">
                <h2>Usuários:</h2>
                <ul class="user-items">
                    <li v-for="user in users" :key="user.id_user" class="user-item">
                        <div class="user-info">
                            <span class="user-name">{{ user.fullName }}</span>
                            <span class="user-gender">({{ user.gender }})</span>
                        </div>
                        <div class="user-actions">
                            <button @click="editUser(user)">Editar</button>
                            <button @click="deleteUser(user)">Excluir</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.fetchUsers();
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await axios.get('http://localhost:3000/users');
                this.users = response.data.users;
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        },
        editUser(user) {
            // Implemente a lógica para editar o usuário
            console.log('Editar usuário:', user);
        },
        deleteUser(user) {
            // Implemente a lógica para excluir o usuário
            console.log('Excluir usuário:', user);
        }
    },
};
</script>


<style scoped>
div {
    box-sizing: border-box;
}

header {
    background-color: #ff1818;
    width: 100%;
}

.container {
    display: flex;
    height: 100%;
    flex-direction: column;
}

.content {
    display: flex;
    flex: 1;
    /* Faz com que a seção de conteúdo ocupe o restante do espaço disponível */
}

.sidebar {
    display: flex;
    flex-direction: column;
    background-color: #555;
    color: rgb(255, 255, 255);
    padding: 1em;
    width: 20%;
    /* ou qualquer outra largura desejada */
    height: calc(100vh - 80px);
    /* 4em é a altura do header */
    box-sizing: border-box;
}

.user-list {
    flex: 1;
    /* Faz com que a lista de usuários ocupe o restante do espaço disponível na horizontal */
    padding: 1em;
}

#links-sidebar {
    margin-bottom: 1em;
    color: #ff8818;
    text-decoration: none;
    font-size: 1em;
}

#links-sidebar:hover {
    text-decoration: underline;
    color: #ffbb4c;
    cursor: pointer;
}

button {
    background-color: #ff8818;
    color: #ffffff;
    border: none;
    padding: 1em;
    cursor: pointer;
    margin-top: auto;
    /* Faz o botão ficar no final da sidebar */
}

.user-list {
    flex: 1;
    padding: 1em;
}

.user-items {
    list-style-type: none;
    padding: 0;
}

.user-item {
    border-bottom: 1px solid #ddd;
    /* Adiciona uma linha entre os itens da lista */
    padding: 1em 0;
}

.user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user-name {
    font-weight: bold;
}

.user-gender {
    color: #666;
}

.user-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 1em 0;
  }
  
  .user-info {
    display: flex;
    align-items: center;
  }
  
  .user-actions {
    display: flex;
    gap: 0.5em;
  }
</style>