import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "AtoriaUI",
      fileName: "atoria-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
