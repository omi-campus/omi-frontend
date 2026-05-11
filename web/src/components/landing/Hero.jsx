'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const heroImages = [
  '/images/hero/hero-1.png',
  '/images/hero/hero-2.png',
  '/images/hero/hero-3.png',
  '/images/hero/hero-4.png',
  '/images/hero/hero-5.png',
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [vendorHovered, setVendorHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative flex min-h-145 items-center justify-between gap-8 overflow-hidden bg-forest-green px-16 py-16"
      style={{
        backgroundImage: `
          radial-gradient(circle at 0 0, rgba(255,255,255,0.12) 1.5px, transparent 1.5px),
          linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    >
      {/* Text content */}
      <div className="z-10 max-w-2xl">
        <h1 className="text-6xl font-bold leading-tight text-chalk-white">
          The campus marketplace built for UNIJOS students
        </h1>
        <p className="text-body mt-5 max-w-sm text-chalk-white/70">
          A curated digital experience to buy, sell, and connect within the Jos university community. Reliable, verified, and strictly academic.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Link
            href="/signup"
            className={`rounded-button px-6 py-3 text-body font-bold transition-all duration-200 ${
              vendorHovered
                ? 'border-2 border-chalk-white text-chalk-white hover:bg-chalk-white/10'
                : 'bg-chalk-white text-forest-green hover:opacity-90'
            }`}
          >
            I&apos;m a Student
          </Link>
          <Link
            href="/signup?type=vendor"
            onMouseEnter={() => setVendorHovered(true)}
            onMouseLeave={() => setVendorHovered(false)}
            className={`rounded-button px-6 py-3 text-body font-bold transition-all duration-200 ${
              vendorHovered
                ? 'bg-chalk-white text-forest-green hover:opacity-90'
                : 'border-2 border-chalk-white text-chalk-white hover:bg-chalk-white hover:text-forest-green'
            }`}
          >
            I&apos;m a Vendor
          </Link>
        </div>
      </div>

      {/* Shuffling image */}
      <div className="relative z-10 h-96 w-120 shrink-0 overflow-hidden rounded-card">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Campus marketplace"
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </section>
  )
}