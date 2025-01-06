import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import SearchPage from './components/SearchPage';
import FamousArtistsSection from './components/FamousArtistsSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import CardsSection from './components/CardsSection';
import EventsSection from './components/EventsSection';
import TechnoVibes from './components/TechnoVibes';
import useLazyLoad from './hooks/useLazyLoad';
import 'swiper/swiper-bundle.min.css'; 
import RelatedArtists from './components/RelatedArtists';
import StatsSection from './components/StatsSection';
import ArgyImageSection from './components/ArgyImageSection';
import Footer from './components/Footer';
import Test from './components/Test';

const App = () => {
  useLazyLoad();
  
  const [key, setKey] = useState(0);

  useEffect(() => {
    const updateKey = () => setKey(prevKey => prevKey + 1);
    return () => updateKey();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <HeroSection key={key} /> 
            <CardsSection />
            <EventsSection />
            <TechnoVibes />
            <Test />
            <SearchPage />
            <FamousArtistsSection />
            <ArgyImageSection />
            <StatsSection />
            <RelatedArtists />
            <Footer />
          </div>
        } />
        <Route path="/about" element={<AboutSection />}  />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/famous-artists" element={<FamousArtistsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
};

export default App;
