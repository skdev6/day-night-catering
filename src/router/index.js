import { createRouter, createWebHistory } from "vue-router";
import Cart from "../pages/Cart.vue";
import ProductDetails from "../pages/ItemDetails.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: ProductDetails,
	},
	{
		path: "/product-details/:id",
		name: "ProductDetails",
		component: ProductDetails,
	},
	{
		path: "/cart",
		name: "Cart",
		component: Cart,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
