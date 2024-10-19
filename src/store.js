import { reactive } from "vue";

export const store = reactive({
  baseUrl: "http://127.0.0.1:800/api",
  menuItems: [
    {
      name: "homepage",
      label: "Home",
    },
    {
      name: "about",
      label: "Chi sono",
    },
    {
      name: "blog",
      label: "Blog",
    },
    {
      name: "portfolio",
      label: "Portfolio",
    },
    {
      name: "contacts",
      label: "Contatti",
    },
  ],
});
