import React, { useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/hero";
import Repos from "../components/Repos/repos";
//
import Pagination from "../components/pagination/pagination";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Repos />
      <Pagination />
    </div>
  );
};

export default Home;
