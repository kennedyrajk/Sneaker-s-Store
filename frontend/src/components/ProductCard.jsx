import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import "../styles/ProductCard.css";
import { fadeUp } from "../animations/fadeUp";

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="product-card"

      variants={fadeUp}

      initial
      
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{ duration: 0.35 }}
    >
      <div className="image-container">
        <img src={product.image} alt={product.name} />

        <button className="wishlist">
          <FaHeart />
        </button>
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>

        <p>{product.brand}</p>

        <div className="price-row">
          <span>₹{product.price}</span>

          <button>Add</button>
        </div>
      </div>
    </motion.div>
  );
}
