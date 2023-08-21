import { createRouter, createWebHistory, RouteMeta } from "vue-router";
import { routes } from "./route";
import { setIcon } from '@/utils/tool'

const env = import.meta.env;

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta as RouteMeta).title as string + ' | ' + env.VITE_APP_Title;
  if (to.meta.icon) setIcon(to.meta.icon as string);
  next();
})

export default router;
  