import { motion } from "framer-motion";

export default function DashboardCard({
  title,
  value,
  icon,
}) {
  return (
    <motion.div
      className="dashboard-card"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <div className="dashboard-card-icon">
        {icon}
      </div>

      <div className="dashboard-card-info">
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
    </motion.div>
  );
}