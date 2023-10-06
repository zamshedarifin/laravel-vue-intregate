import {createWebHistory, createRouter} from "vue-router";
import homePage from './layouts/index.vue';
import userPage from './layouts/user.vue';
const routes = [
    {
        name: 'home',
        path: '/',
        component: homePage
    },   {
        name: 'user',
        path: '/user',
        component: userPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
