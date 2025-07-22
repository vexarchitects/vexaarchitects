'use client';
import { useEffect } from "react";

import Contact from "./components/Contact";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";


import { Hero } from "./components/Hero";
import Loader from "./components/Loader";
import FeaturedProjects from "./components/FeaturedProjects";

import ServiceHome from "./components/ServiceHome";
import AboutHome from "./components/AboutHome";

import OurStory from "./components/OurStory";


export default function Home() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({

        lerp: 0.05,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={` overflow-hidden`}>
      <Loader /> {/* ⬅️ Loading screen here */}
      <Navbar />


      <Hero />
      <OurStory />
      {/* <ScrollPara /> */}
      <FeaturedProjects />
      <AboutHome />
      <ServiceHome />
      <Contact />


      <button
        onClick={scrollToTop}
        className="fixed  bottom-6 md:bottom-16 right-10 md:right-20 z-10 rounded-full bg-primary hover:bg-white border-2 border-gray-50 shadow-lg 
      inline-flex items-center justify-center w-12 h-12 text-white text-2xl font-bold transition-transform duration-300
      transform hover:scale-110 hover:shadow-2xl hover:text-primary hover:boder-2 hover:border-blue"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <Footer />
    </div>
  );
}

