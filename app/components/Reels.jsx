"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const reels = [
  { id: 1, videoUrl: "/reels/1.mp4", poster: "/posters/1.jpg", views: "27.4K" },
  { id: 2, videoUrl: "/reels/2.mp4", poster: "/posters/2.jpg", views: "19.8K" },
  { id: 3, videoUrl: "/reels/3.mp4", poster: "/posters/3.jpg", views: "42.1K" },
  { id: 4, videoUrl: "/reels/4.mp4", poster: "/posters/4.jpg", views: "16.5K" },
];

const ReelItem = ({ reel }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "200px" }); // Load slightly before coming into view
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div ref={ref} className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-800 shadow-lg">
      {/* Skeleton / Loader */}
      {!isLoaded && <div className="absolute inset-0 animate-pulse bg-neutral-700" />}
      
      {/* Only render video if in view to optimize performance */}
      {isInView && (
        <video
          src={reel.videoUrl}
          poster={reel.poster}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={() => setIsLoaded(true)}
        />
      )}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  );
};

export default function Reels() {
  return (
    <section className="py-12 md:py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={1.2}
            spaceBetween={16}
            freeMode={true}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: true }}
            modules={[FreeMode, Autoplay]}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 3.2, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="!overflow-visible"
          >
            {reels.map((reel) => (
              <SwiperSlide key={reel.id}>
                <ReelItem reel={reel} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}