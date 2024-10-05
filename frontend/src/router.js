import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './templates/HomePage.vue';
import LoginPage from './templates/LoginPage.vue';
import RegisterUser from './components/RegisterUser.vue';
import ListUser from './components/ListUser.vue';
import EditPage from "./components/EditPage.vue";
import AssessmentPage from "./templates/AssessmentPage.vue";
import AssessmentUser from "./components/AssessmentUser.vue";
import PhysicalAssessments from "./components/PhysicalAssessments.vue";
import PasswordReset from './templates/PasswordReset.vue';
import PasswordResetConfirm from './templates/PasswordResetConfirm.vue';
import ProfessionalRegister from './templates/ProfessionalRegister.vue';
import PatientList from './templates/PatientList.vue';


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
    },
    {
        path: '/reset-password-confirm/:resetToken',
        component: PasswordResetConfirm,
        name: 'PasswordResetConfirm',
        meta: { hideHeader: true }
    },
    {
        path: '/PasswordReset',
        component: PasswordReset,
        name: 'PasswordReset',
        meta: { hideHeader: true }
    },
    {
        path: '/ProfessionalRegister',
        component: ProfessionalRegister,
        name: 'ProfessionalRegister'
    },
    {
        path: '/patientlist',
        component: PatientList,
        name: 'PatientList'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to, from, failure) => {
    if (!failure) {
        setTimeout(() => {
            window.HSStaticMethods.autoInit();
        }, 100)
    }
});


export default router;
