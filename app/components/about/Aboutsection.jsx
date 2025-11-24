'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, PenLine, Hammer } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
};

const processItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 12 },
  },
};

const AboutSection = () => {
  return (
    <section className="overflow-hidden font-dominik py-16 ">
      <div className="  md:px-20 px-4 sm:px-6 lg:px-20">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={textItemVariants}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            Welcome to Vexa Architect, where creativity meets technology!
          </motion.h1>
          <motion.p
            variants={textItemVariants}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Founded in 2024, Vexa Architect is a forward-thinking design firm specializing in Plan Designing and 3D visualization.
          </motion.p>
        </motion.div>

        {/* 3D Visualization */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={textItemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bringing Ideas to Life with 3D Visualization
            </h2>
            <p className="text-md md:text-lg text-gray-600">
              We bring ideas to life through 3D visualization, transforming concepts into immersive, realistic visuals.
              Whether it's architectural renders, product mockups, or custom animations, our work helps clients see their vision in vivid detail.
            </p>
          </motion.div>

          <motion.div variants={textItemVariants} className="shadow-lg overflow-hidden rounded-xl">
            <img
              src="/images/N11.webp"
              alt="3D Visualization"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://placehold.co/600x400/CCCCCC/333333?text=Image+Unavailable";
              }}
            />
          </motion.div>
        </motion.div>

        {/* Creative Partners */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={textItemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Your Creative Partners
          </motion.h2>
          <motion.p
            variants={textItemVariants}
            className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            At Vexa Architect, we’re more than just a design firm—we’re your creative partners.
            We thrive on collaboration, innovation, and delivering results that exceed expectations.
          </motion.p>
        </motion.div>

        {/* Our Process */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Our Process
          </h2>
          <motion.div
            className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-12 px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Think */}
            <motion.div
              variants={processItemVariants}
              className="flex flex-col items-center p-8 bg-primary rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full md:w-1/3"
            >
              <Brain className="text-white w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Think</h3>
              <p className="text-white text-center">Imagine, plan, and create new ideas.</p>
            </motion.div>

            {/* Draw */}
            <motion.div
              variants={processItemVariants}
              className="flex flex-col items-center p-8 bg-primary rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full md:w-1/3"
            >
              <PenLine className="text-white w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Draw</h3>
              <p className="text-white text-center">Design, visualize, and create detailed plans.</p>
            </motion.div>

            {/* Build */}
            <motion.div
              variants={processItemVariants}
              className="flex flex-col items-center p-8 bg-primary rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full md:w-1/3"
            >
              <Hammer className="text-white w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Build</h3>
              <p className="text-white text-center">Execute, construct, and bring visions to reality.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
