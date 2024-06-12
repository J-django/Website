import { createRouter, createWebHistory, RouteMeta } from "vue-router";
import { routes } from "./route";

const env = import.meta.env;

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta as RouteMeta).title as string + ' | ' + env.VITE_APP_Title;
  next();
})

export default router;
