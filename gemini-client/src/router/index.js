import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    // ここを追加
    {
        path: '/currency',
        name: 'currency',
        component: () =>
            import(/* webpackChunkName: "currency" */ '../views/Currency.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/signup',
        name: 'signup',
        component: () =>
            import(/* webpackChunkName: "singup" */ '../views/Signup.vue'),
    },
    {
        path: '/signin',
        name: 'signin',
        component: () =>
            import(/* webpackChunkName: "singin" */ '../views/Signin.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (requiresAuth) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                next();
            } else {
                next({
                    path: '/signin',
                    query: { redirect: to.fullPath },
                });
            }
        });
    } else {
        next();
    }
});

export default router;
