import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Footer from "../components/Footer.vue";
import Attribute from "../components/Attribute.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { showNavbar: false },
    },
    ],

});

export default router;
