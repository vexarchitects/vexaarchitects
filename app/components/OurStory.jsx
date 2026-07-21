'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, Fragment } from 'react';

const OurStory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  const text = "At Vexa Architect, we blend creativity and technology to deliver cutting-edge plan designs and immersive 3D visuals that bring ideas to life.";
  const highlightText = "We're shaping tomorrow's spaces—together.";
  const words = text.split(' ');
  const highlightWords = highlightText.split(' ');

  // Container transforms
  const containerOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const containerY = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -30]);

  // Simplified word reveal animation
  const getWordAnimation = (index, totalWords) => {
    const startProgress = 0.1 + (index / totalWords) * 0.4;
    const endProgress = startProgress + 0.2;
    
    return {
      opacity: useTransform(smoothProgress, [startProgress - 0.1, startProgress, endProgress], [0, 1, 1]),
      y: useTransform(smoothProgress, [startProgress - 0.1, startProgress, endProgress], [30, 0, 0]),
      rotateX: useTransform(smoothProgress, [startProgress - 0.1, startProgress], [20, 0])
    };
  };

  const getHighlightAnimation = (index, totalWords) => {
    const startProgress = 0.5 + (index / totalWords) * 0.25;
    const endProgress = startProgress + 0.15;
    
    return {
      opacity: useTransform(smoothProgress, [startProgress - 0.1, startProgress, endProgress], [0, 1, 1]),
      y: useTransform(smoothProgress, [startProgress - 0.1, startProgress], [20, 0]),
      scale: useTransform(smoothProgress, [startProgress - 0.1, startProgress], [0.9, 1])
    };
  };

  return (
    <section
      ref={containerRef}
      className=" flex items-center justify-center relative px-4 py-8 md:py-20"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ opacity: useTransform(smoothProgress, [0, 0.3], [0, 0.1]) }}
      >
        <motion.div
          className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl absolute top-1/2 left-1/2"
          style={{
            x: useTransform(smoothProgress, [0, 1], [-200, 200]),
            y: useTransform(smoothProgress, [0, 1], [0, -100]),
            scale: useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 1])
          }}
        />
      </motion.div>

      <motion.div 
        className="max-w-4xl text-center"
        style={{ 
          opacity: containerOpacity,
          y: containerY
        }}
      >
        {/* Main text with scroll-based word reveals */}
        <div className="text-[22px] md:text-[32px] lg:text-[44px] font-dominik leading-snug mb-8 text-primary">
          {words.map((word, index) => {
            const animation = getWordAnimation(index, words.length);
            return (
              <Fragment key={index}>
                <motion.span
                  className="inline-block mr-2 transform-gpu"
                  style={{
                    opacity: animation.opacity,
                    y: animation.y,
                    rotateX: animation.rotateX,
                    transformOrigin: "bottom"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#3B82F6",
                    transition: { duration: 0.2 }
                  }}
                >
                  {word}
                </motion.span>
                {' '}
              </Fragment>
            );
          })}
        </div>

        {/* Highlight text with scroll-based reveals */}
        <div className="text-[24px] md:text-[34px] lg:text-[38px] font-medium text-primary leading-relaxed">
          {highlightWords.map((word, index) => {
            const animation = getHighlightAnimation(index, highlightWords.length);
            return (
              <Fragment key={index}>
                <motion.span
                  className="inline-block mr-2 transform-gpu"
                  style={{ 
                    opacity: animation.opacity,
                    y: animation.y,
                    scale: animation.scale
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.3, type: "spring", stiffness: 400 }
                  }}
                >
                  {word}
                </motion.span>
                {' '}
              </Fragment>
            );
          })}
        </div>

        
        
      </motion.div>
    </section>
  );
};

export default OurStory;