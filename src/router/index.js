import { createRouter, createWebHashHistory } from "vue-router";
import toolsData from "@/data/tools.json";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/HomeView.vue")
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "@/views/AboutView.vue")
    },
    {
        path: "/prettier",
        name: "Prettier",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "@/views/PrettierView.vue")
    },
    {
        path: "/:catchAll(.*)",
        component: () => import("@/views/NotFoundView.vue")
    },
    {
        path: `/tools/bmi-calculator`,
        name: "BMI Calculator",
        component: () => import("@/tools/BMICalc.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
