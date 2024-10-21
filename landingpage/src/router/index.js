import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomePatientView from "../views/HomePatientView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { showNavbar: false },
    },
    {
      path: "/homePatient",
      name: "homePatient",
      component: HomePatientView,
      meta: { showNavbar: false },
    }
    ],

});

export default router;
