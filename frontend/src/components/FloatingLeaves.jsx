import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Refined hand-drawn SVGs with delicate inner details and translucent fills
const LEAF_TYPES = [
  // Leaf Type 1: Classic slender leaf
  (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 4 9 4 15a8 8 0 0 0 16 0c0-6-8-13-8-13z" fill="currentColor" fillOpacity="0.08" />
      <path d="M12 10v10" opacity="0.6" />
      <path d="M12 12c1.5 1 2.5 1 3.5 0M12 14c-1.5 1-2.5 1-3.5 0" opacity="0.4" />
    </svg>
  ),
  // Leaf Type 2: Broad lobed oak-style leaf
  (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 9 5 9 8c0 1.5 1 2 0 3.5C8 13 6 12 6 14.5c0 2 2 4 6 5.5c4-1.5 6-3.5 6-5.5c0-2.5-2-1.5-3-3.5c-1-1.5 0-2 0-3.5c0-3-3-6-3-6z" fill="currentColor" fillOpacity="0.08" />
      <path d="M12 8v11" opacity="0.6" />
    </svg>
  ),
  // Leaf Type 3: Willow slender leaf
  (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 7 8 7 14c0 3 2.5 5.5 5 5.5s5-2.5 5-5.5c0-6-5-12-5-12z" fill="currentColor" fillOpacity="0.08" />
      <path d="M12 19v3" opacity="0.6" />
      <path d="M12 6c-2 2-3 5-3 8" opacity="0.5" />
    </svg>
  )
];

const LEAF_COLORS = [
  '#15803d', // green-700
  '#16a34a', // green-600
  '#22c55e', // green-500
  '#14b8a6', // teal-500
  '#84cc16', // lime-500
  '#4ade80'  // green-400
];

export default function FloatingLeaves() {
  const leafData = useMemo(() => {
    return Array.from({ length: 38 }).map((_, idx) => {
      const size = Math.floor(Math.random() * 28) + 14; // 14px to 42px
      const left = Math.random() * 100;
      const delay = Math.random() * -20; // Negative delay ensures leaves are already falling on mount
      const duration = Math.random() * 15 + 18; // 18s to 33s
      
      const rotateStart = Math.floor(Math.random() * 360);
      const rotateEnd = rotateStart + (Math.random() > 0.5 ? 270 : -270);
      
      const leafIndex = idx % LEAF_TYPES.length;
      const color = LEAF_COLORS[idx % LEAF_COLORS.length];
      const swayWidth = Math.floor(Math.random() * 40) + 30; // 30px to 70px lateral movement
      const swayDuration = Math.random() * 4 + 4; // 4s to 8s independent looping sway duration

      // Deep, rich depth-of-field configurations
      let filter = '';
      let opacityMax = 0.6;
      let zIndex = 10;
      
      if (size > 32) {
        filter = 'blur(1.2px) drop-shadow(4px 12px 8px rgba(0,0,0,0.06))'; // Foreground close to camera
        opacityMax = 0.8;
        zIndex = 20;
      } else if (size < 20) {
        filter = 'blur(0.6px) drop-shadow(1px 2px 2px rgba(0,0,0,0.03))'; // Deep background
        opacityMax = 0.35;
        zIndex = 5;
      } else {
        filter = 'drop-shadow(2px 6px 4px rgba(0,0,0,0.05))'; // Sharp mid-ground
        opacityMax = 0.65;
        zIndex = 15;
      }

      return {
        id: idx,
        size,
        left,
        delay,
        duration,
        rotateStart,
        rotateEnd,
        leafIndex,
        color,
        swayWidth,
        swayDuration,
        filter,
        opacityMax,
        zIndex
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-[15]">
      {leafData.map((leaf) => {
        const renderLeafSvg = LEAF_TYPES[leaf.leafIndex];

        return (
          <motion.div
            key={leaf.id}
            className="absolute"
            style={{
              top: '-5%',
              left: `${leaf.left}%`,
              width: leaf.size,
              height: leaf.size,
              color: leaf.color,
              filter: leaf.filter,
              zIndex: leaf.zIndex,
            }}
            initial={{ 
              y: '-10vh', 
              rotate: leaf.rotateStart, 
              rotateX: 0, 
              rotateY: 0, 
              opacity: 0 
            }}
            animate={{
              y: '110vh',
              x: [0, leaf.swayWidth, -leaf.swayWidth, 0],
              rotate: leaf.rotateEnd,
              rotateX: [0, 45, -45, 0],
              rotateY: [0, 180, 360],
              opacity: [0, leaf.opacityMax, leaf.opacityMax, 0],
            }}
            transition={{
              // Global vertical fall tracking
              y: {
                duration: leaf.duration,
                repeat: Infinity,
                delay: leaf.delay,
                ease: 'linear',
              },
              // Fluid, organic multi-axis sway and tumble dynamics
              x: {
                duration: leaf.swayDuration,
                repeat: Infinity,
                delay: leaf.delay,
                ease: 'easeInOut',
              },
              rotate: {
                duration: leaf.duration,
                repeat: Infinity,
                delay: leaf.delay,
                ease: 'linear',
              },
              rotateX: {
                duration: leaf.swayDuration * 1.5,
                repeat: Infinity,
                delay: leaf.delay,
                ease: 'easeInOut',
              },
              rotateY: {
                duration: leaf.swayDuration * 2,
                repeat: Infinity,
                delay: leaf.delay,
                ease: 'linear',
              },
              // Smooth fading boundaries
              opacity: {
                duration: leaf.duration,
                repeat: Infinity,
                delay: leaf.delay,
                ease: 'linear',
                times: [0, 0.15, 0.85, 1] // Stays visible for the majority of the fall
              }
            }}
          >
            {renderLeafSvg(leaf.size)}
          </motion.div>
        );
      })}
    </div>
  );
}