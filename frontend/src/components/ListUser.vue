<template>
    <div class="container">
        <header>
            <h1>Lista de Usuários</h1>
        </header>

        <div class="content">
            <div class="sidebar">
                <router-link to="/HomePage">Home</router-link>

                <router-link to="/RegisterUser">Registar Usuario</router-link>

                <router-link to="/ListUser">Lista de usuarios</router-link>
        
                <router-link to="/PhysicalAssessments">Avaliação Fisica</router-link>
        
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
                            <!-- Atualize o link de edição -->
                            <router-link id="edit-button"
                                :to="{ name: 'EditPage', params: { id: user.id_user } }">Editar</router-link>
                            <button id="delete-button" @click="deleteUser(user)">Excluir</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
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
                const response = await fetch('http://localhost:3000/users');
                if (response.ok) {
                    const data = await response.json();
                    this.users = data.users;
                } else {
                    console.error('Error fetching users:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        },
        editUser(user) {
            if (user.id_user !== undefined) {
                this.$router.push({ name: 'EditPage', params: { id: user.id_user } });
            }
            // Redirecione para a página de edição com o ID do usuário
        },
        async deleteUser(user) {
            try {
                // Envie uma solicitação de exclusão para o seu servidor
                const response = await fetch(`http://localhost:3000/users/${user.id_user}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    console.log('Usuário excluído com sucesso:', user);
                    // Atualize a lista de usuários após a exclusão
                    this.fetchUsers();
                } else {
                    console.error('Erro ao excluir usuário:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao excluir usuário:', error);
            }
        },
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

.user-list {
    flex: 1;
    /* Faz com que a lista de usuários ocupe o restante do espaço disponível na horizontal */
    padding: 1em;
}

.user-actions {
    display: flex;
    gap: 1em;
    /* Espaçamento entre os botões */
}

#delete-button {
    background-color: #e93c3c;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}


#delete-button:hover {
    background-color: #b12e2e;
}

#edit-button {
    background-color: #d1d728;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;
}

#edit-button:hover {
    background-color: #9aa045;
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