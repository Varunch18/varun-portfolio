// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Remove this line if it's there: import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // CRUCIAL: Base path for deployment on a subpath like GitHub Pages
  // This must be your repository name surrounded by slashes.
  base: mode === 'production' ? '/varun-portfolio/' : '/',

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Remove the componentTagger plugin if it was causing issues and you're not using it.
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));