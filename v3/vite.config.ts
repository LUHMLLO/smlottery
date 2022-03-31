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
    chunkSizeWarningLimit: 2000,
    minify: true,
    outDir: "dist",
  },
  optimizeDeps: {
    include: ["vue", "vue-router", "pinia", "@vueuse/core", "sass", "mindesignsystem"],
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: any) => tag.startsWith("min-"),
        },
      },
    }),
    AutoImport({
      imports: ["vue", "@vueuse/core", "vue-router"],
      dts: "dts/auto-imports.d.ts",
    }),
    Pages({
      dirs: [{ dir: "src/views", baseRoute: "" }],
    }),
    Components({
      dirs: ["src/components"],
      extensions: ["vue", "md"],
      deep: true,
      dts: "dts/components.d.ts",
      directoryAsNamespace: false,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
  ],
});
