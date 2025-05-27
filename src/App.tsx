import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Industries from './components/Industries';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import Companies from './components/Companies';
import About from './components/About';

import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import './App.css';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // delay to ensure component renders
      }
    }
  }, [location]);

  return null;
};

const HomePage = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <HeroSection />
    <Industries />
    <Services />
    <Projects />
    <Companies />
    <About />
    <Testimonials />
    {/* <Contact /> */}
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
