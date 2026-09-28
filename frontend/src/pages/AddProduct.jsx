import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import "../styles/AddProduct.css";

export default function AddProduct() {
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
    description: "",
    stock: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post(
        "/products",
        {
          name: formData.name,
          brand: formData.brand,
          price: Number(formData.price),
          image: formData.image,
          description: formData.description,
          stock: Number(formData.stock),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product added successfully!");

      navigate("/dashboard/products");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to add product"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product-page">
      <div className="add-product-card">

        <h1>Add Product</h1>

        <p>
          Add a new sneaker to your store.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Product Name</label>

            <input
              type="text"
              name="name"
              placeholder="Nike Air Max 90"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Brand</label>

            <input
              type="text"
              name="brand"
              placeholder="Nike"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Price</label>

              <input
                type="number"
                name="price"
                placeholder="9999"
                value={formData.price}
                onChange={handleChange}
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label>Stock</label>

              <input
                type="number"
                name="stock"
                placeholder="10"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label>Image URL</label>

            <input
              type="text"
              name="image"
              placeholder="https://..."
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              placeholder="Product description..."
              value={formData.description}
              onChange={handleChange}
              rows="5"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Adding Product..."
              : "Add Product"}
          </button>

        </form>

      </div>
    </div>
  );
}