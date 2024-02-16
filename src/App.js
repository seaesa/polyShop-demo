import Template from "./components/template/Template";
import ProductDetail from "./components/products/detail/ProductDetail";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import ProductList from "./components/products/ProductList";
import Admin from "./components/admin";
import Blank from "./components/admin/pages/Blank";
import Products from './components/admin/components/products';
import Dashboard from './components/admin/pages/Dashboard';
import { Cart } from "./components/cart";
export default function App() {
  return (
    <Routes>
      <Route path="/products" element={<Template><ProductList /></Template>} />
      <Route path="/cart" element={<Template><Cart /></Template>} />
      <Route path="/products/:productId" element={<Template><ProductDetail /></Template>} />
      <Route path="/admin" element={<Admin />} >
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Blank />} />
        <Route path="products" element={<Products />} />
        <Route path="customers" element={<Blank />} />
        <Route path="settings" element={<Blank />} />
        <Route path="stats" element={<Blank />} />
      </Route>
      <Route path="/" element={<Template><Landing /></Template>} />
    </Routes>
  );
}
