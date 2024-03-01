import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPatient from './components/RegisterPatient.vue';

const routes = [
    {
        path: '/',
        component: LoginPage,
        name: 'LoginPage'
    },
    {
        path: '/home',
        component: HomePage,
        name: 'HomePage'
    },
    {
        path: '/RegisterPatient',
        component: RegisterPatient,
        name: 'RegisterPatient'
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router; // Export the router instance
