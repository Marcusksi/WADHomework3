import { createRouter, createWebHashHistory } from "vue-router";
import FetchView from "../views/FetchView.vue";
import SignUpView from "../views/SignUpView.vue";

const routes = [{
        path: "/",
        name: "fetch",
        component: FetchView,
    },
    {
        path: "/signup",
        name: "signup",
        component: SignUpView,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;