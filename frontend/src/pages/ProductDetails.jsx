import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import api from "../services/api";

import "../styles/ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [selectedImage, setSelectedImage] = useState("");

  const [relatedProducts, setRelatedProducts] = useState([]);

  const [selectedSize, setSelectedSize] = useState(9);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await api.get(`/products/${id}`);

      setProduct(res.data);

      setSelectedImage(res.data.image);

      fetchRelatedProducts(res.data.brand, res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRelatedProducts = async (brand, currentId) => {
    try {
      const res = await api.get("/products");

      const related = res.data
        .filter(
          (product) =>
            product.brand === brand &&
            product._id !== currentId
        )
        .slice(0, 8);

      setRelatedProducts(related);
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

      <motion.section
        className="product-details"
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="product-gallery">
          <div className="thumbnail-list">
            {[1, 2, 3, 4].map((item) => (
              <img
                key={item}
                src={product.image}
                alt={product.name}
                className={
                  selectedImage === product.image
                    ? "thumb active-thumb"
                    : "thumb"
                }
                onClick={() =>
                  setSelectedImage(product.image)
                }
              />
            ))}
          </div>

          <div className="product-image">
            <motion.button
              className="wishlist-btn"
              whileHover={{
                scale: 1.15,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FaHeart />
            </motion.button>

            <motion.img
              src={selectedImage}
              alt={product.name}
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.4,
              }}
            />
          </div>
        </div>

        <div className="product-info">
          <span className="brand">
            {product.brand}
          </span>

          <h1>{product.name}</h1>

          <div className="rating">
            ⭐⭐⭐⭐⭐
            <span>(4.8)</span>
          </div>

          <h2>₹{product.price}</h2>

          <span className="stock">
            ✅ In Stock
          </span>

          <p>
            {product.description ||
              "Premium sneaker designed for everyday comfort and performance."}
          </p>

          <div className="sizes">
            <h4>Select Size</h4>

            <div className="size-buttons">
              {[7, 8, 9, 10, 11].map((size) => (
                <button
                  key={size}
                  className={
                    selectedSize === size
                      ? "active-size"
                      : ""
                  }
                  onClick={() =>
                    setSelectedSize(size)
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity">
            <h4>Quantity</h4>

            <div className="qty-box">
              <button
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="cart-btn">
              Add To Cart
            </button>

            <button className="buy-btn">
              Buy Now
            </button>
          </div>

          <div className="delivery-info">
            <div>
              🚚
              <span>Free Delivery</span>
            </div>

            <div>
              🔄
              <span>7 Days Return</span>
            </div>

            <div>
              🔒
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </motion.section>

      <ProductSection
        title="You May Also Like"
        products={relatedProducts}
      />
    </>
  );
}