import React, { useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import Hero from "../components/Hero/hero";
import Repos from "../components/section-repos";
//
import Test from "../components/test";
import Pagination from "../components/pagination/pagination";
const Home = () => {
  useEffect(() => {
    const date = new Date();
    console.log("date", date);
  }, []);
  return (
    <header>
      <Navbar />
      <Hero />
      <Repos />
    </header>
  );
};

export default Home;
