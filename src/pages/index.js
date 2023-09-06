import React, { useState } from "react";
import CompanySection from "../components/CompanySection";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import { RecommendObjOne } from "../components/RecommendSection/Data";
import Navbar from "../components/Navbar";
import RecommendSection from "../components/RecommendSection";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Jobspire from "../components/Jobspire/JobspireCard";
import AnnoAnno from "../components/AnnoAnno/AnnoAnnoCard";
import Aben from "../components/Aben/AbenCard";
import SleepersCard from "../components/Sleepers/SleepersCard";
import CarolineCard from "../components/Caroline/CarolineCard"
import { thumbnailObjOne } from "../components/Sleepers/SleepersCard/Data";

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
      <CarolineCard />
      <SleepersCard {...thumbnailObjOne} />
      <Jobspire />
      <AnnoAnno />
      <Aben />
      <CompanySection />
      <InfoSection {...homeObjOne} />
      <RecommendSection {...RecommendObjOne} />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;
