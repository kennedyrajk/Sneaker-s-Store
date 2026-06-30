import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ProductCard from "./ProductCard.jsx";
import api from "../services/api.js";

import { fadeUp } from "../animations/fadeUp.js";
import "../styles/FeaturedProducts.css";
export default function FeaturedProducts() {

const [products,setProducts]=useState([]);

useEffect(()=>{

fetchProducts();

},[]);

const fetchProducts=async()=>{

const res=await api.get("/products");

setProducts(res.data);

};

return(

<section className="featured">

<motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
>
    <h1>Trending Sneakers</h1>

    <p>Premium Collection</p>
</motion.div>

<div className="products-grid">

{products.map(product=>(

<ProductCard
key={product._id}
product={product}
/>

))}

</div>

</section>

);

}