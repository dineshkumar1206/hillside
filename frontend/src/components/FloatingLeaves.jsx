import React from 'react';
import { motion } from 'framer-motion';

// Custom hand-drawn style leaf SVGs for natural look
const LEAF_TYPES = [
  // Leaf Type 1: Classic slender leaf
  (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 4 9 4 15a8 8 0 0 0 16 0c0-6-8-13-8-13z" />
      <path d="M12 10v10" />
    </svg>
  ),
  // Leaf Type 2: Broad lobed oak-style leaf
  (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 9 5 9 8c0 1.5 1 2 0 3.5C8 13 6 12 6 14.5c0 2 2 4 6 5.5c4-1.5 6-3.5 6-5.5c0-2.5-2-1.5-3-3.5c-1-1.5 0-2 0-3.5c0-3-3-6-3-6z" />
      <path d="M12 8v11" />
    </svg>
  ),
  // Leaf Type 3: Willow slender leaf
  (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 7 8 7 14c0 3 2.5 5.5 5 5.5s5-2.5 5-5.5c0-6-5-12-5-12z" />
      <path d="M12 19v3" />
      <path d="M12 6c-2 2-3 5-3 8" />
    </svg>
  )
];

const LEAF_COLORS = [
  'text-emerald-600/15',
  'text-green-500/15',
  'text-teal-600/10',
  'text-lime-500/15',
  'text-[#7fff00]/10'
];

export default function FloatingLeaves() {
  // Generate 22 leaves for a denser, more immersive forest feel
  const leaves = Array.from({ length: 22 });

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {leaves.map((_, i) => {
        // Vary parameters to create natural variance & depth of field
        const size = Math.floor(Math.random() * 22) + 12; // sizes 12px to 34px
        const left = Math.floor(Math.random() * 100); // 0% to 100%
        const delay = Math.random() * 12; // staggered delays
        const duration = Math.random() * 18 + 18; // speed: 18s to 36s
        const rotateStart = Math.floor(Math.random() * 360);
        const rotateEnd = rotateStart + (Math.random() > 0.5 ? 360 : -360) + (Math.random() * 180 - 90);
        
        // Random leaf model & color
        const renderLeafSvg = LEAF_TYPES[i % LEAF_TYPES.length];
        const colorClass = LEAF_COLORS[i % LEAF_COLORS.length];
        
        // Horizontal sway offsets
        const swayWidth = Math.floor(Math.random() * 40) + 20; // 20px to 60px sway

        return (
          <motion.div
            key={i}
            className={`absolute ${colorClass} select-none`}
            style={{
              top: '-8%',
              left: `${left}%`,
              width: size,
              height: size,
            }}
            initial={{ y: '-8%', rotate: rotateStart, opacity: 0 }}
            animate={{
              y: '108vh',
              x: [0, swayWidth, -swayWidth, swayWidth / 2, 0],
              rotate: rotateEnd,
              opacity: [0, 0.45, 0.45, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: 'linear',
            }}
          >
            {renderLeafSvg(size)}
          </motion.div>
        );
      })}
    </div>
  );
}
