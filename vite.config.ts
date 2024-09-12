import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "stats.html", // The output file for the visualization
      open: true, // Automatically opens the browser after the build
    }),
  ],
});
