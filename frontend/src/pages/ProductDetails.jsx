import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import api from "../services/api";

import "../styles/ProductDetails.css";

export default function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await api.get(`/products/${id}`);

      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!product) {

    return (
      <>
        <Navbar />

        <div className="loading-product">
          Loading Product...
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="product-details">

        <div className="product-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="product-info">

          <h1>{product.name}</h1>

          <h3>{product.brand}</h3>

          <h2>₹{product.price}</h2>

          <p>
            {product.description}
          </p>

        </div>

      </section>
    </>
  );
}