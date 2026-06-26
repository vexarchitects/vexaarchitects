'use client';
import React from 'react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 md:bottom-16 left-10  z-10 rounded-full bg-primary hover:bg-white border-2 border-gray-50 shadow-lg 
      inline-flex items-center justify-center w-12 h-12 text-white text-2xl font-bold transition-transform duration-300
      transform hover:scale-110 hover:shadow-2xl hover:text-primary hover:boder-2 hover:border-blue"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
