import { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ProductCard from "./ProductCard";
import { fadeUp } from "../animations/fadeUp";
import "../styles/ProductSection.css";

export default function ProductSection({ title, products }) {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      className="product-section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="section-header">
        <h2>{title}</h2>

        <div className="arrow-buttons">
          <button onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <button onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="horizontal-scroll" ref={scrollRef}>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </motion.section>
  );
}