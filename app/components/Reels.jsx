"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const reels = [
  { id: 1, videoUrl: "/reels/1.mp4", views: "27.4K" },
  { id: 2, videoUrl: "/reels/2.mp4", views: "19.8K" },
  { id: 3, videoUrl: "/reels/3.mp4", views: "42.1K" },
  { id: 4, videoUrl: "/reels/4.mp4", views: "16.5K" },
];

export default function Reels() {
  const [loaded, setLoaded] = useState({});

  const handleLoaded = (id) => {
    setLoaded((prev) => ({ ...prev, [id]: true }));
  };

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
            freeMode
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
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
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-200 shadow-lg">
                  {/* Skeleton Placeholder */}
                  {!loaded[reel.id] && (
                    <div className="absolute inset-0 animate-pulse bg-neutral-300" />
                  )}
                  
                  <video
                    src={reel.videoUrl}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      loaded[reel.id] ? "opacity-100" : "opacity-0"
                    }`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedData={() => handleLoaded(reel.id)}
                  />

                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}