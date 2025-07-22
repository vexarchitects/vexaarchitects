import React from 'react'
import ContactHeader from '../components/contact/ContactHeader'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import ScrollToTopButton from '../components/ScrollToTop'

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