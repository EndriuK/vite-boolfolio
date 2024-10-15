import { createRouter, createWebHistory } from "vue-router";

import PageBlog from "./pages/PageBlog.vue";
import PageHome from "./pages/PageHome.vue";
import PagePortfolio from "./pages/PagePortfolio.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: PageHome,
    },
    {
      path: "/blog",
      name: "blog",
      component: PageBlog,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PagePortfolio,
    },
  ],
});

export { router };
