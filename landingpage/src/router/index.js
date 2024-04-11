import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Footer from "../components/Footer.vue";

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
      path: "/contato",
      name: "contact",
      component: Footer,
      meta: { showNavbar: true },
    },
    ],

});

export default router;
