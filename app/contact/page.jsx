import React from 'react'
import ContactHeader from '../components/contact/ContactHeader'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import ScrollToTopButton from '../components/ScrollToTop'
export const metadata = {
  title: {
    absolute: "Contact Vexa-Architect | Architects in Kannur, Kerala"
  },
  description: "Get in touch with Vexa-Architect in Kannur, Kerala for architecture, interior design and 3D visualization project inquiries — call, WhatsApp or email.",
  keywords: ["contact vexa architect", "architecture inquiries", "contact design team", "architecture firm contact"],
  alternates: {
    canonical: "https://www.vexaarchitect.in/contact",
  },
  openGraph: {
    title: "Contact Vexa-Architect | Architects in Kannur, Kerala",
    description: "Get in touch with Vexa-Architect in Kannur, Kerala for architecture, interior design and 3D visualization project inquiries — call, WhatsApp or email.",
    url: "https://www.vexaarchitect.in/contact",
    siteName: "Vexa-Architect",
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