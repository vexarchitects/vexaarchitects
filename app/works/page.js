import React from 'react';
import Navbar from '../components/Navbar';
import WorksHeader from '../components/works/WorksHeader';
import Masonry from '../components/works/WorkShowcase';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTop';
export const metadata = {
  title: "Our Works | Vexa-Architect",
  description: "Browse through Vexa-Architect’s recent works and projects showcasing our innovative architectural designs.",
  keywords: ["architecture portfolio", "recent works", "design projects", "interior projects", "exterior projects"],
  openGraph: {
    title: "Vexa-Architect Works",
    description: "Explore Vexa-Architect’s portfolio of architectural and design works.",
    url: "https://vexaarchitect.in/works",
    siteName: "Vexa-Architect",
    images: [
      {
        url: "https://www.vexaarchitect.in/_next/image?url=%2Fimages%2Fvexa-primary.png&w=384&q=75",
        width: 1200,
        height: 630,
        alt: "Vexa-Architect Works",
      },
    ],
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
