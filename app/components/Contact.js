'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const subHeadingVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.08,
      y: -5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      y: -2,
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.15,
      y: -8,
      rotate: 5,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.9,
      rotate: -5,
    },
  };

  const iconBounce = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.2,
        },
      },
    },
  };

  // Floating animation for background elements
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-40 blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-20 w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30 blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <motion.div
        className="max-w-4xl w-full text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.div className="mb-12" variants={containerVariants}>
          <motion.h1
            variants={headingVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Got an Interesting
            <motion.span
              className="inline-block ml-4"
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
            >
              Project?
            </motion.span>
          </motion.h1>
          
          <motion.h2
            variants={subHeadingVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent relative"
          >
            <motion.span
              whileHover={{
                backgroundPosition: "100% 0",
                transition: { duration: 0.8 },
              }}
              className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent bg-300% animate-gradient"
            >
              Let's Connect.
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          variants={containerVariants}
        >
          {/* Call Button */}
          <motion.a
            href="tel:7736450868"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-4 px-10 py-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            />
            <motion.div variants={iconBounce} whileHover="hover">
              <Phone className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors" />
            </motion.div>
            <span className="text-gray-800 font-semibold text-lg">Call now</span>
          </motion.a>

          {/* Email Button */}
          <motion.a
            href="mailto:vexaarchitects@gmail.com"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-4 px-10 py-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            />
            <motion.div variants={iconBounce} whileHover="hover">
              <Mail className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
            </motion.div>
            <span className="text-gray-800 font-semibold text-lg">Mail us</span>
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/966542725620"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-4 px-10 py-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            />
            <motion.div variants={iconBounce} whileHover="hover">
              <MessageCircle className="w-6 h-6 text-green-500 group-hover:text-green-600 transition-colors" />
            </motion.div>
            <span className="text-gray-800 font-semibold text-lg">WhatsApp</span>
          </motion.a>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center gap-8"
          variants={containerVariants}
        >
          {[
            { 
              href: "https://www.behance.net/", 
              icon: Linkedin, 
              label: "Behance",
              color: "from-blue-500 to-blue-700"
            },
            { 
              href: "https://www.instagram.com/vexa.architect/", 
              icon: Instagram, 
              label: "Instagram",
              color: "from-pink-500 to-orange-500"
            },
            { 
              href: "https://www.facebook.com/share/1ErmSUZL6X/?mibextid=wwXIfr", 
              icon: Facebook, 
              label: "Facebook",
              color: "from-blue-600 to-blue-800"
            },
          ].map((social, index) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover="hover"
              whileTap="tap"
              custom={index}
              className="relative group"
            >
              <motion.div
                className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100 relative overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                />
                <social.icon className="w-7 h-7 text-gray-600 group-hover:text-gray-800 transition-colors relative z-10" />
              </motion.div>
              
              {/* Tooltip */}
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {social.label}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;