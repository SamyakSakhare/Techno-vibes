import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';

function HeroSection() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioFile = new Audio('/assets/audio/Argy.mp3');
    audioRef.current = audioFile;

    const playAudio = () => {
      audioFile.play().catch((error) => {
        console.error('Autoplay was prevented:', error);
      });
    };

    const pauseAudio = () => {
      audioFile.pause();
    };

    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const rect = heroSection.getBoundingClientRect();

      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        pauseAudio();
      } else {
        playAudio();
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseAudio();
      } else {
        handleScroll(); 
      }
    };

    const handleWindowBlur = () => {
      pauseAudio();
    };

    const handleWindowFocus = () => {
      handleScroll(); 
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      pauseAudio();
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, []);

  const handleSectionClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error('Playback failed:', error));
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
      onClick={handleSectionClick}
    >
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
           preload="auto"
          className="absolute inset-0 w-full h-full object-cover "
        >
          <source src="/assets/videos/video8.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 px-4 py-8 text-container">
        <motion.div
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100vw', opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="animate-text"
        >
          <h1 className="text-5xl font-beachy-regular text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 md:text-6xl font-bold mb-4">
            Feel the Beat of Techno
          </h1>
          <p className="sm:text-lg text-md font-Tan-Nimbus text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white md:text-xl mb-8">
            Join us for an unforgettable experience with the best techno DJs around the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
