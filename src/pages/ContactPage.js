import React, { useState } from "react";
import Kontakt from "../components/Kontakt";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ContaktPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Kontakt />
    </>
  );
};

export default ContaktPage;
