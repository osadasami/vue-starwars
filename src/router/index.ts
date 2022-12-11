import Login from "@/views/Login.vue";
import People from "@/views/People.vue";
import Planets from "@/views/Planets.vue";
import Secret from "@/views/Secret.vue";
import Startships from "@/views/Startships.vue";
import { ref, type Ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const isLoggedIn: Ref<boolean> = ref(false);

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

    {
      path: "/login",
      name: "login",
      component: Login,
      props: {
        isLoggedIn: isLoggedIn,
        onLogin: () => (isLoggedIn.value = true),
      },
    },

    {
      path: "/secret",
      name: "secret",
      component: Secret,
      props: {
        isLoggedIn: isLoggedIn,
      },
    },
  ],
});

export default router;
