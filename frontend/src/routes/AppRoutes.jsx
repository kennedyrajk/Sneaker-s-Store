import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ManageProducts from "../pages/ManageProducts";
import AdminRoute from "../components/AdminRoute";
import AddProduct from "../pages/AddProduct";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
  path="/dashboard/add-product"
  element={<AddProduct />}
/>
      
      <Route path="/dashboard" element={
        <AdminRoute>
          <Dashboard />
        </AdminRoute>
      }
    />

      <Route path="/dashboard/products" element={
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        }
      />
    </Routes>
  );
}
export default AppRoutes;
