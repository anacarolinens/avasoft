import { createRouter, createWebHashHistory } from 'vue-router';
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
import PatientRegister from './templates/PatientRegister.vue';
import PatientList from './templates/PatientList.vue';
import ViewInformation from './templates/ViewInformation.vue';
import ProfessionalRegister from './templates/ProfessionalRegister.vue';
import EditAssessment from './templates/EditAssessment.vue';

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
        path: '/AssessmentPage/:id_patient',
        component: AssessmentPage,
        name: 'AssessmentPage',
        props: true, // Permite passar o parâmetro id como prop para o componente
    },
    {
        path: '/assessments/:id', // Rota para a edição de uma avaliação específica
        name: 'EditAssessment',
        component: EditAssessment,
        props: true, // Permite que os parâmetros da rota sejam passados como props para o componente
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
        path: '/PatientRegister',
        component: PatientRegister,
        name: 'PatientRegister'
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
    },
    {
        path: '/ViewInformation/:id',
        component: ViewInformation,
        name: 'ViewInformation'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.afterEach((to, from, failure) => {
    if (!failure) {
        setTimeout(() => {
            window.HSStaticMethods.autoInit();
        }, 100);
    }
});

export default router;
