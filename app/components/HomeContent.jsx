"use client";

import { useEffect } from "react";
import Loader from "./Loader";
import Navbar from "./Navbar";
import { Hero } from "./Hero";
import OurStory from "./OurStory";
import FeaturedProjects from "./FeaturedProjects";
import AboutHome from "./AboutHome";
import ServiceHome from "./ServiceHome";

import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTop";
import Lenis from "@studio-freight/lenis";
import Contact from "./Contact";

export default function HomeContent() {
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
    <div className="overflow-hidden">
      <Loader/>
      <Navbar/>
      <Hero/>
      <OurStory />
      <FeaturedProjects />
      <AboutHome />
      <ServiceHome />
      <Contact/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
}
