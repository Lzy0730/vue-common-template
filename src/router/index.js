import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/vct/layouts";

import { routerMode, loginMode } from "@/config";

Vue.use(VueRouter);

export const constantRoutes = [];

export const asyncRoutes = [
  {
    path: "/",
    name: "Root",
    component: Layout,
    meta: {
      icon: "home-3-line",
      title: "首页",
    },
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("../views/index.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
];

const router = createRouter();

function fatteningRoutes(routes) {
  return routes.flatMap((route) => {
    return route.children ? fatteningRoutes(route.children) : route;
  });
}

export function resetRouter(routes = constantRoutes) {
  routes.map((route) => {
    if (route.children) {
      route.children = fatteningRoutes(route.children);
    }
  });
  router.matcher = createRouter(routes).matcher;
}

function createRouter(
  routes = loginMode ? constantRoutes : [...constantRoutes, ...asyncRoutes]
) {
  return new VueRouter({
    base: process.env.BASE_URL,
    mode: routerMode,
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: routes,
  });
}

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
