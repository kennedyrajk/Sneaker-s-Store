import HeroSlider from "../components/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSlider />
      <FeaturedProducts />
    </>
  );
}

export default Home;