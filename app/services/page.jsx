import React from "react";
import ServiceHeader from "../components/ServiceHeader";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Contact from "../components/Contact";
import ScrollToTopButton from "../components/ScrollToTop";

function ServicePage() {
  return (
    <div>
      <Navbar/>
      <ServiceHeader />
      <Service />
      <Contact/>
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}

export default ServicePage;
