import { Fragment } from "react";
import Category from "../components/admin/components/categogies";
import Products from "../components/admin/components/products";
import Blank from "../components/admin/pages/Blank";
import Dashboard from "../components/admin/pages/Dashboard";
import { Cart } from "../components/cart";
import Landing from "../components/landing/Landing";
import ProductList from "../components/products/ProductList";
import ProductDetail from "../components/products/detail/ProductDetail";
import Admin from "../components/admin";
export const RouteElement = [
  {
    rootPath: '/',
    element: Landing
  },
  {
    rootPath: '/products',
    element: ProductList
  },
  {
    rootPath: '/cart',
    element: Cart
  },
  {
    rootPath: '/products/:productId',
    element: ProductDetail
  },
  {
    rootPath: '/admin',
    element: Admin,
    template: Fragment,
    childrenPath: [
      {
        path: '',
        element: Dashboard
      },
      {
        path: 'category',
        element: Category
      },
      {
        path: 'products',
        element: Products
      },
      {
        path: 'customers',
        element: Blank
      },
      {
        path: 'settings',
        element: Blank
      },
      {
        path: 'stats',
        element: Blank
      },
    ],
  },
]