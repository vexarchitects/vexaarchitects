'use client'

import { motion } from 'framer-motion'

export default function ContactForm() {
  return (
    <section className=" font-dominik flex items-center justify-center  px-4 py-12">
      <div className=" mx-12 md:mx-28 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Address */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-800 space-y-2"
        >
          <h2 className="text-lg font-semibold">Vexa-Architect</h2>
          <p>Kannur</p>
          <p>Kerala,India</p>
          <p className="pt-2">
            <span className="font-medium">email:</span>{' '}
            vexaarchitects@gmail.com
          </p>
        </motion.div>

        {/* Right Section: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-2xl font-light text-gray-900">Get in Touch</h3>

          <input
            type="text"
            placeholder="Name*"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />

          <div className="flex items-start space-x-2 text-sm">
            <input type="checkbox" required />
            <span>
              I understand that my data will be stored in accordance with the privacy policy
            </span>
          </div>

          <button
            type="submit"
            className="mt-2 bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  )
}
