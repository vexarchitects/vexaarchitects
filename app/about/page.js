import React from 'react'
import Navbar from '../components/Navbar'
import AboutHeader from '../components/about/AboutHeader'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AboutSection from '../components/about/Aboutsection'
import MeetCrew from '../components/about/MeetCrew'
import ScrollToTopButton from '../components/ScrollToTop'

export const metadata = {
  title: "About Us | Architecture & 3D Visualization Studio, Kannur",
  description: "Founded in 2024, Vexa-Architect blends creativity and technology to deliver plan designing and 3D visualization services for homes across Kannur, Kerala.",
  keywords: ["about vexa architect", "architecture firm", "team", "vision", "mission"],
  alternates: {
    canonical: "https://www.vexaarchitect.in/about",
  },
  openGraph: {
    title: "About Us | Architecture & 3D Visualization Studio, Kannur | Vexa-Architect",
    description: "Founded in 2024, Vexa-Architect blends creativity and technology to deliver plan designing and 3D visualization services for homes across Kannur, Kerala.",
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