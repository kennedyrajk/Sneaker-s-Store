import { motion } from "framer-motion";

import {SiNike,SiAdidas,} from "react-icons/si";
import {FaShoePrints} from "react-icons/fa";
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
    icon:<FaShoePrints/>
    },
    {
    name:"Puma",
    icon:<FaShoePrints/>
    },

    {
    name:"New Balance",
    icon:<FaShoePrints/>
    },

    ];

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

<h2>Shop By Brands</h2>
<div className="brands-grid">

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