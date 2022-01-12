import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
    base: '/',
    resolve: {
        alias: [
            {
                find: '~/',
                replacement: `/src/assets/`,
            },
            {
                find: '@/',
                replacement: `/src/`,
            },
        ],
    },
    build: {
        cssCodeSplit: true,
    },
    optimizeDeps: {
        include: ['vue', 'pinia'],
    },
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith('min-'),
                },
            },
        }),
        Pages({ dirs: [{ dir: resolve(__dirname, './src/pages'), baseRoute: '' }] }),
        Components({
            dirs: ['src/components'],
            extensions: ['vue'],
            deep: true,
            dts: false,
            directoryAsNamespace: true,
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
        }),
    ],
})
