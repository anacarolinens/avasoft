import './index.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import axios from 'axios';
import './assets/output.css';
import "preline/preline";
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(vue3GoogleLogin, {
    clientId: '901081763009-kpkjo48hqu0k51tihec09tmceij7l5go.apps.googleusercontent.com'
  })

app.use(router); // Use VueRouter
app.mount('#app');
