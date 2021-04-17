import React from "react";
import About from "../About/About";
import ContractForm from "../ContractForm/ContractForm";
import Footer from "../Footer/Footer";
import GetStarted from "../GetStarted/GetStarted";
import InTro from "../InTro/InTro";
import SideBar from "../NavMenu/SideBar";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <SideBar />
      <InTro />
      <About />
      <Services />
      <GetStarted />
      <Testimonial />
      <ContractForm />
      <Footer/>
    </>
  );
};

export default Home;
