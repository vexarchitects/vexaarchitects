import React from 'react'
import ContactHeader from '../components/contact/ContactHeader'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import ScrollToTopButton from '../components/ScrollToTop'
export const metadata = {
  title: "Contact Us | Vexa-Architect",
  description: "Get in touch with Vexa-Architect for inquiries, collaborations, or project discussions.",
  keywords: ["contact vexa architect", "architecture inquiries", "contact design team", "architecture firm contact"],
  openGraph: {
    title: "Contact",
    description: "Reach out to Vexa-Architect for your architectural and design needs.",
    url: "https://vexaarchitect.in/contact",
    siteName: "Vexa-Architect",
    images: [
      {
        url: "https://www.vexaarchitect.in/_next/image?url=%2Fimages%2Fvexa-primary.png&w=384&q=75",
        width: 1200,
        height: 630,
        alt: "Contact Vexa-Architect",
      },
    ],
    type: "website",
  },
};

function ContactPage() {
  
  return (
    <div>
        <Navbar/>
        <ContactHeader/>
        <Contact/>
        <ContactForm/>
        <Footer/>
        <ScrollToTopButton/>

    </div>
  )
}

export default ContactPage