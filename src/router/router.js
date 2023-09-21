import { createRouter, createWebHistory} from 'vue-router';
import AllProducts from '../components/AllProducts.vue';
import Details from '../components/Details.vue';


const routes = [
    {
        path: "/",
        component: AllProducts
    },
    {
        path: "/products/:id",
        component: Details,
        name: 'details',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router