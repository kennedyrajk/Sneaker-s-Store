import { useContext } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/Topbar.css";

export default function Topbar() {
  const { user } = useContext(AuthContext);

  return (
    <header className="dashboard-topbar">
      <div className="topbar-search">
        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="topbar-right">

        <button className="notification-btn">
          <FaBell />
        </button>

        <div className="admin-profile">
          <FaUserCircle />

          <div>
            <strong>
              {user?.name || "Admin"}
            </strong>

            <span>
              Administrator
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}