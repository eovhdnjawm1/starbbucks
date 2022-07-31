import { createRouter, createWebHistory } from 'vue-router';
import DrinkDetailsPage from '@/pages/DrinkDetails.vue';
import CartView from '@/pages/ShoppingCart.vue';
import Login from '@/pages/LoginPage.vue';
import ProductItemView from '@/pages/ProductItem.vue';
import ProductListView from '@/pages/ProductList.vue';
import OrderView from '@/pages/OrderView.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/DrinkDetails',
    name: 'DrinkDetails',
    component: DrinkDetailsPage,
  },
  {
    path: '/product',
    name: 'ProductList',
    component: ProductListView,
  },
  {
    path: '/product/:productNo',
    name: 'ProductItem',
    component: ProductItemView,
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView,
  },
  {
    path: '/order',
    name: 'OrderView',
    component: OrderView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
