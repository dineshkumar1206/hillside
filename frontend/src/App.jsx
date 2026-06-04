import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './home/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen ">
      <Preloader /> {/* Preloader component for initial loading animation */}
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Hero Showcase */}
      <main>
        <Home/>
      </main>

      <WhatsAppButton/>
      <Footer/>
    </div>
  );
}

export default App;