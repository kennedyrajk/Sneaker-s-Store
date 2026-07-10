import { useEffect, useState } from "react";

import HeroSlider from "../components/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import BrandSection from "../components/BrandSection";
import Footer from "../components/Footer";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar/>
      <HeroSlider />
      <FeaturedProducts
        products={products}
      />
      <BrandSection
        products={products}
      />
      
    </>
  );

}