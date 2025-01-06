import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaInstagram, FaYoutube, FaSpotify, FaSoundcloud, FaApple } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";

function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <footer ref={ref} className="bg-black text-gray-400 py-6">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={revealVariant}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* First Line: Location, Language, Links */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 text-sm mb-2">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-1">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png" alt="India Flag" className="w-5 h-5" />
              <span>Hyderabad</span>
            </div>
            <div className="flex items-center space-x-1">
              <AiOutlineGlobal className="w-5 h-5" />
              <span>Language</span>
            </div>
            <span>English</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="#privacy" className="hover:text-white transition duration-300">Privacy</a>
            <span>·</span>
            <a href="#terms" className="hover:text-white transition duration-300">Terms</a>
            <span>·</span>
            <a href="#cookies" className="hover:text-white transition duration-300">Cookies</a>
            <span>·</span>
            <a href="#sitemap" className="hover:text-white transition duration-300">Sitemap</a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-600 my-2"></div>

        {/* Second Line: Copyright and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full text-center sm:text-left space-y-4 sm:space-y-0">
          <p className="text-xs">&copy; 2024 Resident Advisor Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="w-6 h-6 hover:text-red-600 transition duration-300" />
            </a>
            <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
              <FaSoundcloud className="w-6 h-6 hover:text-orange-500 transition duration-300" />
            </a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
              <FaSpotify className="w-6 h-6 hover:text-green-500 transition duration-300" />
            </a>
            <a href="https://apple.com/music" target="_blank" rel="noopener noreferrer">
              <FaApple className="w-6 h-6 hover:text-white transition duration-300" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FiX className="w-6 h-6 hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-6 h-6 hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition duration-300" />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
