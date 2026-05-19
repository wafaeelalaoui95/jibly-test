'use client';

import { motion } from 'framer-motion';

/**
 * HeroScene — editorial / minimal composition
 *
 * Abstract geometric scene evoking travel: a horizon line, a sun-like circle,
 * a small parcel/suitcase form, and a subtle path connecting two points.
 * No characters, no clutter — large breathing room, refined colors.
 */
export function HeroScene({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`}>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Soft background field */}
        <defs>
          <radialGradient id="sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD24F" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFE38A" stopOpacity="0.6" />
          </radialGradient>
          <linearGradient id="card" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F5EFE3" />
          </linearGradient>
        </defs>

        {/* Large pastel disc — calm focal element */}
        <motion.circle
          cx="320"
          cy="190"
          r="130"
          fill="url(#sun)"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* Soft lavender arc — suggests trajectory / earth curvature */}
        <motion.path
          d="M 60 380 Q 250 260 440 380"
          stroke="#D2C6FF"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
        />

        {/* Start point */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
        >
          <circle cx="80" cy="370" r="10" fill="#7458E8" />
          <circle cx="80" cy="370" r="20" fill="#7458E8" fillOpacity="0.12" />
        </motion.g>

        {/* End point */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        >
          <circle cx="420" cy="370" r="10" fill="#2C2620" />
          <circle cx="420" cy="370" r="20" fill="#2C2620" fillOpacity="0.10" />
        </motion.g>

        {/* Floating envelope/parcel — abstract suitcase */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.g
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Card shadow */}
            <rect x="194" y="278" width="120" height="84" rx="14" fill="#2C2620" fillOpacity="0.08" />
            {/* Card body */}
            <rect x="190" y="270" width="120" height="84" rx="14" fill="url(#card)" stroke="#E2DACE" strokeWidth="1" />
            {/* Top accent line */}
            <rect x="206" y="290" width="40" height="6" rx="3" fill="#7458E8" />
            {/* Smaller line */}
            <rect x="206" y="304" width="80" height="3" rx="1.5" fill="#C7BCAB" />
            <rect x="206" y="314" width="60" height="3" rx="1.5" fill="#E2DACE" />
            {/* Stamp circle */}
            <circle cx="290" cy="335" r="9" fill="#FFE38A" stroke="#F5BE25" strokeWidth="1" />
          </motion.g>
        </motion.g>

        {/* Tiny moving accent — subtle motion of life */}
        <motion.circle
          cx="250"
          cy="290"
          r="3"
          fill="#7458E8"
          initial={{ cx: 80, opacity: 0 }}
          animate={{ cx: [80, 250, 420], opacity: [0, 1, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </svg>
    </div>
  );
}

/** Small inline illustration used in testimonials / footer */
export function MiniTraveler({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill="#F5EFE3" />
        <circle cx="32" cy="32" r="14" fill="#FFE38A" />
        <path d="M 12 46 Q 32 32 52 46" stroke="#7458E8" strokeWidth="1.5" fill="none" strokeDasharray="2 3" />
        <circle cx="14" cy="46" r="3" fill="#7458E8" />
        <circle cx="50" cy="46" r="3" fill="#2C2620" />
      </svg>
    </div>
  );
}
