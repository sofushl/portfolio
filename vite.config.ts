import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/email": {
        target: "https://email.api.sofus.privatedns.org",
        changeOrigin: true,
      },
    },
  },
});
