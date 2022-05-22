import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { dragscrollNext } from "vue-dragscroll";

import App from "./App.vue";
import Home from "./components/pages/Home.vue";
import Colleagues from "./components/pages/Colleagues.vue";
import Projects from "./components/pages/Projects.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/colleagues", component: Colleagues },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

const app = createApp(App);

app.use(router);
app.directive("dragscroll", dragscrollNext);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
