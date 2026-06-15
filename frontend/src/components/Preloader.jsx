import React, { useEffect, useState } from 'react';

function HillSiteAnimation() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width="150"
      height="150"
      aria-label="Hill site real estate animation"
    >
      <style>{`
        @keyframes sunRise {
          0%, 100% { opacity: 0.85; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
        @keyframes cloudDrift {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(5px); }
        }
        @keyframes cloudDrift2 {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-4px); }
        }
        @keyframes windowGlow {
          0%, 100% { fill: #FFD966; }
          50% { fill: #FFB300; }
        }
        @keyframes windowOff {
          0%, 100% { fill: #B8C4CC; opacity: 0.5; }
        }
        @keyframes flagWave {
          0%, 100% { transform: skewX(0deg); }
          50% { transform: skewX(-10deg); }
        }
        @keyframes treeSway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes treeSway2 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-2deg); }
        }
        @keyframes pathShimmer {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Sky background */}
      <rect x="0" y="0" width="120" height="120" rx="12" fill="#E8F4FD" />

      {/* Sun */}
      <g style={{ animation: 'sunRise 3s ease-in-out infinite', transformOrigin: '90px 22px' }}>
        <circle cx="90" cy="22" r="10" fill="#FFD166" opacity="0.95" />
        {/* Sun rays */}
        <line x1="90" y1="8" x2="90" y2="5" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <line x1="90" y1="36" x2="90" y2="39" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <line x1="76" y1="22" x2="73" y2="22" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <line x1="104" y1="22" x2="107" y2="22" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <line x1="80" y1="12" x2="78" y2="10" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <line x1="100" y1="32" x2="102" y2="34" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <line x1="100" y1="12" x2="102" y2="10" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <line x1="80" y1="32" x2="78" y2="34" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </g>

      {/* Cloud 1 */}
      <g style={{ animation: 'cloudDrift 4s ease-in-out infinite', transformOrigin: '30px 20px' }}>
        <ellipse cx="30" cy="22" rx="12" ry="6" fill="white" opacity="0.9" />
        <ellipse cx="22" cy="24" rx="7" ry="5" fill="white" opacity="0.9" />
        <ellipse cx="38" cy="24" rx="8" ry="5" fill="white" opacity="0.9" />
      </g>

      {/* Cloud 2 (smaller) */}
      <g style={{ animation: 'cloudDrift2 5s ease-in-out infinite', transformOrigin: '65px 14px' }}>
        <ellipse cx="65" cy="14" rx="8" ry="4" fill="white" opacity="0.7" />
        <ellipse cx="59" cy="16" rx="5" ry="3.5" fill="white" opacity="0.7" />
        <ellipse cx="71" cy="16" rx="5" ry="3.5" fill="white" opacity="0.7" />
      </g>

      {/* Far mountains */}
      <polygon points="0,80 20,50 40,65 60,42 80,58 100,38 120,55 120,80" fill="#A8C5DA" opacity="0.5" />
      <polygon points="0,85 15,60 35,72 55,52 75,66 95,48 120,62 120,85" fill="#C2D8E8" opacity="0.5" />

      {/* Main hill */}
      <ellipse cx="60" cy="105" rx="70" ry="38" fill="#5A9B52" />
      <ellipse cx="60" cy="100" rx="55" ry="28" fill="#6BAF62" />

      {/* Hill highlight */}
      <ellipse cx="55" cy="88" rx="32" ry="14" fill="#7DC470" opacity="0.5" />

      {/* Path up the hill */}
      <path
        d="M 60 118 Q 58 108 57 98 Q 56 90 58 84"
        stroke="#C9A96E" strokeWidth="2.5" fill="none" strokeLinecap="round"
        style={{ animation: 'pathShimmer 2s ease-in-out infinite' }}
      />

      {/* House base */}
      <rect x="42" y="70" width="32" height="20" rx="1.5" fill="#F0E6D3" />
      <rect x="43" y="71" width="30" height="18" rx="1" fill="#FAF3E8" />

      {/* House roof */}
      <polygon points="38,71 60,54 82,71" fill="#C0614A" />
      <polygon points="40,71 60,56 80,71" fill="#D4735C" />
      {/* Roof ridge */}
      <line x1="60" y1="54" x2="60" y2="71" stroke="#B05540" strokeWidth="0.8" opacity="0.5" />

      {/* Chimney */}
      <rect x="66" y="57" width="5" height="9" rx="0.5" fill="#A85540" />
      <rect x="65" y="56" width="7" height="2.5" rx="0.5" fill="#8B4535" />
      {/* Smoke puff */}
      <circle cx="68" cy="53" r="2" fill="#CCC" opacity="0.4" />
      <circle cx="70" cy="50" r="1.5" fill="#CCC" opacity="0.3" />

      {/* Door */}
      <rect x="54" y="79" width="8" height="11" rx="1" fill="#8AABCC" />
      <rect x="55" y="80" width="3" height="10" rx="0.5" fill="#7097BB" />
      <rect x="59" y="80" width="3" height="10" rx="0.5" fill="#7097BB" />
      {/* Door knob */}
      <circle cx="58.5" cy="85.5" r="0.8" fill="#C9A96E" />

      {/* Windows */}
      <rect x="44" y="73" width="7" height="6" rx="0.8"
        style={{ animation: 'windowGlow 2.1s ease-in-out infinite' }} />
      <rect x="65" y="73" width="7" height="6" rx="0.8"
        style={{ animation: 'windowGlow 2.7s ease-in-out infinite 0.5s' }} />
      {/* Window cross */}
      <line x1="47.5" y1="73" x2="47.5" y2="79" stroke="#C9A96E" strokeWidth="0.6" opacity="0.5" />
      <line x1="44" y1="76" x2="51" y2="76" stroke="#C9A96E" strokeWidth="0.6" opacity="0.5" />
      <line x1="68.5" y1="73" x2="68.5" y2="79" stroke="#C9A96E" strokeWidth="0.6" opacity="0.5" />
      <line x1="65" y1="76" x2="72" y2="76" stroke="#C9A96E" strokeWidth="0.6" opacity="0.5" />

      {/* Flag on roof peak */}
      <line x1="60" y1="54" x2="60" y2="47" stroke="#888" strokeWidth="0.8" />
      <rect x="60" y="47" width="6" height="4" rx="0.5" fill="#C0614A"
        style={{ animation: 'flagWave 1.8s ease-in-out infinite', transformOrigin: '60px 49px' }} />

      {/* Left tree */}
      <g style={{ animation: 'treeSway 3s ease-in-out infinite', transformOrigin: '32px 80px' }}>
        <rect x="31" y="82" width="3" height="10" rx="1" fill="#8B6635" />
        <ellipse cx="32.5" cy="79" rx="7" ry="8" fill="#3D8C34" />
        <ellipse cx="32.5" cy="75" rx="5" ry="6" fill="#4BA340" />
      </g>

      {/* Right tree */}
      <g style={{ animation: 'treeSway2 3.5s ease-in-out infinite', transformOrigin: '90px 82px' }}>
        <rect x="89" y="84" width="3" height="9" rx="1" fill="#8B6635" />
        <ellipse cx="90.5" cy="81" rx="6" ry="7" fill="#3D8C34" />
        <ellipse cx="90.5" cy="77" rx="4.5" ry="5" fill="#4BA340" />
      </g>

      {/* Small bushes */}
      <ellipse cx="45" cy="88" rx="5" ry="3.5" fill="#4BA340" opacity="0.8" />
      <ellipse cx="76" cy="89" rx="4.5" ry="3" fill="#4BA340" opacity="0.8" />

      {/* Ground flowers / dots */}
      <circle cx="38" cy="91" r="1.2" fill="#FFD166" opacity="0.9" />
      <circle cx="84" cy="92" r="1.2" fill="#FFD166" opacity="0.9" />
      <circle cx="52" cy="93" r="1" fill="#FF8FAB" opacity="0.8" />
      <circle cx="70" cy="94" r="1" fill="#FF8FAB" opacity="0.8" />
    </svg>
  );
}

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setShouldRender(false), 400);
      return () => clearTimeout(t);
    }
  }, [loading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFF9E5] transition-all duration-700 ease-in-out ${
        loading ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
      }`}
    >
      <style>{`
        @keyframes bounceSmooth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes shadowPulse {
          0%, 100% { transform: scaleX(1); opacity: 0.4; }
          50% { transform: scaleX(0.6); opacity: 0.15; }
        }
      `}</style>

      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className="relative flex items-center justify-center"
          style={{ animation: 'bounceSmooth 2.2s ease-in-out infinite' }}
        >
          <HillSiteAnimation />
          <div
            className="absolute -bottom-1 w-24 h-2 bg-black/10 rounded-full blur-[5px]"
            style={{ animation: 'shadowPulse 2.2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </div>
  );
}