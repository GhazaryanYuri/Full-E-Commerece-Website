import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Contact from "@/pages/Contact.vue";
import About from "@/pages/About.vue";
import SignUP from "@/pages/Sign-UP.vue";

const routes = [
  { path: "/Full-E-Commerece-Website/home", name: "Home", component: Home },
  {
    path: "/Full-E-Commerece-Website/contact",
    name: "Contact",
    component: Contact,
  },
  { path: "/Full-E-Commerece-Website/about", name: "About", component: About },
  {
    path: "/Full-E-Commerece-Website/sign-up",
    name: "Sign up",
    component: SignUP,
  },
  { path: "/:catchAll(.*)", redirect: "/Full-E-Commerece-Website/home" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
