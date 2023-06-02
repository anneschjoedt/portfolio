import React, { useState } from "react";
import CompanySection from "../components/CompanySection";
import AnnoAnnoHeroSection from "../components/AnnoAnnoHeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjTwo } from "../components/AnnoAnnoElement/Data";
import { RecommendObjOne } from "../components/RecommendSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AnnoAnnoElement from "../components/AnnoAnnoElement";

const AnnoAnnoProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AnnoAnnoHeroSection />
      <AnnoAnnoElement {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default AnnoAnnoProject;
