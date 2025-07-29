'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Plan Designing',
    description: 'We offer customized architectural plans that align with your vision, space, and regulations.',
    image: '/images/plan-min.jpg', // Replace with actual image
  },
  {
    title: '3D Visualising',
    description: 'Experience your project before it’s built with immersive 3D visualizations.',
    image: '/images/T24-min.jpg', // Replace with actual image
  },
  {
    title: 'Interior & Exterior Work',
    description: 'We bring harmony to your spaces through expert interior and exterior design solutions.',
    image: '/images/exterior-min.jpg', // Replace with actual image
  },
  {
    title: 'Renovation Work',
    description: 'Transform old spaces into modern marvels with our renovation expertise.',
    image: '/images/8-min.jpg', // Replace with actual image
  },
  {
    title: 'Modular Kitchen',
    description: 'Smart, stylish, and functional modular kitchens tailored to your lifestyle.',
    image: '/images/kitchen-min-min.png', // Replace with actual image
  },
  {
    title: 'Construction',
    description: 'From ground up, we deliver strong, sustainable, and aesthetic constructions.',
    image: '/images/cunstruction-min.jpg', // Replace with actual image
  },
];

export default function Service() {
  return (
    <section className=" font-dominik text-black px-4 md:px-16 space-y-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-base md:text-lg text-gray-700 leading-relaxed"
      >
        From planning to final construction, our services ensure every stage is handled with precision and care. We blend innovation with craftsmanship to bring your vision to life.
      </motion.p>

      {services.map((service, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''}  gap-10`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
           <div className="w-full md:w-1/2 h-64 md:h-96">
  <Image
    src={service.image}
    alt={service.title}
    width={800}
    height={500}
    className="rounded-lg shadow-md w-full h-full object-cover"
  />
</div>

            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
