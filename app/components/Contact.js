'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4">
            Got an Interesting Project?
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold bg-primary bg-clip-text text-transparent relative"
          >
            Let's Connect.
          </motion.h2>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
         {/* Call Button */}
<motion.a
  href="tel:7736450868"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
>
  <Phone className="w-5 h-5 text-gray-600" />
  <span className="text-gray-700 font-medium">Call now</span>
</motion.a>

{/* Email Button */}
<motion.a
  href="mailto:vexaarchitects@gmail.com"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
>
  <Mail className="w-5 h-5 text-gray-600" />
  <span className="text-gray-700 font-medium">Mail us</span>
</motion.a>

{/* WhatsApp Button (invisible icon, but works) */}
<motion.a
  href="https://wa.me/966542725620"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
>
  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 32 32">
    <path d="M16.004 3.2C9.395 3.2 3.963 8.643 3.963 15.263c0 2.604.777 5.014 2.102 7.028l-1.402 5.118 5.26-1.376a11.933 11.933 0 005.08 1.171h.001c6.61 0 12.043-5.444 12.043-12.154 0-6.61-5.434-12.15-12.043-12.15zm0 22.023a9.758 9.758 0 01-4.957-1.371l-.355-.213-3.12.819.835-3.037-.231-.373a9.834 9.834 0 01-1.563-5.321c0-5.44 4.43-9.871 9.89-9.871 5.455 0 9.89 4.431 9.89 9.871 0 5.444-4.435 9.876-9.89 9.876zm5.425-7.396c-.296-.148-1.76-.869-2.034-.969-.273-.1-.472-.148-.67.148-.198.296-.77.969-.944 1.167-.173.198-.347.223-.644.075-.296-.148-1.25-.459-2.38-1.464-.88-.787-1.474-1.757-1.647-2.054-.173-.296-.018-.456.13-.603.133-.133.296-.347.444-.52.148-.173.198-.296.296-.494.1-.198.05-.371-.025-.52-.075-.148-.67-1.613-.918-2.21-.242-.581-.488-.502-.67-.51l-.573-.01c-.198 0-.52.074-.792.371s-1.04 1.015-1.04 2.48 1.064 2.872 1.212 3.069c.148.198 2.095 3.198 5.082 4.48.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.76-.719 2.007-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.568-.346z"/>
  </svg>
  <span className="text-gray-700 font-medium">WhatsApp</span>
</motion.a>


        </motion.div>

        {/* Social Media Icons (3 only) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center gap-6"
        >
          {/* Behance */}
          <motion.a
            href="https://www.behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.25 0H1.75C.78 0 0 .774 0 1.729v20.542C0 23.227.78 24 1.75 24h20.5c.97 0 1.75-.773 1.75-1.729V1.729C24 .774 23.22 0 22.25 0zM7.115 19.091H4.364V9.273h2.751v9.818zM5.739 8.045a1.598 1.598 0 1 1 0-3.196 1.598 1.598 0 0 1 0 3.196zm14.955 11.046h-2.697v-4.772c0-1.137-.025-2.601-1.584-2.601-1.585 0-1.828 1.237-1.828 2.516v4.857H11.89V9.273h2.588v1.336h.036c.36-.682 1.24-1.401 2.548-1.401 2.725 0 3.23 1.793 3.23 4.124v5.759z"/>
            </svg>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/vexa.architect/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.837c-3.266 0-3.66.012-4.947.07-2.255.104-3.518 1.354-3.623 3.622-.057 1.288-.069 1.681-.069 4.948s.012 3.66.069 4.948c.104 2.265 1.366 3.518 3.623 3.622 1.287.057 1.681.07 4.947.07s3.66-.013 4.948-.07c2.265-.104 3.518-1.357 3.622-3.622.058-1.288.07-1.681.07-4.948s-.012-3.66-.07-4.948c-.104-2.268-1.357-3.518-3.622-3.622-1.288-.058-1.682-.07-4.948-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-8 3.999 3.999 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z"/>
            </svg>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/share/1ErmSUZL6X/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.407.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.311h3.588l-.467 3.622h-3.121V24h6.116C23.405 24 24 23.407 24 22.674V1.326C24 .594 23.405 0 22.675 0z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
