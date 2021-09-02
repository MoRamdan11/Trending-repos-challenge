import React from "react";
import Navbar from "../components/Navbar/navbar";
import Hero from "../components/Hero/hero";
import Repos from "../components/section-repos";
//
import Test from "../components/test";
import Pagination from "../components/pagination/pagination";
const Home = () => {
  return (
    <header>
      <Navbar />
      <Hero />
      <Repos />
      <Test />
    </header>
  );
};

export default Home;
