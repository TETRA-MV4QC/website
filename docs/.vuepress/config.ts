import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "TETRA MV4QC",
      description: "The webpage for the TETRA MV4QC project",
    }
  },

  theme,

  shouldPrefetch: false,
});
