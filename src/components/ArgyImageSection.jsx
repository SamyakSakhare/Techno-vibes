import React, { useEffect, useRef, useState } from 'react';
import Argy from "../assets/argy.jpg";

function ArgyImageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <img
        src={Argy}
        alt="Argy"
        ref={imageRef}
        className={`object-cover transition-transform transition-opacity duration-1000 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
      />
    </div>
  );
}

export default ArgyImageSection;
