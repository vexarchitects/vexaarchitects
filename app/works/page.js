import React from 'react';
import Navbar from '../components/Navbar';
import WorksHeader from '../components/works/WorksHeader';
import Masonry from '../components/works/WorkShowcase';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTop';
export const metadata = {
  title: {
    absolute: "Our Works | Architecture & Interior Design Portfolio | Vexa-Architect, Kannur"
  },
  description: "Browse Vexa-Architect's portfolio of residential and commercial architecture, interior and exterior design projects completed across Kerala.",
  keywords: ["architecture portfolio", "recent works", "design projects", "interior projects", "exterior projects"],
  alternates: {
    canonical: "https://www.vexaarchitect.in/works",
  },
  openGraph: {
    title: "Our Works | Architecture & Interior Design Portfolio | Vexa-Architect, Kannur",
    description: "Browse Vexa-Architect's portfolio of residential and commercial architecture, interior and exterior design projects completed across Kerala.",
    url: "https://www.vexaarchitect.in/works",
    siteName: "Vexa-Architect",
    type: "website",
  },
};

function WorksPage() {
  

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />
      <div className="mt-20">
        <WorksHeader />
      </div>
      <div className="py-12">
        <Masonry
          
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
      <div className="py-12">
        <Contact />
      </div>
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}

export default WorksPage;
