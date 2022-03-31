import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import routes from "~pages";

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
});

export default router;
