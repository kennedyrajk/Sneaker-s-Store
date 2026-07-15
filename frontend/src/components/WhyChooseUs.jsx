import { motion } from "framer-motion";
import {FaTruck,FaShieldAlt,FaUndo,FaGem} from "react-icons/fa";
import { fadeUp } from "../animations/fadeUp";
import "../styles/WhyChooseUs.css";

export default function WhyChooseUs(){

const features=[

    {
    icon:<FaTruck/>,
    title:"Free Shipping",
    desc:"Free delivery on orders above ₹999"
    },

    {
    icon:<FaShieldAlt/>,
    title:"Secure Payment",
    desc:"100% Secure Checkout"
    },

    {
    icon:<FaGem/>,
    title:"Premium Quality",
    desc:"Only Original Sneakers"
    },

    {
    icon:<FaUndo/>,
    title:"Easy Returns",
    desc:"7 Days Return Policy"
    }

];

return(

<motion.section
    className="why"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{
    once:false,
    amount:0.2
    }}

>
<h2>Why Choose SneakerX</h2>
<div className="why-grid">
{
features.map((item,index)=>(
<motion.div
key={index}

className="why-card"

whileHover={{
y:-10,
scale:1.04
}}
>

<div className="why-icon">
{item.icon}
</div>
<h3>{item.title}</h3>
<p>{item.desc}</p>
</motion.div>

))
}
</div>
</motion.section>
);
}