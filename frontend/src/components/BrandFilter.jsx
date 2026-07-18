import { motion } from "framer-motion";

import "../styles/BrandFilter.css";

const brands = [
  "All",
  "Nike",
  "Adidas",
  "Jordan",
  "Puma",
  "Koenigsegg",
  "Bmw",
  "Mclaren",
  "Chevrolet",
  "Mini",
  "Toyota",
  "Porsche",
  "Lamborghini",
  "New Balance",
  "Reebok",
  "Under Armour",
];

export default function BrandFilter({
  selectedBrand,
  setSelectedBrand,
}) {
  return (
    <motion.div
      className="brand-filter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {brands.map((brand) => (
        <button
          key={brand}
          className={
            selectedBrand === brand
              ? "brand-btn active"
              : "brand-btn"
          }
          onClick={() => setSelectedBrand(brand)}
        >
          {brand}
        </button>
      ))}
    </motion.div>
  );
}
