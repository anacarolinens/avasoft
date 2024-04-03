<template>
  <div class="container">
      <header>
          <h1>Avaliações</h1>

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
              <h2>Avaliações:</h2>
              <ul class="user-items">
                  <li v-for="user in users" :key="user.id_user" class="user-item">
                      <div class="user-info">
                          <span class="user-name">{{ user.fullName }}</span>
                          <span class="user-gender">({{ user.gender }})</span>
                      </div>
                      <div class="user-actions">
                       <!--iniciar avaliação  -->
                       <router-link id="record-button" to="/AssessmentUser">Registro</router-link>
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


#record-button {
  background-color: #28c8d7;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

#record-button:hover {
  background-color: #4562a0;
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