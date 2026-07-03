import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import HomeFrom from '../forms/HomeFrom'; 

export default function Hero() {
  return (
    <section 
      // Added '-mt-[104px]' to pull the hero section up under the navbar
      // Changed padding-top to 'pt-[130px]' to push the content down below the floating navbar
      className="relative w-full min-h-screen bg-[url('/images/hill-bg.jpg')] bg-cover bg-center flex items-center pt-[130px] pb-10 md:pb-14 lg:pb-20"
      style={{
        backgroundImage: `url('/hillside/hillsite-logo2.png')` // Make sure your background image points here
      }}
    >
      {/* Subtle overlay to guarantee clean text contrast across varying viewport sizes */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      
      <Container className="relative z-10 w-full">
        
        {/* Left Content Column with reveal animation */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 max-w-3xl text-left text-white"
        >
          
          {/* Core Brand & Typography Stack */}
          <div className="space-y-3">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-md text-[#7fff00]"
            >
              Hillsite
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-snug tracking-normal drop-shadow-md"
            >
              Invest in Nature. Live Beyond Walls.
            </motion.h1>
          </div>

          {/* Frosted Glass Information Card Block with separate fade-in */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full bg-black/35 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-white/95 space-y-4 shadow-xl"
          >
            <p className="text-sm md:text-base font-normal leading-relaxed text-gray-100">
              At Hillsite, we offer exclusive land in the tranquil beauty of Yelagiri Hills, handpicked for their scenic views, privacy, and connection to nature.
            </p>
            <p className="text-sm md:text-base font-normal leading-relaxed text-gray-100">
              Perfect for luxury homes, retreats, or eco-conscious investments, each plot is selected for its landscape value and long-term potential. Our team ensures clear documentation, discreet site visits, and personalized service for refined buyers seeking more than just land — a legacy.
            </p>
          </motion.div>
          
        </motion.div>

      </Container>
    </section>
  );
}