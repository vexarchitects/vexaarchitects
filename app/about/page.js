import React from 'react'
import Navbar from '../components/Navbar'
import AboutHeader from '../components/about/AboutHeader'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AboutSection from '../components/about/Aboutsection'
import MeetCrew from '../components/about/MeetCrew'
import ScrollToTopButton from '../components/ScrollToTop'

export const metadata = {
  title: "About Us",
  description: "Learn about Vexa-Architect – our vision, mission, and passion for delivering innovative architectural solutions.",
  keywords: ["about vexa architect", "architecture firm", "team", "vision", "mission"],
  openGraph: {
    title: "About Vexa-Architect",
    description: "Discover the story, vision, and mission of Vexa-Architect.",
    url: "https://www.vexaarchitect.in/about",
    siteName: "Vexa-Architect",
   
    type: "website",
  },
};

function AboutPage() {
  return (
    <div>
        <Navbar/>
        <AboutHeader/>
        <AboutSection/>
        <MeetCrew/>
        <Contact/>
        <Footer/>
        <ScrollToTopButton/>
    </div>
  )
}

export default AboutPage