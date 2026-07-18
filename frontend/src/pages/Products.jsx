import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductSearch from "../components/ProductSearch";
import BrandFilter from "../components/BrandFilter";
import SortDropdown from "../components/SortDropdown";
import ProductsGrid from "../components/ProductsGrid";
import Footer from "../components/Footer"
import api from "../services/api";
import "../styles/Products.css";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/Newsletter";
export default function Products() {

    const [products,setProducts]=useState([]);
    const [filteredProducts,setFilteredProducts]=useState([]);
    const [search,setSearch]=useState("");
    const [selectedBrand,setSelectedBrand]=useState("All");
    const [sort,setSort]=useState("");
    useEffect(()=>{
        fetchProducts();
    },[]);
    const fetchProducts=async()=>{
        try{
            const res=await api.get("/products");
            setProducts(res.data);
            setFilteredProducts(res.data);
        }
        catch(err){
            console.log(err);
        }
    };

    useEffect(()=>{
        let data=[...products];

        if(search!==""){
            data=data.filter(product=>
                product.name.toLowerCase().includes(
                    search.toLowerCase()
                )
            );
        }
        if(selectedBrand!=="All"){
            data=data.filter(product=>
                product.brand===selectedBrand
            );

        }
        if(sort==="low"){
            data.sort((a,b)=>a.price-b.price);
        }
        else if(sort==="high"){
            data.sort((a,b)=>b.price-a.price);
        }
        else if(sort==="az"){
            data.sort((a,b)=>
                a.name.localeCompare(b.name)
            );
        }
        else if(sort==="za"){
            data.sort((a,b)=>
                b.name.localeCompare(a.name)
            );

        }
        setFilteredProducts(data);

    },

    [
        search,
        selectedBrand,
        sort,
        products

    ]);

    return(

    <>
    <Navbar/>
    <section className="products-page">
        <div className="products-header">

            <h1>All Sneakers</h1>
            <p>
                Premium Collection For Every Step
            </p>
        </div>

        <ProductSearch
            search={search}
            setSearch={setSearch}
        />

        <BrandFilter
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
        />

        <SortDropdown
            sort={sort}
            setSort={setSort}
        />
        <ProductsGrid
            products={filteredProducts}
        />
        
        <WhyChooseUs/>

        <Newsletter/>
        
        <Footer/>
    </section>
    </>
    );
}