import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

import "../styles/ProductSearch.css";

export default function ProductSearch({
  search,
  setSearch,
}) {
  return (
    <motion.div
      className="search-container"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search Sneakers..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </motion.div>
  );
}