import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router instance directly
import axios from 'axios';

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(router); // Use VueRouter
app.mount('#app');
