import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

import Home from './home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CentrePark from './exclusiveProjects/CentrePark';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Preloader />

        <Navbar />

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Project Pages */}
          <Route path="/centre-park" element={<CentrePark />} />
        </Routes>

        {/* Global Components */}
        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;