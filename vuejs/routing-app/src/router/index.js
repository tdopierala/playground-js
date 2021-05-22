import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Users from '../views/Users.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/users', name: 'Users', component: Users, children: [{ path: ':groupId', name: 'Users', component: Users }] },
    { path: '/link2', name: 'Link2', component: Home },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
