import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    viteImagemin({
      webp: {
        quality: 75,
      },
      pngquant: {
        quality: [0.6, 0.8],
        speed: 4,
      },
      mozjpeg: {
        quality: 75,
      },
    }),
  ],
});
