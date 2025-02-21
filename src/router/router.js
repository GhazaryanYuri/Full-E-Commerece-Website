import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Contact from "@/pages/Contact.vue";
import About from "@/pages/About.vue";
import SignUP from "@/pages/Sign-UP.vue";

const routes = [
  { path: "/home", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/about", name: "About", component: About },
  { path: "/sign-up", name: "Sign up", component: SignUP },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
