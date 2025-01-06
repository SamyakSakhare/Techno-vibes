import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";

import sliderImage1 from "../assets/sliderImage1.jpg";
import sliderImage2 from "../assets/sliderImage2.jpg";
import sliderImage3 from "../assets/sliderImage3.jpg";
import sliderImage4 from "../assets/sliderImage4.jpg";
import sliderImage5 from "../assets/sliderImage5.jpg";
import sliderImage6 from "../assets/sliderImage6.jpg";
import sliderImage7 from "../assets/sliderImage7.jpg";
import sliderImage8 from "../assets/sliderImage8.jpg";
import sliderImage9 from "../assets/sliderImage9.jpg";
import sliderImage10 from "../assets/sliderImage10.jpg";
import sliderImage11 from "../assets/sliderImage11.jpg";
import sliderImage12 from "../assets/sliderImage12.jpg";
import sliderImage13 from "../assets/sliderImage13.jpg";
import sliderImage14 from "../assets/sliderImage14.jpg";
import sliderImage15 from "../assets/sliderImage15.jpg";
import sliderImage16 from "../assets/sliderImage16.jpg";

import third1 from "../assets/third1.jpg";
import third2 from "../assets/third2.jpg";
import third3 from "../assets/third3.jpg";
import third4 from "../assets/third4.jpg";
import third5 from "../assets/third5.jpg";
import third6 from "../assets/third6.jpg";
import third7 from "../assets/third7.jpg";
import third8 from "../assets/third8.jpg";
import third9 from "../assets/third9.jpg";
import third10 from "../assets/third10.jpg";
import third11 from "../assets/third11.jpg";
import third12 from "../assets/third12.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
];

const sliderImages = [
  sliderImage1,
  sliderImage2,
  sliderImage3,
  sliderImage4,
  sliderImage5,
  sliderImage6,
  sliderImage7,
  sliderImage8,
  sliderImage9,
  sliderImage10,
  sliderImage11,
  sliderImage12,
  sliderImage13,
  sliderImage14,
  sliderImage15,
  sliderImage16,
];

const thirdSectionImages = [
  third1,
  third2,
  third3,
  third4,
  third5,
  third6,
  third7,
  third8,
  third9,
  third10,
  third11,
  third12,
];

const EventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayDelay, setAutoplayDelay] = useState(3000);
  const [visibleImages, setVisibleImages] = useState(6);

  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
      swiperRef.current.swiper.params.autoplay.delay = autoplayDelay;
      swiperRef.current.swiper.autoplay.start();
    }
  }, [autoplayDelay]);

  const handleNextHover = () => {
    setAutoplayDelay(300);
    swiperRef.current.swiper.slideNext();
  };

  const handlePrevHover = () => {
    setAutoplayDelay(300);
    swiperRef.current.swiper.slidePrev();
  };

  const handleMouseLeave = () => {
    setAutoplayDelay(3000);
  };

  const handleShowMore = () => {
    setVisibleImages((prevVisible) => prevVisible + 6);
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-r  from-[#F2F2F2] to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-Tan-Nimbus tracking-wide font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Upcoming Events
        </motion.h2>

        {/* First Section - Slideshow */}
        <motion.div
          className="relative mx-auto w-3/4 h-96 overflow-hidden mb-5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slideshow ${index + 1}`}
              className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ transition: 'opacity 5s' }}
            />
          ))}
        </motion.div>

        {/* Second Section - Image Slider */}
        <motion.div
          className="relative mx-auto w-3/4 h-60 mb-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={4}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            autoplay={{ delay: autoplayDelay }}
            className="h-full"
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slider ${index + 1}`} className="w-full h-full object-cover transition-transform transform hover:scale-105" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 -left-10 text-white z-10"
            onMouseEnter={handlePrevHover}
            onMouseLeave={handleMouseLeave}
            style={{ fontSize: '16px' }}
          ></div>
          <div
            className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 -right-10 text-white z-10"
            onMouseEnter={handleNextHover}
            onMouseLeave={handleMouseLeave}
            style={{ fontSize: '16px' }}
          ></div>
        </motion.div>

        {/* Third Section - Show More Images */}
        <motion.div
          className="grid sm:grid-cols-3 gap-2 mt-10 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {thirdSectionImages.slice(0, visibleImages).map((image, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="sm:w-full sm:h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
        {visibleImages < thirdSectionImages.length && (
          <motion.button
            onClick={handleShowMore}
            className="mt-8 px-10 py-2 bg-black text-white border-2 hover:opacity-70 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            More
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
