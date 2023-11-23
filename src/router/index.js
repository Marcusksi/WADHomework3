import { createRouter, createWebHashHistory } from "vue-router";
import FetchView from "../views/FetchView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/fetch",
        name: "fetch",
        component: FetchView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;