import { reactive } from "vue";

export const store = reactive({
  menuItems: [
    {
      name: "homepage",
      label: "Home",
    },
    // {
    //   name: "about",
    //   label: "Chi siamo",
    // },
    {
      name: "blog",
      label: "Blog",
    },
    // {
    //   name: "contacts",
    //   label: "Contatti",
    // },
    {
      name: "portfolio",
      label: "Portfolio",
    },
  ],
});
