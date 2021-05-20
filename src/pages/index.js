import React, { useState } from "react";
import CompanySection from "../components/CompanySection";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import { RecommendObjOne } from "../components/RecommendSection/Data";
import Navbar from "../components/Navbar";
import RecommendSection from "../components/RecommendSection";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {/* <CompanySection /> */}
      <InfoSection {...homeObjOne} />
      <RecommendSection {...RecommendObjOne} />
      <Services />
      <InfoSection {...homeObjTwo} />
    </>
  );
};

export default Home;
