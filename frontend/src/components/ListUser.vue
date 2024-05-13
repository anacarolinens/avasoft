<template>



    <div class="container">

        

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

</template>

<script>

export default {
    components: {
  
    },
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

</style>