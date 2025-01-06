import React from "react";
import { motion } from "framer-motion";
import fisherImage from "../assets/fisher.jpg";
import rachie from "../assets/rachie.jpg";
import charo from "../assets/charo.jpeg";

function TechnoVibes() {
  return (
    <section id="showcase" className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <div className="relative container mx-auto px-6 text-center z-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold font-EFCO mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          Why Techno Music is Amazing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl font-EFCO text-gray-300 mb-12"
        >
          Discover the captivating essence of techno music and how it brings
          energy, innovation, and unity to the world.
        </motion.p>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg overflow-hidden relative shadow-lg"
          >
            <motion.img
              src={fisherImage}
              alt="Techno Vibes"
              className="w-full h-60 object-cover transition-opacity duration-500 ease-in-out"
              whileHover={{ opacity: 0 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <motion.div
                className="text-center opacity-0 transition-opacity duration-500 ease-in-out"
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-2xl font-bold mb-4">Innovative Beats</h3>
                <p>
                  Techno music pushes the boundaries of sound with
                  experimental beats and synthesizers.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg overflow-hidden relative shadow-lg"
          >
            <motion.img
              src={rachie}
              alt="Techno Vibes"
              className="w-full h-60 object-cover transition-opacity duration-500 ease-in-out"
              whileHover={{ opacity: 0 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <motion.div
                className="text-center opacity-0 transition-opacity duration-500 ease-in-out"
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-2xl font-bold mb-4">Energetic Vibes</h3>
                <p>
                  Feel the pulsating energy that keeps you moving and grooving
                  all night long.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg overflow-hidden relative shadow-lg"
          >
            <motion.img
              src={charo}
              alt="Techno Vibes"
              className="w-full h-60 object-cover transition-opacity duration-500 ease-in-out"
              whileHover={{ opacity: 0 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <motion.div
                className="text-center opacity-0 transition-opacity duration-500 ease-in-out"
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-2xl font-bold mb-4">Unity & Connection</h3>
                <p>
                  Experience the sense of belonging and connection that techno
                  music fosters among fans.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TechnoVibes;
