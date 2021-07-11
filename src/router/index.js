import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  // catch all 404
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
