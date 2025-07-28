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
import ScrollToTopButton from "./components/ScrollToTop";


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
 

  return (
    <div className={` overflow-hidden`}>
      <Loader />
      <Navbar />


      <Hero />
      <OurStory />
      {/* <ScrollPara /> */}
      <FeaturedProjects />
      <AboutHome />
      <ServiceHome />
      <Contact />


     
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}

