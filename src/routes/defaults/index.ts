import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: () => import("../../views/HomeView.vue")
    },
    {
        path: "/test",
        name: "test",
        component: () => import("../../views/TestView.vue")
    },
    {
        path: "/event/detect",
        name: "event-detect",
        component: () => import("../../views/EventDetectView.vue")
    }
];

export default routes;