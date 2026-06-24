"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const ReelItem = ({ reel, isPlaying, onPlay }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sync playback state with parent
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div 
      className="relative aspect-[9/16] rounded-2xl overflow-hidden  shadow-lg cursor-pointer group"
      onClick={onPlay}
    >
      {/* Skeleton - Only shown until first frame loads */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 animate-pulse bg-neutral-800" 
          />
        )}
      </AnimatePresence>
      
      <video
        ref={videoRef}
        src={reel.media_url}
        poster={reel.thumbnail_url}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
      />
      
      {/* Play/Pause Indicator (Optional) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
  );
};

export default function Reels() {
  const [reels, setReels] = useState([]);
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    fetch('/api/instagram')
      .then((res) => res.json())
      .then((data) => {
        const videoData = (data.data || []).filter(item => 
          item.media_type === "VIDEO" || item.media_type === "REELS"
        ).slice(0, 8);
        setReels(videoData);
      });
  }, []);

  return (
    <section className="py-20 w-full ">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          freeMode={true}
          loop={true}
          modules={[FreeMode]}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          className="!overflow-visible"
        >
          {reels.map((reel) => (
            <SwiperSlide key={reel.id}>
              <ReelItem 
                reel={reel} 
                isPlaying={playingId === reel.id} 
                onPlay={() => setPlayingId(reel.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}