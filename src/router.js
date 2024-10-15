import { createRouter, createWebHistory } from "vue-router";

import PageBlog from "./pages/PageBlog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: PageBlog,
    },
  ],
});

export { router };
