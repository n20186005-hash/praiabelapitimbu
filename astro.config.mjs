import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://praiabelapitimbu.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
