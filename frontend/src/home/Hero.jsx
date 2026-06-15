import React from 'react';
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
      
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        
        {/* Left Content Column */}
        <div className="space-y-5 lg:col-span-7 order-1 flex flex-col justify-center text-white">
          
          {/* Logo Placed Above Content */}
          <div className="select-none animate-fade-in">
            <img 
              src="/hillside/Hillsite-Favicon.webp" 
              alt="Hillsite Logo" 
              className="w-20 md:w-28 h-auto object-contain drop-shadow-md"
              loading="eager"
            />
          </div>

          {/* Core Brand & Typography Stack */}
          <div className="space-y-3">
            {/* Reduced Title Sizes and Font-Weights */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-md">
              Hillsite
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-snug tracking-normal drop-shadow-md">
              Invest in Nature. Live Beyond Walls.
            </h1>
          </div>

          {/* Frosted Glass Information Card Block */}
          <div className="w-full max-w-2xl bg-black/35 backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-6 text-white/90 space-y-3.5 shadow-xl">
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-gray-100">
              At Hillsite, we offer exclusive land in the tranquil beauty of Yelagiri Hills, handpicked for their scenic views, privacy, and connection to nature.
            </p>
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-gray-100">
              Perfect for luxury homes, retreats, or eco-conscious investments, each plot is selected for its landscape value and long-term potential. Our team ensures clear documentation, discreet site visits, and personalized service for refined buyers seeking more than just land — a legacy.
            </p>
          </div>
          
        </div>

        {/* Right Column: HomeForm Component */}
        <div className="lg:col-span-5 order-2 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-md lg:max-w-full">
            <HomeFrom />
          </div>
        </div>

      </Container>
    </section>
  );
}