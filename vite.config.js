import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  server: {
    host: true,   // "127.0.0.1" -> configuration to fix the problem of the project that doesn't appear in the browser
    port: 5173,
    cors: true
  },
});
