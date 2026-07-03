import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

// Hardcoded fallback data in case database fetch fails or is loading
const FALLBACK_CARDS = [
  {
    id: 1,
    title: 'Scenic Hill Views',
    description: 'Enjoy breathtaking panoramic views of nature and the serene landscape of Yelagiri Hills right from your property.',
    iconName: 'Mountain'
  },
  {
    id: 2,
    title: 'Premium Legal Verification',
    description: 'Clear titles, certified survey numbers, and legally validated land deeds for a 100% stress-free acquisition.',
    iconName: 'FileCheck'
  },
  {
    id: 3,
    title: 'High Return Investment',
    description: 'Yelagiri is one of the fastest-growing vacation destinations, ensuring high appreciation of land value.',
    iconName: 'TrendingUp'
  },
  {
    id: 4,
    title: 'Custom Villa Construction',
    description: 'We offer optional customizable eco-friendly villa designs matching your preferences and lifestyle.',
    iconName: 'Home'
  }
];

// Color mapping for different icons to give them distinct, curated aesthetic bubbles
const ICON_THEMES = {
  Mountain: { bg: 'bg-emerald-50 border-emerald-100 text-emerald-600', gradient: 'from-emerald-500 to-teal-600' },
  FileCheck: { bg: 'bg-teal-50 border-teal-100 text-teal-600', gradient: 'from-teal-500 to-emerald-600' },
  TrendingUp: { bg: 'bg-amber-50 border-amber-100 text-amber-600', gradient: 'from-amber-500 to-orange-600' },
  Home: { bg: 'bg-purple-50 border-purple-100 text-purple-600', gradient: 'from-purple-500 to-pink-600' },
  default: { bg: 'bg-slate-50 border-slate-100 text-slate-600', gradient: 'from-slate-500 to-slate-700' }
};

export default function WhyChooseHillsite() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/why-choose');
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setCards(data);
          } else {
            setCards(FALLBACK_CARDS);
          }
        } else {
          setCards(FALLBACK_CARDS);
        }
      } catch (error) {
        console.error('Failed to fetch WhyChoose cards from backend:', error);
        setCards(FALLBACK_CARDS);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  // Framer Motion Container Animation (staggered entries)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Card Animation (slide up and fade in)
  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="px-4 py-1.5 rounded-full text-xs font-bold text-green-700 bg-green-50 border border-green-200/50 uppercase tracking-widest inline-block"
          >
            Exclusive Advantages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-gray-900 mt-4 tracking-tight"
          >
            Why Choose Hillsite?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-4 font-medium leading-relaxed"
          >
            Discover what makes our premium plots in Yelagiri Hills the perfect choice for your vacation home and long-term investment.
          </motion.p>
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((card) => {
            const theme = ICON_THEMES[card.iconName] || ICON_THEMES.default;
            const IconComponent = LucideIcons[card.iconName] || LucideIcons.HelpCircle;

            return (
              <motion.div
                key={card.id || card.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col items-start"
              >
                {/* Decorative border highlight gradient */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-500/10 pointer-events-none transition-colors duration-300" />
                
                {/* Icon bubble */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 transition-all duration-300 group-hover:scale-110 shadow-sm ${theme.bg}`}>
                  <IconComponent size={26} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
