import {FaFacebook,FaInstagram,FaTwitter,FaGithub} from "react-icons/fa";
import "../styles/Footer.css";
export default function Footer(){
return(

<footer className="footer">
<div className="footer-top">

<div>

  <h2>SneakerX</h2>
  <p>Premium Sneakers Marketplace</p>

</div>

<div>
  <h4>Quick Links</h4>
  <p>Home</p>
  <p>Products</p>
  <p>Cart</p>
  <p>Login</p>
</div>
<div>
  <h4>Support</h4>
  <p>Contact</p>
  <p>FAQ</p>
  <p>Returns</p>
  <p>Privacy</p>
</div>
<div>
<h4>Follow Us</h4>

  <div className="social">
  <FaFacebook/>
  <FaInstagram/>
  <FaTwitter/>
  <FaGithub/>

  </div>
</div>
</div>
<hr/>
<p className="copy">© 2026 SneakerX. All Rights Reserved.</p>
</footer>
);
}