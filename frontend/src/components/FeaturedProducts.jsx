import { useEffect, useState } from "react";
import api from "../services/api.js";
import ProductSection from "./ProductSection.jsx";
export default function FeaturedProducts({ products }) {


  return (

    <>

      <ProductSection
        title="🔥 Trending Sneakers"
        products={products.slice(0, 8)}
      />

      <ProductSection
        title="🆕 New Arrivals"
        products={products.slice(8, 16)}
      />

      <ProductSection
        title="⭐ Best Sellers"
        products={products.slice(16, 24)}
      />

      <ProductSection
        title="👟 Nike Collection"
        products={products.filter(product =>
          product.brand?.toLowerCase().includes("nike")
        )}
      />

      <ProductSection
        title="👟 Adidas Collection"
        products={products.filter(product =>
          product.brand?.toLowerCase().includes("adidas")
        )}
      />

      <ProductSection
        title="🔥 Jordan Collection"
        products={products.filter(product =>
          product.brand?.toLowerCase().includes("jordan")
        )}
      />

    </>

  );

}