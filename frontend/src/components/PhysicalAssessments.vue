<template>
  <div class="container">


      <div class="content">


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

</style>