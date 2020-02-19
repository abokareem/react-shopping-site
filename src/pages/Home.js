import React from "react";
import Hero from "../components/Hero";

import heroImage from "../images/hero.jpeg";
import About from "../components/About";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Hero img={heroImage} title="macramé shop 37" subtitle="welcome" full />
      <FeaturedProducts />
      <About />
    </>
  );
};

export default Home;
