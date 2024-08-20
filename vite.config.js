import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactScopedCssPlugin } from "rollup-plugin-react-scoped-css";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
      pages: path.resolve(__dirname, "src/pages"),
      utils: path.resolve(__dirname, "src/utils"),
      apis: path.resolve(__dirname, "src/apis"),
      hocs: path.resolve(__dirname, "src/hocs"),
      hooks: path.resolve(__dirname, "src/hooks"),
      store: path.resolve(__dirname, "src/store"),
      router: path.resolve(__dirname, "src/router"),
    },
  },
  plugins: [react(), reactScopedCssPlugin()],

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
