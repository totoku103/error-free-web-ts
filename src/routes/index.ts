import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import defaultsRoutes from './defaults/index'

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home2",
        component: () => import("../layouts/DefaultLayout.vue"),
        children: defaultsRoutes
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
