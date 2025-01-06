import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { motion } from "framer-motion";
import taleofusImage from "../assets/taleofus.jpg";
import lucianoImage from "../assets/luciano.jpg";
import martinLandskyImage from "../assets/martinlandsky.jpg";
import cesarMerveilleImage from "../assets/cesarmerveille.jpg";
import artbatImage from "../assets/Artbat.jpg";
import chrisAvantgardeImage from "../assets/chrisavantgarde.jpg";

const RelatedArtists = () => {
  const artists = [
    { name: "Tale Of Us", image: taleofusImage, follow: true },
    { name: "Luciano", image: lucianoImage, follow: true },
    { name: "Martin Landsky", image: martinLandskyImage, follow: true },
    { name: "Cesar Merveille", image: cesarMerveilleImage, follow: true },
    { name: "Artbat", image: artbatImage, follow: true },
    { name: "Chris Avantgarde", image: chrisAvantgardeImage, follow: true },
  ];

  
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 text-center">
      <motion.h2
        className="text-[#FF4848] sm:text-4xl text-2xl font-bold mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <span className="pl-4 tracking-wide font-Tan-Nimbus"> / RELATED ARTISTS</span>
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {artists.map((artist, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: index * 0.2 }} // Staggered delay for each item
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
            />
            <div className="text-left overflow-hidden">
              <h3 className="sm:text-2xl text-lg font-bold hover:text-[#FF4848]">{artist.name}</h3>
              <button className="flex items-center text-lg text-gray-600 mt-2 hover:text-[#FF4848]">
                <AiOutlineUserAdd className="w-5 h-5 mr-2" />
                Follow
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArtists;
