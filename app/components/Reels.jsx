"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const INSTAGRAM_URL = "https://www.instagram.com/vexa.architect/";

const FALLBACK_REELS = [
  {
    id: "fallback-1",
    media_url: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-design-41793-large.mp4",
    thumbnail_url: "",
    caption: "Immersive walkthrough of our latest premium modern apartment concept. Designed for seamless living.",
    permalink: INSTAGRAM_URL
  },
  {
    id: "fallback-2",
    media_url: "https://assets.mixkit.co/videos/preview/mixkit-bright-modern-kitchen-interior-41797-large.mp4",
    thumbnail_url: "",
    caption: "A bright, modern kitchen showcasing custom cabinetry, integrated lighting, and premium stone surfaces.",
    permalink: INSTAGRAM_URL
  },
  {
    id: "fallback-3",
    media_url: "https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-with-cozy-lighting-41804-large.mp4",
    thumbnail_url: "",
    caption: "Bespoke ambient lighting design in a high-ceiling luxury living space.",
    permalink: INSTAGRAM_URL
  },
  {
    id: "fallback-4",
    media_url: "https://assets.mixkit.co/videos/preview/mixkit-spacious-modern-bathroom-interior-41808-large.mp4",
    thumbnail_url: "",
    caption: "Spa-like luxury bathroom featuring natural textures, floating vanity, and custom glass partitions.",
    permalink: INSTAGRAM_URL
  }
];

const ReelItem = ({ reel, isPlaying, onPlay }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [hasError, setHasError] = useState(false);

  // Determine if it is a Meta CDN link that requires proxying
  const isMetaCDN =
    reel.media_url &&
    (reel.media_url.includes("fbcdn.net") ||
      reel.media_url.includes("instagram.com") ||
      reel.media_url.includes("cdninstagram.com"));

  useEffect(() => {
    const initialSrc = isMetaCDN
      ? `/api/proxy?url=${encodeURIComponent(reel.media_url)}`
      : reel.media_url;
    setVideoSrc(initialSrc);
    setHasError(false);
  }, [reel.media_url, isMetaCDN]);

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      if (isPlaying) {
        // Use promise to handle mobile autoplay policy gracefully
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Autoplay was blocked or failed:", err);
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, videoSrc]);

  const handleVideoError = () => {
    if (hasError) return;
    console.warn(`Video failed to load: ${videoSrc}. Falling back to premium stock video.`);

    const fallbackUrls = [
      "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-design-41793-large.mp4",
      "https://assets.mixkit.co/videos/preview/mixkit-bright-modern-kitchen-interior-41797-large.mp4",
      "https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-with-cozy-lighting-41804-large.mp4",
      "https://assets.mixkit.co/videos/preview/mixkit-spacious-modern-bathroom-interior-41808-large.mp4"
    ];

    const stringId = String(reel.id || "");
    const charCodeSum = stringId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = Math.abs(charCodeSum) % fallbackUrls.length;
    const fallback = fallbackUrls[index];

    setVideoSrc(fallback);
    setHasError(true);
  };

  return (
    <div
      className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg cursor-pointer group bg-neutral-950 border border-white/5 transition-all duration-500 hover:shadow-primary/20 hover:shadow-2xl hover:scale-[1.02]"
      onClick={onPlay}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={reel.thumbnail_url}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        onError={handleVideoError}
      />

      {/* Play/Pause Button Overlay
          Mobile: always visible (opacity-100)
          Desktop (md+): hidden until hover (md:opacity-0 md:group-hover:opacity-100) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg className="w-6 h-6 text-white fill-current translate-x-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Floating Instagram Badge */}
      <div className="absolute top-4 right-4 z-20">
        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
          <svg className="w-4 h-4 text-white/95 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </div>
      </div>

      {/* Caption Overlay
          Mobile: always visible
          Desktop (md+): hidden until hover */}
      <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-300 z-10 min-h-[40%] opacity-100 md:opacity-0 md:group-hover:opacity-100">
        <p className="text-white text-sm line-clamp-3 mb-3 font-light leading-relaxed">
          {reel.caption || "Exquisite architectural concept by Vexa Architect."}
        </p>
      </div>

      {/* Subtle bottom gradient — desktop only */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent hidden md:block group-hover:opacity-0 transition-opacity duration-300" />
    </div>
  );
};

export default function Reels() {
  const [reels, setReels] = useState([]);
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    fetch('/api/instagram')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const videoData = (data.data || []).filter(item =>
          item.media_type === "VIDEO"
        ).slice(0, 8);

        if (videoData.length > 0) {
          setReels(videoData);
        } else {
          console.warn("Instagram API returned no video reels. Loading premium fallback content.");
          setReels(FALLBACK_REELS);
        }
      })
      .catch((err) => {
        console.error("Failed to load Instagram reels, using premium fallback:", err);
        setReels(FALLBACK_REELS);
      });
  }, []);

  return (
    <section className="py-20 w-full font-dominik bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-teritory uppercase">Interactive Feed</span>
          <h2 className="text-4xl md:text-5xl font-light text-primary mt-2">Latest Project Reels</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mt-4"></div>
        </div>

        {reels.length > 0 ? (
          <Swiper
            slidesPerView={1.2}
            spaceBetween={24}
            freeMode={true}
            loop={reels.length > 3}
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
                  onPlay={() => setPlayingId(playingId === reel.id ? null : reel.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {/* ── Follow for More — Instagram CTA ── */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-sm font-semibold tracking-widest text-teritory uppercase">
            Want to see more?
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-primary font-light text-base tracking-wide overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 active:scale-95"
          >
            {/* Shimmer sweep on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

            {/* Instagram icon */}
            <svg
              className="w-5 h-5 fill-current shrink-0 text-primary transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>

            <span>
              Follow <span className="font-semibold">@vexa.architect</span> for more
            </span>

            {/* Arrow */}
            <svg
              className="w-4 h-4 shrink-0 text-primary/60 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="text-xs text-white/30 tracking-wide">
            Follow us on Instagram for the latest architectural inspirations
          </p>
        </div>

      </div>
    </section>
  );
}