import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";
import "../styles/Newsletter.css";
export default function Newsletter(){
return(
<motion.section
className="newsletter"
variants={fadeUp}
initial="hidden"
whileInView="visible"

viewport={{
once:false,
amount:0.2
}}

>

<h2>Stay Updated</h2>
<p>Subscribe to receive new arrivals and exclusive offers.</p>
<div className="newsletter-box">
<input
type="email"
placeholder="Enter your email"

/>
<button>
Subscribe
</button>
</div>
</motion.section>
);

}