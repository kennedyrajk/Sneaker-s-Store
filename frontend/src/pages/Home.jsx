import { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import BrandSection from "../components/BrandSection";
import api from "../services/api";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
      <BrandSection
        products={products}
      />
      <FeaturedProducts
        products={products}
      />
      
      <WhyChooseUs/>
    <Newsletter/>
    <Footer/>
      
    </>
  );

}