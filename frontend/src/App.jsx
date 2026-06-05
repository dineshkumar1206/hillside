import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './home/Home';
import About from './pages/About';
import Contact from './pages/ContactUS';
import CentrePark from './exclusiveProjects/CentrePark';
import PurvaPanorama from './exclusiveProjects/PurvaPanorama';
import HubtownSeasonsEcuador from './fastMovingProjects/HubtownSeasonsEcuador';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <div className="min-h-screen">
        <Preloader />

        <Navbar />

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />

          {/* Project Pages */}
          <Route path="/centre-park" element={<CentrePark />} />
          <Route path="/purva-panorama" element={<PurvaPanorama />} />
          <Route path="/hubtown-seasons-ecuador" element={<HubtownSeasonsEcuador />} />
        </Routes>

        {/* Global Components */}
        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;