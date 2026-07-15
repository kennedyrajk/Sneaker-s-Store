import { motion } from "framer-motion";
import {SiNike,SiAdidas,SiPuma,SiJordan,SiKoenigsegg,SiBmw,SiMclaren,SiChevrolet,SiMini,SiToyota,SiPorsche,SiLamborghini} from "react-icons/si";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/BrandSection.css";
import { fadeUp } from "../animations/fadeUp";
export default function BrandSection({ products }) {

const brands=[{
    name:"Nike",
    icon:<SiNike/>
    },
    {
    name:"Adidas",
    icon:<SiAdidas/>
    },

    {
    name:"Jordan",
    icon:<SiJordan/>
    },
    {
    name:"Puma",
    icon:<SiPuma/>
    },

    {
    name:"koenigsegg",
    icon:<SiKoenigsegg/>
    },

    {
    name:"BMW",
    icon:<SiBmw/>
    },

    {
    name:"Mclaren",
    icon:<SiMclaren/>
    },
    {
    name:"Chevrolet",
    icon:<SiChevrolet/>
    },
    {
    name:"Mini",
    icon:<SiMini/>
    },
    {
    name:"Toyota",
    icon:<SiToyota/>
    },
    {
    name:"Porsche",
    icon:<SiPorsche/>
    },

    {
    name:"Lamborghini",
    icon:<SiLamborghini/>
    },
    ];

    const scrollRef = useRef();

const scrollLeft = () => {
  scrollRef.current.scrollBy({
    left: -350,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  scrollRef.current.scrollBy({
    left: 350,
    behavior: "smooth",
  });
};

    return(

    <motion.section
    className="brand-section"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"

    viewport={{
    once:false,
    amount:0.2
    }}
    >

<div className="section-header">

  <h2>Shop By Brands</h2>

  <div className="arrow-buttons">

    <button onClick={scrollLeft}>
      <FaChevronLeft />
    </button>

    <button onClick={scrollRight}>
      <FaChevronRight />
    </button>

  </div>

</div>

<div
  className="brands-scroll"
  ref={scrollRef}
>

{
brands.map((brand,index)=>(

<motion.div
key={index}
className="brand-card"

whileHover={{

y:-12,
scale:1.05
}}
>

<div className="brand-icon">
    {brand.icon}
</div>

<h3>{brand.name}</h3>
</motion.div>
))
}
</div>
</motion.section>
);
}