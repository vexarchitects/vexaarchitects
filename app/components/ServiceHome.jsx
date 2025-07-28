'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Interior Design & 3D Visualization',
    description:
      'From kitchens to bedrooms, we design beautiful, functional interiors tailored to your lifestyle—brought to life with immersive 3D visuals.',
    image: '/images/A10-min.jpg',
  },
  {
    title: 'Exterior Design & Visualization',
    description:
      'We shape striking exteriors and outdoor spaces with precision. Every design is presented in detailed 3D, giving you a complete view before execution.',
    image: '/images/M1-min.jpg',
  },
  // ...other services not shown for this preview
];

export default function ServiceHome() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className=" font-dominik text-black py-20 px-4 md:px-16 space-y-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="border-t border-b border-gray-400 py-6 mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-light">Our Services</h2>
      </motion.div>

      {/* Intro Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-base md:text-lg text-gray-700 leading-relaxed"
      >
        From the heart of your home to the exterior walls that greet the world, our design services
        are curated to harmonize elegance with functionality. We thoughtfully shape each space to
        reflect your story, values, and lifestyle.
      </motion.p>

      {/* Show only 2 Services */}
      {services.slice(0, 2).map((service, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row ${
              !isEven ? 'md:flex-row-reverse' : ''
            } gap-10`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Image */}
            <motion.div variants={itemVariants} className="w-full md:w-1/2">
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="rounded-lg overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={500}
                  className="w-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </motion.div>
        );
      })}

      {/* See More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }} // Scale up slightly on hover
          whileTap={{ scale: 0.95 }}   // Slightly shrink when clicked
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center font-medium border-b border-gray-800 text-lg group"
          >
            <span className="mr-2">See More</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}