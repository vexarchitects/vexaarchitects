'use client'

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion';
import Head from 'next/head';

const useMeasure = () => {
  const ref = useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (!ref.current) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  return [ref, size]
}

const Masonry = ({ 
  title = "Vexa Architect - Recent Architectural Projects Gallery",
  description = "Explore Vexa Architect's latest architectural projects featuring modern residential designs, commercial buildings, and innovative architectural solutions. Contemporary architecture and interior design showcase.",
  keywords = "architecture, residential design, commercial architecture, modern buildings, architectural firm, interior design, construction, building design, contemporary architecture, Vexa Architect"
}) => {
  const items = [
    { 
      id: '1', 
      img: '/images/6.webp  ', 
      url: 'https://www.behance.net/mohdfayas', 
      height: 500,
      alt: 'Modern residential architecture project by Vexa Architect featuring contemporary design elements',
      title: 'Contemporary Residential Design'
    },
    { 
      id: '2', 
      img: '/images/n10.webp', 
      url: 'https://www.behance.net/mohdfayas', 
      height: 450,
      alt: 'Commercial building architecture showcasing innovative facade design by Vexa Architect',
      title: 'Commercial Building Project'
    },
    { 
      id: '4', 
      img: '/images/modern-residence-exterior-design-kannur.webp', 
      url: 'https://www.behance.net/mohdfayas', 
      height: 500,
      alt: 'Luxury villa architecture with modern interior design by Vexa Architect',
      title: 'Modern Luxury Villa'
    },
    { 
      id: '5', 
      img: '/images/n12.webp', 
      url: 'https://www.behance.net/mohdfayas', 
      height: 300,
      alt: 'Sustainable architecture project featuring eco-friendly building design',
      title: 'Sustainable Architecture Design'
    },
    { 
      id: '6', 
      img: '/images/R6.webp', 
      url: 'https://www.behance.net/mohdfayas', 
      height: 600,
      alt: 'Mixed-use development project with contemporary architectural approach',
      title: 'Mixed-Use Development'
    },
    { 
      id: '7', 
      img: '/images/R7.webp', 
      url: 'https://www.behance.net/mohdfayas', 
      height: 400,
      alt: 'Interior design project showcasing modern space planning and furniture layout',
      title: 'Modern Interior Design'
    },
    { 
      id: '8', 
      img: '/images/R8.webp', 
      url: 'https://www.behance.net/mohdfayas', 
      height: 350,
      alt: 'Architectural visualization and 3D rendering of upcoming residential complex',
      title: 'Architectural Visualization'
    },
  ]

  const [containerRef, { width }] = useMeasure()
  const [imagesReady, setImagesReady] = useState(false)
  const containerHeight = useRef(0)

  useEffect(() => {
    const preload = async () => {
      await Promise.all(
        items.map(
          (item) =>
            new Promise((res) => {
              const img = new Image()
              img.src = item.img
              img.alt = item.alt
              img.onload = img.onerror = () => res()
            })
        )
      )
      setImagesReady(true)
    }
    preload()
  }, [items])

  const columns = useMemo(() => {
    if (width >= 1500) return 3
    if (width >= 1000) return 3
    if (width >= 600) return 2
    return 1
  }, [width])

  const grid = useMemo(() => {
    if (!width) return []
    const gap = 24
    const colHeights = Array(columns).fill(0)
    const columnWidth = (width - (columns - 1) * gap) / columns

    const layout = items.map((item) => {
      const col = colHeights.indexOf(Math.min(...colHeights))
      const x = col * (columnWidth + gap)
      const y = colHeights[col]
      colHeights[col] += item.height + gap
      return { ...item, x, y, w: columnWidth, h: item.height }
    })

    containerHeight.current = Math.max(...colHeights) - gap
    return layout
  }, [columns, items, width])

  useLayoutEffect(() => {
    if (!imagesReady) return
    grid.forEach((item, i) => {
      gsap.fromTo(
        `[data-key="${item.id}"]`,
        {
          opacity: 0,
          y: item.y + 100,
          x: item.x,
          width: item.w,
          height: item.h,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: item.y,
          x: item.x,
          width: item.w,
          height: item.h,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.05,
        }
      )
    })
  }, [grid, imagesReady])

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": title,
    "description": description,
    "creator": {
      "@type": "Organization",
      "name": "Vexa Architect",
      "url": "https://www.behance.net/mohdfayas"
    },
    "image": items.map(item => ({
      "@type": "ImageObject",
      "url": item.img,
      "name": item.title,
      "description": item.alt
    })),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.behance.net/mohdfayas"
    }
  };

return (
  <>
    {/* SEO Meta Tags */}
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Vexa Architect" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.behance.net/mohdfayas" />
      <meta property="og:image" content={items[0]?.img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={items[0]?.img} />
      <link rel="canonical" href="https://www.behance.net/mohdfayas" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>

    <section 
      className="relative w-full px-4 md:px-20 pb-32"
      role="main"
      aria-label="Architectural Portfolio Gallery"
    >
      <header className="sr-only">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <div
        ref={containerRef}
        style={{ height: containerHeight.current }}
        className="relative w-full"
        role="img"
        aria-label="Architectural projects gallery showcasing recent work by Vexa Architect"
      >
        {grid.map((item, index) => (
          <article
            key={item.id}
            data-key={item.id}
            className="absolute box-content cursor-pointer"
            style={{ willChange: 'transform, width, height, opacity' }}
            onClick={() => window.open(item.url, '_blank', 'noopener,noreferrer')}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title} - ${item.alt}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(item.url, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-[10px] shadow-md"
              style={{ backgroundImage: `url(${item.img})` }}
              role="img"
              aria-label={item.alt}
            />
            {/* Hidden image for better SEO */}
            <img
              src={item.img}
              alt={item.alt}
              title={item.title}
              className="sr-only"
              loading={index < 3 ? "eager" : "lazy"}
              width={item.w}
              height={item.h}
            />
          </article>
        ))}
      </div>

      {/* See More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mt-16"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 500, damping: 20 }}
        >
          <a
            href="https://www.behance.net/mohdfayas"
            className="inline-flex items-center font-medium border-b border-gray-800 text-lg group"
            aria-label="View more architectural projects on Vexa Architect's Behance portfolio"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="mr-2">See More</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  </>
)

}

export default Masonry