import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  base: "/",
  resolve: {
    alias: [
      {
        find: "~/",
        replacement: `/src/assets/`,
      },
      {
        find: "@/",
        replacement: `/src/`,
      },
    ],
  },
  build: {
    cssCodeSplit: true,
  },
  optimizeDeps: {
    include: ["vue", "vue-router", "pinia", "sass", "mindesignsystem"],
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("min-"),
        },
      },
    }),
    AutoImport({
      imports: ["vue", "@vueuse/head", "vue-router"],
      dts: "auto-imports.d.ts",
    }),
    Pages({
      dirs: "src/views",
    }),
    Components({
      dirs: ["src/components"],
      extensions: ["vue"],
      deep: true,
      dts: true,
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [
        /[\\/]node_modules[\\/]/,
        /[\\/]\.git[\\/]/,
        /[\\/]\.nuxt[\\/]/,
      ],
    }),
  ],
});
