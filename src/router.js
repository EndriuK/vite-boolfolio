import { createRouter, createWebHistory } from "vue-router";

import PageBlog from "./pages/PageBlog.vue";
import PageHome from "./pages/PageHome.vue";
import PagePortfolio from "./pages/PagePortfolio.vue";
import PageAbout from "./pages/PageAbout.vue";

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
    {
      path: "/about",
      name: "about",
      component: PageAbout,
    },
  ],
});

export { router };
