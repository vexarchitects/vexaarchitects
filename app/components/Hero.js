'use client';

import { useState, useRef, useEffect, lazy } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  const targetRef = useRef(null);
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const { top, height } = targetRef.current.getBoundingClientRect();
        const scrollProgress = Math.min(Math.max(-top / height, 0), 1);
        setBlur(scrollProgress * 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const DURATION = 0.25;
  const STAGGER = 0.025;

  const createMotionSpans = (text, direction) =>
    text.split(" ").map((char, i) => (
      <motion.span
        key={i}
        variants={{
          initial: { y: direction === "up" ? 0 : "100%" },
          hovered: { y: direction === "up" ? "-100%" : 0 },
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER * i,
        }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ));

  const FlipText = ({ text }) => (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="text-secondary relative block overflow-hidden whitespace-nowrap text-3xl md:text-5xl lg:text-7xl font-light text-center"
      style={{ lineHeight: 1.2 }}
    >
      <div>{createMotionSpans(text, "up")}</div>
      <div className="absolute inset-0">{createMotionSpans(text, "down")}</div>
    </motion.div>
  );

  return (
    <section ref={targetRef} className="relative h-screen w-full overflow-hidden">
      {/* 🔹 Fullscreen PNG Background with Zoom-In Animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ scale: [1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <Image
          src="/images/n10-min.png" // ✅ Your PNG path
          alt="Phone Background"
          fill
          className="object-cover"
          priority
          
        />
      </motion.div>

      {/* 🔹 Foreground Content */}
      <motion.div
        style={{ filter: `blur(${blur}px)` }}
        className="text-white ms-8 md:ms-20 w-full h-full flex flex-col mt-48 justify-center items-start"
      >
        <h1 className="font-dominik  text-left leading-tight">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex "
          >
            <FlipText text="Vexa-Architect"  className='shadow-2xl' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex"
          >
            <FlipText text="Think." className='shadow-2xl' />
            <FlipText text="Draw." className='shadow-2xl' />
            <FlipText text="Build." className='shadow-2xl' />
          </motion.div>
        </h1>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 gap-4"
        >
          <Link
            href="/contact"
            className="font-dominik border-secondary border-2 text-white px-6 py-4 text-sm hover:bg-secondary hover:text-white"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
