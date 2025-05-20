import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Industries from './components/Industries';
import Projects from './components/Projects';
import Companies from './components/Companies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <Industries />
      <Services />
      <Projects />
      <Companies />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
