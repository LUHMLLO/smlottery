import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/products',
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('@/views/Articles/Products.vue'),
    },
    {
        path: '/deals',
        name: 'Deals',
        component: () => import('@/views/Articles/Deals.vue'),
    },
    {
        path: '/coupons',
        name: 'Coupons',
        component: () => import('@/views/Articles/Coupons.vue'),
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/Articles/Search.vue'),
    },
    {
        path: '/article/:merchant/:product',
        name: 'Single',
        component: () => import('@/views/Single.vue'),
    },
    {
        path: '/contact',
        name: 'Contact Us',
        component: () => import('@/views/Contact.vue'),
    },
    {
        path: '/privacy',
        name: 'Privacy Policies',
        component: () => import('@/views/Privacy.vue'),
    },
    {
        path: '/about',
        name: 'About Us',
        component: () => import('@/views/About.vue'),
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: '404',
    //     component: () => import('@/views/Articles/Products.vue'),
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
})

export default router
