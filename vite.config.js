import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/blogs/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — changes almost never
          "vendor-react": ["react", "react-dom"],

          // Routing — changes rarely
          "vendor-router": ["react-router-dom"],

          // Framer Motion is HEAVY (~150kb) — isolate it
          "vendor-motion": ["framer-motion"],
        },
      },
    },
    chunkSizeWarningLimit: 500, // warns if any chunk > 500kb
    minify: 'esbuild',          // faster & smaller builds
    sourcemap: false,
  },
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(),
  ],
});