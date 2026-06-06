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
    <section className="w-full bg-[#FFF9E5] py-10 md:py-16 font-sans text-gray-700 antialiased">
      <Container className="space-y-16">
        
        {/* --- SECTION 1: HERO COMPANY INTRODUCTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-4">
            <div className="inline-block px-2.5 py-0.5 bg-blue-50 border border-blue-200 rounded-full text-[11px] font-medium text-blue-600 uppercase tracking-wider">
              Who We Are
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
              About <span className="text-blue-600 font-semibold">Connect You</span> Real Estate
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed font-normal">
              At Connect You Real Estate, we are redefining the property landscape by eliminating traditional barriers. Operating on a strict <strong className="font-semibold">0% Brokerage model</strong>, our modern platform bridges the gap between premium lifestyle desires and real-world property ownership. 
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-normal">
              A comprehensive real estate firm serves as your strategic partner—handling market analysis, project scouting, developer validations, and smooth title transfers. We don't just find houses; we match families to neighborhoods and secure futures.
            </p>
          </div>

          {/* Right Column: Premium Geometric Images Layout */}
          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-7 overflow-hidden rounded-tl-[36px] rounded-br-[36px] shadow-md bg-white p-1.5">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" 
                alt="Our Corporate Office" 
                className="w-full h-52 object-cover rounded-tl-[30px] rounded-br-[30px] hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="col-span-5 overflow-hidden rounded-tr-[30px] rounded-bl-[30px] shadow-md bg-white p-1.5 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" 
                alt="Modern Real Estate Tower" 
                className="w-full h-40 object-cover rounded-tr-[24px] rounded-bl-[24px] hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* --- SECTION 2: EXPANDED ANIMATED COUNTER STATISTICS TRACK --- */}
        <div className="bg-white rounded-2xl border border-orange-100/60 p-6 md:p-8 shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-orange-100/40">
            
            {/* Stat Item 1 */}
            <div className="pt-2 lg:pt-0">
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                <AnimatedCounter endValue={18} />
              </p>
              <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                Cities Served
              </p>
            </div>

            {/* Stat Item 2 */}
            <div className="pt-2 lg:pt-0 lg:pl-2">
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                <AnimatedCounter endValue={45800} suffix="+" />
              </p>
              <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                Homes Settled
              </p>
            </div>

            {/* Stat Item 3 */}
            <div className="pt-2 lg:pt-0 lg:pl-2">
              <p className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                <AnimatedCounter endValue={2450} suffix="Cr+" />
              </p>
              <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                Loans Disbursed
              </p>
            </div>

            {/* Stat Item 4 */}
            <div className="pt-2 lg:pt-0 lg:pl-2">
              <p className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                <AnimatedCounter endValue={450} suffix="+" />
              </p>
              <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                Expert Team
              </p>
            </div>

            {/* New Stat Item 5 */}
            <div className="pt-2 lg:pt-0 lg:pl-2">
              <p className="text-2xl md:text-3xl font-bold text-amber-600 mb-1">
                <AnimatedCounter endValue={1200} suffix="+" />
              </p>
              <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                Premium Projects
              </p>
            </div>

            {/* New Stat Item 6 */}
            <div className="pt-2 lg:pt-0 lg:pl-2">
              <p className="text-2xl md:text-3xl font-bold text-rose-600 mb-1">
                <AnimatedCounter endValue={98} suffix="%" />
              </p>
              <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                Happy Clients
              </p>
            </div>

          </div>
        </div>

        {/* --- SECTION 3: MISSION & VISION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Block */}
          <div className="bg-white p-6 rounded-xl border border-orange-100/30 shadow-sm space-y-3 hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-xs md:text-sm font-normal">
              To democratize real estate discovery across India's top metropolitan hubs. We aim to provide transparent, end-to-end guidance, completely replacing complex agent brokerage overhead with direct, clean data, tech optimization, and uncompromised trust.
            </p>
          </div>

          {/* Vision Block */}
          <div className="bg-white p-6 rounded-xl border border-orange-100/30 shadow-sm space-y-3 hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-xs md:text-sm font-normal">
              To be recognized globally as India's most client-centric digital real estate consultancy ecosystem. We envision a marketplace where matching your dream home, finalizing automated legal verification steps, and locking in low-interest banking loans takes just a click.
            </p>
          </div>
        </div>

        {/* --- SECTION 4: EXTRA CONTAINER - CORE VALUES --- */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Values Driving Our Success</h2>
            <p className="text-gray-500 text-xs md:text-sm font-normal">We commit to principles that guarantee a seamless experience for every home seeker.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/60 p-5 rounded-xl border border-gray-100 text-center space-y-2">
              <span className="text-xl">🤝</span>
              <h4 className="text-sm font-bold text-gray-900">Absolute Transparency</h4>
              <p className="text-gray-500 text-xs leading-relaxed font-normal">No hidden terms, no sudden service costs. What you see is exactly what you sign up for.</p>
            </div>
            <div className="bg-white/60 p-5 rounded-xl border border-gray-100 text-center space-y-2">
              <span className="text-xl">⚡</span>
              <h4 className="text-sm font-bold text-gray-900">Tech-Driven Speed</h4>
              <p className="text-gray-500 text-xs leading-relaxed font-normal">Instant digital verifications and virtual property tours that respect your valuable time.</p>
            </div>
            <div className="bg-white/60 p-5 rounded-xl border border-gray-100 text-center space-y-2">
              <span className="text-xl">🎯</span>
              <h4 className="text-sm font-bold text-gray-900">Client-First Focus</h4>
              <p className="text-gray-500 text-xs leading-relaxed font-normal">Our advisory alignment works entirely on matching your custom criteria over sales quotas.</p>
            </div>
          </div>
        </div>

        {/* --- SECTION 5: EXTRA CONTAINER - OUR JOURNEY TIMELINE --- */}
        <div className="bg-white/40 border border-orange-100/20 p-6 md:p-8 rounded-2xl space-y-6">
          <h2 className="text-xl font-bold text-gray-900 text-center">How We Grew</h2>
          <div className="relative border-l border-blue-200 ml-4 md:ml-32 space-y-6">
            
            {/* Timeline Item 1 */}
            <div className="relative pl-6">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 block">2021</span>
              <h4 className="text-sm font-semibold text-gray-900">The Blueprint Foundation</h4>
              <p className="text-gray-500 text-xs font-normal max-w-xl">Started operations with just 3 members in a small hub, launching the pure 0% brokerage consultation framework.</p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-6">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-xs font-bold text-purple-600 block">2023</span>
              <h4 className="text-sm font-semibold text-gray-900">Expanding Across Tier-1 Hubs</h4>
              <p className="text-gray-500 text-xs font-normal max-w-xl">Crossed a threshold of 10,000+ happy property closures and automated our internal compliance systems.</p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-6">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-xs font-bold text-emerald-600 block">Present Day</span>
              <h4 className="text-sm font-semibold text-gray-900">Pan-India Market Ecosystem</h4>
              <p className="text-gray-500 text-xs font-normal max-w-xl">Now serving 18 major cities with unified home loan tracking tools integrated directly onto our site.</p>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}