import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/config'


const app = createApp(App);

app.use(router);
app.mount('#app');