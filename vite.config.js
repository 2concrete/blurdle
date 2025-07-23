import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/random-image": {
        target: "https://random-image-pepebigotes.vercel.app",
        changeOrigin: true,
      },
    },
  },
});
