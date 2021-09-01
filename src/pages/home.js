import React from "react";
import Navbar from "../components/Navbar/navbar";
import Hero from "../components/Hero/hero";
import Repos from "../components/section-repos";
const Home = () => {
  return (
    <header>
      <Navbar />
      <Hero />
      <Repos />
    </header>
  );
};

export default Home;
