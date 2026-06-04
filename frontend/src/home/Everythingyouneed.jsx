import { useState } from 'react';
import {
  Landmark, Sofa, BarChart2, Compass, Building2, Home,
  UserCheck, FileText, Key, ScrollText, Wrench, ShieldCheck,
  Briefcase, TrendingUp, HandshakeIcon, PiggyBank,
  Building, ClipboardList, Award, BookOpen,
} from 'lucide-react';

// ─── Tab Data ─────────────────────────────────────────────────────────────────
const tabs = [
  {
    label: 'For Buyers / Owners',
    services: [
      { icon: Landmark,   name: 'Home Loan' },
      { icon: Sofa,       name: 'Home Interior Design' },
      { icon: BarChart2,  name: 'Valuation' },
      { icon: Compass,    name: 'Vastu Calculator' },
      { icon: Building2,  name: 'Property Management' },
      { icon: Home,       name: 'Sell or Rent Property' },
    ],
  },
  {
    label: 'For Tenants',
    services: [
      { icon: Key,          name: 'Find Rental Home' },
      { icon: FileText,     name: 'Rental Agreement' },
      { icon: ShieldCheck,  name: 'Tenant Verification' },
      { icon: Wrench,       name: 'Home Services' },
      { icon: ScrollText,   name: 'Legal Assistance' },
      { icon: UserCheck,    name: 'Background Check' },
    ],
  },
  {
    label: 'For Agents',
    services: [
      { icon: Briefcase,    name: 'Agent Dashboard' },
      { icon: TrendingUp,   name: 'Lead Management' },
      { icon: HandshakeIcon,name: 'Deal Closure Tools' },
      { icon: PiggyBank,    name: 'Commission Tracker' },
      { icon: Award,        name: 'Certifications' },
      { icon: BookOpen,     name: 'Training Resources' },
    ],
  },
  {
    label: 'For Builders & Banks',
    services: [
      { icon: Building,       name: 'Project Listings' },
      { icon: ClipboardList,  name: 'Project Reports' },
      { icon: TrendingUp,     name: 'Market Analytics' },
      { icon: Landmark,       name: 'Bank Partnerships' },
      { icon: ShieldCheck,    name: 'RERA Compliance' },
      { icon: FileText,       name: 'Documentation' },
    ],
  },
];

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ icon: Icon, name }) {
  return (
    <div className="flex flex-col items-center gap-3 px-4 py-5 cursor-pointer group">
      {/* Icon bubble */}
      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gray-50 group-hover:bg-blue-50 border border-gray-100 group-hover:border-blue-200 flex items-center justify-center transition-all duration-200 shadow-sm group-hover:shadow-md">
        <Icon
          size={28}
          className="text-gray-500 group-hover:text-blue-600 transition-colors duration-200"
          strokeWidth={1.6}
        />
      </div>
      <span className="text-[13px] text-gray-600 group-hover:text-gray-900 text-center leading-snug font-medium transition-colors duration-200 max-w-[100px]">
        {name}
      </span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function EverythingYouNeed() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-gray-900 mb-5 md:mb-6 leading-tight">
          Everything you Need at One Place
        </h2>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-0 border border-gray-200 rounded-xl w-fit max-w-full mb-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`
                whitespace-nowrap px-4 sm:px-6 py-3 text-[13px] sm:text-[14px] font-semibold
                transition-all duration-200 cursor-pointer outline-none flex-shrink-0
                ${i === 0 ? 'rounded-l-xl' : ''}
                ${i === tabs.length - 1 ? 'rounded-r-xl' : ''}
                ${activeTab === i
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-r border-gray-200 last:border-r-0'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Panel */}
        <div className="border border-gray-200 rounded-xl rounded-tl-none mt-0 p-2 sm:p-4">
          {/* Scrollable row on mobile, wrap on larger */}
          <div className="flex overflow-x-auto sm:flex-wrap sm:overflow-visible gap-0 divide-x divide-gray-100"
            style={{ scrollbarWidth: 'none' }}
          >
            {tabs[activeTab].services.map((service) => (
              <div key={service.name} className="flex-shrink-0 sm:flex-shrink">
                <ServiceCard icon={service.icon} name={service.name} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}