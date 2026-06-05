import React, { useEffect, useState } from 'react';
import Container from '../components/Container'; // Ensure path matches your folder tree

// Reusable Count-Up Animation Component using standard browser requestAnimationFrame
const AnimatedCounter = ({ endValue, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth ease-out tracking calculation
      const easeOutQuad = progress * (2 - progress);
      setCount(Math.floor(easeOutQuad * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [endValue, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default function About() {
  return (
    <section className="w-full bg-[#FFF9E5] py-12 md:py-20 font-sans text-gray-800">
      <Container className="space-y-20">
        
        {/* --- SECTION 1: HERO COMPANY INTRODUCTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold text-blue-600 uppercase tracking-wider">
              Who We Are
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              About <span className="text-blue-600">Connect You</span> Real Estate
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              At Connect You Real Estate, we are redefining the property landscape by eliminating traditional barriers. Operating on a strict <strong>0% Brokerage model</strong>, our modern platform bridges the gap between premium lifestyle desires and real-world property ownership. 
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              A comprehensive real estate firm serves as your strategic partner—handling market analysis, project scouting, developer validations, and smooth title transfers. We don't just find houses; we match families to neighborhoods and secure futures.
            </p>
          </div>

          {/* Right Column: Premium Geometric Images Layout */}
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7 overflow-hidden rounded-tl-[50px] rounded-br-[50px] shadow-lg bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" 
                alt="Our Corporate Office" 
                className="w-full h-64 object-cover rounded-tl-[42px] rounded-br-[42px] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="col-span-5 overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-lg bg-white p-2 mt-12">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" 
                alt="Modern Real Estate Tower" 
                className="w-full h-48 object-cover rounded-tr-[32px] rounded-bl-[32px] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* --- SECTION 2: ANIMATED COUNTER STATISTICS TRACK --- */}
        <div className="bg-white rounded-3xl border border-orange-100/70 p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-orange-100/50">
            
            {/* Stat Item 1 */}
            <div className="pt-4 md:pt-0">
              <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-2">
                <AnimatedCounter endValue={7} />
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Cities Served
              </p>
            </div>

            {/* Stat Item 2 */}
            <div className="pt-4 md:pt-0">
              <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                <AnimatedCounter endValue={12450} suffix="+" />
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Homes Bought & Settled
              </p>
            </div>

            {/* Stat Item 3 */}
            <div className="pt-4 md:pt-0">
              <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-600 mb-2">
                <AnimatedCounter endValue={850} suffix="Cr+" />
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Home Loans Disbursed
              </p>
            </div>

            {/* Stat Item 4 */}
            <div className="pt-4 md:pt-0">
              <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-600 mb-2">
                <AnimatedCounter endValue={120} suffix="+" />
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Expert Team Members
              </p>
            </div>

          </div>
        </div>

        {/* --- SECTION 3: MISSION & VISION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Block */}
          <div className="bg-white p-8 rounded-2xl border border-orange-100/40 shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              To democratize real estate discovery across India's top metropolitan hubs. We aim to provide transparent, end-to-end guidance, completely replacing complex agent brokerage overhead with direct, clean data, tech optimization, and uncompromised trust.
            </p>
          </div>

          {/* Vision Block */}
          <div className="bg-white p-8 rounded-2xl border border-orange-100/40 shadow-md space-y-4 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              To be recognized globally as India's most client-centric digital real estate consultancy ecosystem. We envision a marketplace where matching your dream home, finalizing automated legal verification steps, and locking in low-interest banking loans takes just a click.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}