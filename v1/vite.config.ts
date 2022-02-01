import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

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
    minify: false,
  },
  optimizeDeps: {
    include: ["vue", "vue-router", "pinia", "@vueuse/core", "@vueuse/head", "sass", "axios", "mindesignsystem"],
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
      imports: ["vue", "@vueuse/core", "@vueuse/head", "vue-router", "vue-i18n"],
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
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "src/locales/**")],
    }),
  ],
});
