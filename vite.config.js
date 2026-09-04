import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

// https://vite.dev/config/ — SolidJS via vite-plugin-solid.
// Build output goes to `dist`, which ngris auto-detects and serves.
export default defineConfig({
  plugins: [solid()],
  build: {
    outDir: "dist",
    target: "esnext",
  },
});
