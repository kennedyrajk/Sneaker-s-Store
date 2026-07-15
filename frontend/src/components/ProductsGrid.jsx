import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import "../styles/ProductsGrid.css";

export default function ProductsGrid({ products }) {

    return (
        <motion.div

            className="products-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
        >

            {
                products.map(product => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))
        }
        </motion.div>
    );
}