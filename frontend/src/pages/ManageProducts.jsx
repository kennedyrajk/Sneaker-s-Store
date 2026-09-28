import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

import api from "../services/api";

import "../styles/ManageProducts.css";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await api.delete(`/products/${id}`);

      setProducts((prevProducts) =>
        prevProducts.filter(
          (product) => product._id !== id
        )
      );

      alert("Product deleted successfully!");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to delete product"
      );
    }
  };

  if (loading) {
    return (
      <div className="manage-products-page">
        <h2>Loading Products...</h2>
      </div>
    );
  }

  return (
    <div className="manage-products-page">
      <div className="manage-products-header">
        <div>
          <h1>Manage Products</h1>

          <p>
            View, edit and manage your sneaker
            inventory.
          </p>
        </div>

        <Link
          to="/dashboard/add-product"
          className="add-product-btn"
        >
          <FaPlus />
          Add Product
        </Link>
      </div>

      <div className="products-table-wrapper">
        <table className="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-table-image"
                    />
                  </td>

                  <td>
                    <strong>{product.name}</strong>
                  </td>

                  <td>{product.brand}</td>

                  <td>
                    ₹{product.price}
                  </td>

                  <td>
                    <span className="stock-badge">
                      {product.stock ?? 0}
                    </span>
                  </td>

                  <td>
                    <div className="product-actions">
                      <Link
                        to={`/dashboard/products/edit/${product._id}`}
                        className="edit-btn"
                      >
                        <FaEdit />
                      </Link>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(product._id)
                        }
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="no-products"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}