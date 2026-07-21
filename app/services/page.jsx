import React from "react";
import ServiceHeader from "../components/ServiceHeader";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Contact from "../components/Contact";
import ScrollToTopButton from "../components/ScrollToTop";
export const metadata = {
  title: "Architecture Services in Kannur — Plan Design, 3D Visuals, Construction",
  description:
    "Plan designing, 3D visualizing, interior & exterior design, renovation, modular kitchens and construction — architecture services in Kannur, Kerala.",
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
  alternates: {
    canonical: "https://www.vexaarchitect.in/services",
  },
  openGraph: {
    title: "Architecture Services in Kannur — Plan Design, 3D Visuals, Construction | Vexa-Architect",
    description:
      "Plan designing, 3D visualizing, interior & exterior design, renovation, modular kitchens and construction — architecture services in Kannur, Kerala.",
    url: "https://www.vexaarchitect.in/services",
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
