import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // Questa configurazione per problema di progetto che non si apre nel browser
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
});
