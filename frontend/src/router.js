
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterUser from './components/RegisterUser.vue';




const routes = [
    {
        path: '/',
        component: LoginPage,
        name: 'LoginPage'
    },
    {
        path: '/HomePage',
        component: HomePage,
        name: 'HomePage'
    },
    {
        path: '/RegisterUser',
        component: RegisterUser,
        name: 'RegisterUser'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router; // Export the router instance
