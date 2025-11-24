import React from "react";
import ServiceHeader from "../components/ServiceHeader";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Contact from "../components/Contact";
import ScrollToTopButton from "../components/ScrollToTop";
export const metadata = {
  title: "Our Services | Vexa-Architect",
  description:
    "Discover Vexa-Architect’s full range of services including Plan Designing, 3D Visualising, Interior & Exterior Work, Renovation, Modular Kitchens, and Construction solutions.",
  keywords: [
    "architecture services",
    "plan designing",
    "3D visualization",
    "interior design",
    "exterior design",
    "renovation work",
    "modular kitchen",
    "construction",
    "architectural consultancy",
    "Vexa Architect services"
  ],
  openGraph: {
    title: "Our Services ",
    description:
      "Explore Plan Designing, 3D Visualising, Interior & Exterior Work, Renovation, Modular Kitchens, and Construction services by Vexa-Architect.",
    url: "https://vexaarchitect.in/services",
    siteName: "Vexa-Architect",
   
    type: "website",
  },
};

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
