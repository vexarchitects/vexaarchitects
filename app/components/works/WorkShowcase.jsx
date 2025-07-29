'use client'

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion';

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

const Masonry = () => {
  const items = [
    { id: '1', img: '/images/6-min.jpg', url: 'https://www.behance.net/mohdfayas', height: 500 },
    { id: '2', img: '/images/n10-min.png', url: 'https://www.behance.net/mohdfayas', height: 450 },
    { id: '4', img: '/images/11-min.png', url: 'https://www.behance.net/mohdfayas', height: 500 },
    { id: '5', img: '/images/n12-min.png', url: 'https://www.behance.net/mohdfayas', height: 300 },
    { id: '6', img: '/images/R6-min.png', url: 'https://www.behance.net/mohdfayas', height: 600 },
    { id: '7', img: '/images/R7-min.png', url: 'https://www.behance.net/mohdfayas', height: 400 },
    { id: '8', img: '/images/R8-min.png', url: 'https://www.behance.net/mohdfayas', height: 350 },
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

return (
  <div className="relative w-full px-4 md:px-20 pb-32">
    <div
      ref={containerRef}
      style={{ height: containerHeight.current }}
      className="relative w-full"
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="absolute box-content cursor-pointer"
          style={{ willChange: 'transform, width, height, opacity' }}
          onClick={() => window.open(item.url, '_blank', 'noopener')}
        >
          <div
            className="w-full h-full bg-cover bg-center rounded-[10px] shadow-md"
            style={{ backgroundImage: `url(${item.img})` }}
          />
        </div>
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
        >
          <span className="mr-2">See More</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
  </div>
)

}

export default Masonry
