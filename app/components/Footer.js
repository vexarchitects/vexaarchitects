'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Globe, ArrowRight, Phone, Mail } from 'lucide-react';

export default function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const linkVariants = {
    rest: { y: 0, scale: 1 },
    hover: {
      y: -3,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const socialIconVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
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

  const inputVariants = {
    focus: {
      borderColor: "#f2e8dd",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.footer
      className="font-dominik bg-primary text-[#f2e8dd] px-6 md:px-20 py-16 text-sm overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:justify-between mb-12">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            className="mb-10 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/vaxa-main-min.png"
              alt="Vexa-Architect"
              width={160}
              height={60}
              className=" object-contain"
            />
          </motion.div>

          {/* Links */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm"
          >
            {[
              { href: "/works", label: "Works" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((link, index) => (
              <motion.div key={link.href} variants={linkVariants} initial="rest" whileHover="hover">
                <Link
                  href={link.href}
                  className="relative inline-block group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Middle Row */}
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
        >
          {/* Office Info & Socials */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="font-medium text-base mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Follow Us
            </motion.h4>
            <motion.div
              className="flex gap-4 mt-4"
              variants={containerVariants}
            >
              {/* Social Icons */}
              {[
                { href: "https://www.behance.net/mohdfayas", icon: Globe, label: "Behance" },
                { href: "https://www.instagram.com/vexa.architect/", icon: Instagram, label: "Instagram" },
                { href: "https://www.facebook.com/share/1ErmSUZL6X/?mibextid=wwXIfr", icon: Facebook, label: "Facebook" },
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
                  variants={socialIconVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  custom={index}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone & Email */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-4 h-4 text-secondary" />
                <h4 className="font-medium text-base">Phone</h4>
              </div>
              <motion.a
                href="tel:8943025049"
                className="text-white ml-7"
                whileHover={{ x: 5, color: "#f2e8dd" }}
                transition={{ duration: 0.2 }}
              >
                +91 8943025049
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-4 h-4 text-secondary" />
                <h4 className="font-medium text-base">Email</h4>
              </div>
              <Link
                href="mailto:vexaarchitects@gmail.com"
                className="text-secondary underline ml-7 inline-block"
              >
                <motion.span
                  whileHover={{ x: 5, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  vexaarchitects@gmail.com
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Subscribe */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="font-medium text-base mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Subscribe
            </motion.h4>
            <motion.p
              className="text-[#e3dfd3] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Our strategy, thinking and insights. Shared with you.
            </motion.p>
            <motion.form
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-transparent border-b border-[#bfb8aa] focus:outline-none py-2 text-[#f2e8dd] placeholder:text-[#bfb8aa] transition-colors duration-300"
                whileFocus={{ borderColor: "#f2e8dd" }}
              />
              <motion.button
                type="submit"
                className="absolute right-0 top-2 p-1 rounded-full"
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  rotate: 5
                }}
                whileTap={{ scale: 0.9, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="h-4 w-4 text-[#f2e8dd]" />
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Bottom border */}
        <motion.div
          className="border-t border-[#bfb8aa] pt-6 text-xs text-[#bfb8aa] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.p
            whileHover={{ color: "#f2e8dd" }}
            transition={{ duration: 0.3 }}
          >
            © {new Date().getFullYear()} Vexa-Architect. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}