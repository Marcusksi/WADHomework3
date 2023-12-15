import { createRouter, createWebHashHistory } from "vue-router";
import Fetch from "../views/Fetch.vue";
import SignUp from "../views/SignUp.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import LogIn from "../views/LogIn.vue";

const routes = [{
        path: "/",
        name: "fetch",
        component: Fetch,
    },
    {
        path: "/signup",
        name: "signup",
        component: SignUp,
    },
    {
        path: "/addpost",
        name: "addpost",
        component: AddPost,
    },
    {
        path: "/post/:id",
        name: "post",
        component: APost,
    },
    {
        path: "/login",
        name: "login",
        component: LogIn,
    },
    { //will route to AllPosts view if none of the previous routes apply
        path: "/:catchAll(.*)",
        name: "AllPosts",
        component: AllPosts,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;