import People from "@/views/People.vue";
import Planets from "@/views/Planets.vue";
import Startships from "@/views/Startships.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/people/:id?",
      name: "people",
      component: People,
    },

    {
      path: "/planets/:id?",
      name: "planets",
      component: Planets,
    },
    {
      path: "/starships/:id?",
      name: "starships",
      component: Startships,
    },
  ],
});

export default router;
