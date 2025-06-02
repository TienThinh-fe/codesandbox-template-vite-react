import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { webUpdateNotice } from "@plugin-web-update-notification/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), webUpdateNotice()],
});
