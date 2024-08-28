import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './templates/HomePage.vue';
import LoginPage from './templates/LoginPage.vue';
import RegisterUser from './components/RegisterUser.vue';
import ListUser from './components/ListUser.vue';
import EditPage from "./components/EditPage.vue";

import AssessmentPage from "./templates/AssessmentPage.vue";
import AssessmentUser from "./components/AssessmentUser.vue";
import PhysicalAssessments from "./components/PhysicalAssessments.vue";
const routes = [
    {
        path: '/',
        component: LoginPage,
        name: 'LoginPage',
        meta: { hideHeader: true }
    },
    {
        path: '/HomePage',
        component: HomePage,
        name: 'HomePage',
        meta: { requiresAuth: true }
    },
    {
        path: '/RegisterUser',
        component: RegisterUser,
        name: 'RegisterUser'
    },
    {
        path: '/ListUser',
        component: ListUser,
        name: 'ListUser'
    },
    {
        path: "/edit/:id",
        name: "EditPage",
        component: EditPage,
    },
    {
        path: '/AssessmentPage',
        component: AssessmentPage,
        name: 'AssessmentPage'
    },
    {
        path: '/AssessmentUser',
        component: AssessmentUser,
        name: 'AssesmentUser'
    },
    {
        path: '/PhysicalAssessments',
        component: PhysicalAssessments,
        name: 'PhysicalAssessments'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});



export default router; // Export the router instance
