import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/test/counter',
    },
    {
        path: '/test/counter',
        name: 'Test-counter',
        component: () => import('@/views/test/counter.vue'),
    },
    {
        path: '/test/theme',
        name: 'Test-theme',
        component: () => import('@/views/test/theme.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes as RouteRecordRaw[],
})

export default router
