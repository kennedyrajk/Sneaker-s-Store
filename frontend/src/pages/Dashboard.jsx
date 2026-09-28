import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import DashboardCard from "../components/dashboard/DashboardCard";
import {
  FaBoxOpen,
  FaUsers,
  FaShoppingBag,
  FaRupeeSign,
} from "react-icons/fa";

import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <Topbar />
        <h1 className="dashboard-title">Admin Dashboard</h1>

        <div className="dashboard-cards">

  <DashboardCard
    title="Products"
    value="50"
    icon={<FaBoxOpen />}
  />

  <DashboardCard
    title="Users"
    value="12"
    icon={<FaUsers />}
  />

  <DashboardCard
    title="Orders"
    value="8"
    icon={<FaShoppingBag />}
  />

  <DashboardCard
    title="Revenue"
    value="₹1,25,000"
    icon={<FaRupeeSign />}
  />

</div>
      </div>
    </div>
  );
}