import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import {
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useContext(CartContext);

console.log(cartItems);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={
        scrolled
          ? "navbar navbar-scrolled"
          : "navbar"
      }
    >
      <div className="logo">
        SneakerX
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>
      </div>

      <div className="nav-icons">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>

        <Link to="/login">
          <FaUser />
        </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;