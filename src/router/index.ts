import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Realty",
    component: () => import("../views/Realty.vue")
  },
  {
    path: "/add",
    name: "Add Realty",
    component: () => import("../views/AddRealty.vue")
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import("../views/EditRealty.vue")
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/Users.vue")
  },
  {
    path: "/adduser",
    name: "Add user",
    component: () => import("../views/AddUser.vue")
  },
  {
    path: "/edituser",
    name: "Edit user",
    component: () => import("../views/EditUser.vue")
  },
  {
    path: "/rent",
    name: "Rent",
    component: () => import("../views/Rent.vue")
  },
  {
    path: "/addrent",
    name: "Add rent",
    component: () => import("../views/AddRent.vue")
  },
  {
    path: "/editrent",
    name: "Edit Rent",
    component: () => import("../views/EditRent.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
