import { useState } from 'react';
import { Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Project Data ─────────────────────────────────────────────────────────────
// Add more projects here — the carousel handles them automatically
const projects = [
  {
    id: 1,
    name: 'Centre Park',
    location: 'Dombivali',
    price: '45.49 L Onwards',
    configuration: '1, 2, 3 BHK',
    builtupArea: '453 - 884 sq ft',
    images: [
      '/images/Centre-Park.jpg',
    ],
  },
  {
    id: 2,
    name: 'Purva Panorama',
    location: 'Thane, Mumbai',
    price: '1.80 Cr Onwards',
    configuration: '2, 3 BHK',
    builtupArea: '716 - 1060 sq ft',
    images: [
      '/images/Purva-Panorama.jpeg',
    ],
  },
  {
    id: 3,
    name: 'West County Phase 6 Dosti Maple',
    location: 'Thane West',
    price: '1.15 Cr Onwards',
    configuration: '2 BHK',
    builtupArea: '662 sq ft',
    images: [
      '/images/West-county.jpg',
    ],
  },
];

// ─── Single Project Card ──────────────────────────────────────────────────────
function ProjectCard({ project }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row">

      {/* ── Left: Info Panel ── */}
      <div className="flex flex-col justify-between p-6 md:p-8 md:w-[42%] flex-shrink-0">

        {/* Top: name + actions */}
        <div>
          <div className="flex items-start justify-between gap-4 mb-1">
            <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 leading-snug">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
              <button
                onClick={() => setLiked(!liked)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Heart
                  size={20}
                  fill={liked ? '#ef4444' : 'none'}
                  stroke={liked ? '#ef4444' : 'currentColor'}
                  strokeWidth={1.8}
                />
              </button>
              <button className="text-gray-400 hover:text-gray-700 transition-colors">
                <Share2 size={19} strokeWidth={1.8} />
              </button>
            </div>
          </div>
          <p className="text-gray-500 text-[14px] mb-6">{project.location}</p>

          {/* Price */}
          <p className="text-orange-500 font-bold text-[20px] md:text-[22px] mb-6">
            {project.price}
          </p>

          {/* Config + Area */}
          <div className="flex items-stretch gap-0 mb-8">
            <div className="pr-5">
              <p className="text-gray-400 text-[12px] mb-1">Configuration</p>
              <p className="text-gray-900 font-semibold text-[15px]">{project.configuration}</p>
            </div>
            <div className="w-px bg-gray-200 mx-1" />
            <div className="pl-5">
              <p className="text-gray-400 text-[12px] mb-1">Builtup area</p>
              <p className="text-gray-900 font-semibold text-[15px]">{project.builtupArea}</p>
            </div>
          </div>
        </div>

        {/* Bottom: CTA Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 font-semibold text-[14px] hover:text-blue-600 transition-colors">
            Contact Us
          </button>
          <button className="bg-[#1a2c5b] hover:bg-[#162348] text-white font-semibold text-[14px] px-6 py-3 rounded-full transition-colors duration-200">
            Explore now
          </button>
        </div>
      </div>

      {/* ── Right: Image Panel ── */}
      <div className="relative flex-1 min-h-[220px] md:min-h-0">
        {/* Main image */}
        <img
          src={project.images[0]}
          alt={`${project.name} view`}
          className="w-full h-full object-cover"
          style={{ minHeight: '220px' }}
          onError={(e) => {
            e.target.src = `https://placehold.co/800x480/cbd5e1/64748b?text=${encodeURIComponent(project.name)}`;
          }}
        />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ExclusiveProjects() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p - 1 + projects.length) % projects.length);
  const next = () => setCurrent((p) => (p + 1) % projects.length);

  return (
    <section className="w-full bg-gray-50 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-gray-900 leading-tight">
            Exclusive Projects
          </h2>
          <a
            href="#"
            className="flex items-center gap-1 text-blue-600 text-[14px] font-medium hover:underline"
          >
            View all
            <ChevronRight size={16} strokeWidth={2.5} />
          </a>
        </div>

        {/* Card */}
        <ProjectCard key={projects[current].id} project={projects[current]} />

        {/* Project navigation dots + arrows */}
        {projects.length > 1 && (
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors bg-white shadow-sm"
            >
              <ChevronLeft size={16} strokeWidth={2.5} />
            </button>

            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === i ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors bg-white shadow-sm"
            >
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}