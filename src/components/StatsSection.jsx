import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faMusic } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (statRef.current) {
      observer.observe(statRef.current);
    }
  }, []);

  const countUp = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (inView && statRef.current) {
      const statElement = statRef.current.querySelector('#stat-year');
      countUp(statElement, 0, 2006, 1000);
    }
  }, [inView]);

  
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={statRef} className="container mx-auto my-12 p-6">
      <motion.h2
        className="text-[#FF4848] font-Tan-Nimbus text-4xl flex justify-center items-center font-bold mb-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        / STATS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <p className="text-lg tracking-wide flex justify-center items-center mb-4">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-[#FF4848]" />
            First event on RA
          </p>
          <div id="stat-year" className="text-8xl font-bold">0</div>
        </motion.div>
        <motion.div
          className="text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <p className="text-lg tracking-wide flex justify-center items-center mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-[#FF4848]" />
            Regions most played
          </p>
          <ul className="text-3xl tracking-tight font-semibold space-y-1">
            <li className='hover:text-[#FF4848]'>Berlin, DE</li>
            <li className='hover:text-[#FF4848]'>London, UK</li>
            <li className='hover:text-[#FF4848]'>Barcelona, ES</li>
            <li className='hover:text-[#FF4848]'>Ibiza, ES</li>
            <li className='hover:text-[#FF4848]'>Greece</li>
          </ul>
        </motion.div>
        <motion.div
          className="text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <p className="text-lg tracking-wide flex justify-center items-center mb-4">
            <FontAwesomeIcon icon={faMusic} className="mr-2 text-[#FF4848]" />
            Clubs most played
          </p>
          <ul className="text-3xl tracking-tight font-semibold space-y-1">
            <li className='hover:text-[#FF4848]'>Watergate</li>
            <li className='hover:text-[#FF4848]'>Ritter Butzke</li>
            <li className='hover:text-[#FF4848]'>Romy S.</li>
            <li className='hover:text-[#FF4848]'>Hï Ibiza</li>
            <li className='hover:text-[#FF4848]'>Renate</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
