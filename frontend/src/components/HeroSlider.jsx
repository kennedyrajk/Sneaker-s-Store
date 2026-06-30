import { Carousel } from "antd";
import { motion } from "framer-motion";

import "../styles/hero.css";

function HeroSlider() {
  const slides = [
    {
      title: "STEP INTO THE FUTURE",
      subtitle: "Premium Sneaker Collection",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
      title: "LIMITED EDITION DROPS",
      subtitle: "Discover Rare Sneakers",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },

    {
      title: "NEW ARRIVALS",
      subtitle: "Built For Style",
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f"
    }
  ];

  return (
    <Carousel autoplay effect="fade">
      {slides.map((slide, index) => (
        <div key={index}>
          <section
            className="hero-slide"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="overlay">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <h1>{slide.title}</h1>

                <p>{slide.subtitle}</p>

                <button>
                  Shop Now
                </button>
              </motion.div>
            </div>
          </section>
        </div>
      ))}
    </Carousel>
  );
}

export default HeroSlider;