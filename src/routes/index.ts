import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home2",
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/Home",
        name: "home",
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/Test",
        name: "test",
        component: () => import("../views/TestView.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
