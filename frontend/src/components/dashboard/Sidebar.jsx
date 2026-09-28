import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import {
  FaTachometerAlt,
  FaBoxOpen,
  FaPlusCircle,
  FaShoppingBag,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { AuthContext } from "../../context/AuthContext";

import "../../styles/Sidebar.css";

export default function Sidebar() {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">
        SneakerX
      </h2>

      <nav className="sidebar-links">

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/dashboard/products"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink
          to="/dashboard/add-product"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaPlusCircle />
          <span>Add Product</span>
        </NavLink>

        <NavLink
          to="/dashboard/orders"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaShoppingBag />
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaUsers />
          <span>Users</span>
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </nav>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
}