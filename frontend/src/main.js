import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router instance directly

const app = createApp(App);
app.use(router); // Use VueRouter
app.mount('#app');
