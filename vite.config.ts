import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      api: `${path.resolve(__dirname, "./src/api/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      contexts: `${path.resolve(__dirname, "./src/contexts/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
      layouts: `${path.resolve(__dirname, "./src/layouts/")}`,
      modules: path.resolve(__dirname, "./src/modules"),
      types: `${path.resolve(__dirname, "./src/types")}`,
      utils: `${path.resolve(__dirname, "./src/utils")}`,
    },
  },
});