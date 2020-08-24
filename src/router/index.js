import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Contact from "../pages/contact";
import About from "../pages/about";
import Notfound from "../pages/notfound";
import Checkout from "../pages/checkout";
import Cart from "../pages/cart";
import Product from "../pages/products";
import Detail from "../pages/details";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "*",
    name: "Notfound",
    component: Notfound
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/product",
    name: "Product",
    component: Product
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
