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
    sourcemap: false,
    minify: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 2000,
    brotliSize: false,
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
      dirs: [
        { dir: "src/views/base", baseRoute: "" },
        { dir: "src/views/superadmin", baseRoute: "/superadmin" },
        { dir: "src/views/manager", baseRoute: "/manager" },
        { dir: "src/views/labs", baseRoute: "/labs" },
      ],
    }),
    Components({
      dirs: ["src/components", "src/layouts"],
      extensions: ["vue", "md"],
      deep: true,
      dts: "dts/components.d.ts",
      directoryAsNamespace: false,
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
