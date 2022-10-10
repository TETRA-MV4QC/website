import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Use Cases",
    icon: "creative",
    link: "/usecases/"
  },
  {
    text: "Demonstrators",
    icon: "lamp",
    link: "/demonstrators/"
  },
  {
    text: "Documentation",
    icon: "note",
    prefix: "guides/",
    children: [
      {
        text: "Existing Techniques",
        icon: "creative",
        link: "/existing_techniques/"
      },
      {
        text: "Practical Knowledge",
        icon: "config",
        link: "/practical_knowledge/"
      },
    ],
  },
]);
