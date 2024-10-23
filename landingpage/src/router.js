import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import HomePatientView from "./views/HomePatientView.vue";
import PainelPatient from "./components/PainelPatient.vue";
import LoginPatientModal from "./components/LoginPatientModal.vue";

const routes = [
  {
    path: "/avasoft",
    name: "home",
    component: HomeView,
    meta: { showNavbar: false },
  },
  {
    path: "/homePatient",
    name: "homePatient",
    component: HomePatientView,
    meta: { showNavbar: false },
  },
  {
    path: "/login",
    name: "LoginPatientModal",
    component: LoginPatientModal,
    meta: { showNavbar: false },
  },
  {
    path: "/PainelPatient",
    name: "PainelPatient",
    component: PainelPatient,
    meta: { showNavbar: true, requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guardião de rota para verificar autenticação
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); 
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'LoginPatientModal' });
  } else {
    next();
  }
});



export default router;
