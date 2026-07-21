'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CircularText from './animatedcomponents/Circulartext';

const projects = [
  {
    title: "Modern Residence Exterior Design in Kannur",
    image: '/images/modern-residence-exterior-design-kannur.webp',
    alt: "Modern residence exterior architecture design, Kannur — Vexa-Architect"
  },
  {
    title: "Luxury Living Room Interior Design in Kannur",
    image: '/images/luxury-living-room-interior-design-kannur.webp',
    alt: "Luxury living room interior design and visualization, Kannur — Vexa-Architect"
  },
];

export default function FeaturedProjects() {
  return (
    <section className=" font-dominik bg-secondary text-black py-20 px-4 md:px-16">
      <div>
        {/* Section Heading */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-light border-t border-b border-gray-300 py-4"
        >
          Featured Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-700 max-w-2xl text-base md:text-lg"
        >
          We specialize in delivering perfect design solutions for homes. From planning and 3D visualizing to
          construction and renovation, we <span className='text-primary font-bold'>think</span> , <span className='text-primary font-bold '>draw</span>,
          and  <span className='text-primary font-bold'>build</span> to bring your vision to life.
        </motion.p>


        {/* Project Grid */}
        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden group  shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image}
                alt={project.alt || project.title}
                width={1000}
                height={600}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

            
              <Link
                href='/works'
                className=' hidden md:block absolute bottom-4 right-4  px-3 py-1 text-sm font-light rounded'>
                {i === projects.length - 1 && (
                  <CircularText
                    text="*VIEW*OTHER*PROJECTS"
                    onHover="speedUp"
                    spinDuration={20}
                    className="absolute bottom-0 right-0 z-10"
                  />
                )}
              </Link>

              {/* CircularText only on last project image */}
              {/* {i === projects.length - 1 && (
                <CircularText
                  text="VIEW*OTHER*PROJECTS"
                  onHover="speedUp"
                  spinDuration={20}
                  className="absolute bottom-0 right-0 z-10"
                />
              )} */}
            </motion.div>
          ))}
        </div>

        {/* See More link - only visible on small screens */}
        <div className="mt-10 md:hidden flex justify-center">
          <Link
            href="/works"
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
        </div>

        {/* View All Button at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/works"
            className="font-dominik inline-flex items-center text-base font-medium border-b border-gray-800 pb-1 group"
            aria-label="View all our projects in our works portfolio"
          >
            <span className="mr-2">View All Projects</span>
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
      </div>
    </section>
  );
}
