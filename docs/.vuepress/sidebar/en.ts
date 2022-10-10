import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Use Cases",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Documentation",
      icon: "note",
      prefix: "guides/",
      children: "structure",
    },
    "slides",
  ],
});
