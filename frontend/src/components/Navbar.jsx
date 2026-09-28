import { useState, useEffect, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

import {
  FaShoppingCart,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {

  const navigate = useNavigate();
  
  const { cartItems } = useContext(CartContext);

  const { user, logout } = useContext(AuthContext);

  const [showMenu, setShowMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const handleLogout = () => {
  logout();
  setShowMenu(false);
  navigate("/");
};

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

        {user?.isAdmin && (
          <Link to="/dashboard">
            Dashboard
          </Link>
        )}
      </div>

      <div className="nav-icons">
        <Link
          to="/cart"
          className="cart-icon-wrapper"
        >
          <FaShoppingCart />

          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}
        </Link>

        {user ? (
          <div
            className="user-menu"
            onClick={() =>
              setShowMenu(!showMenu)
            }
          >
            <span>
              Hi, {user.name}
            </span>

            <FaChevronDown />

            {showMenu && (
              <div className="dropdown-menu">
                <Link to="/profile">
                  Profile
                </Link>

                <Link to="/orders">
                  My Orders
                </Link>

                {user.isAdmin && (
                  <Link to="/dashboard">
                    Dashboard
                  </Link>
                )}

                <button
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          
            <FaUser />
          
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;