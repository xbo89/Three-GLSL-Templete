// for three project - vite.config.js
import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
export default defineConfig({
  publicDir: "public",
  build: {
    outDir: "./dist",
  },
  plugins: [glsl()],
});
