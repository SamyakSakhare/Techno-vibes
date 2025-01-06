import React from "react";
import backgroundImage from "../assets/img2-min.jpg"; 
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function CardsSection() {
  return (
    <>
      <section
        id="cards"
        className="py-20 bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="sm:text-4xl text-2xl  font-bold text-white">Inspiration &amp; Quotes</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="p-6 rounded-lg card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white">Inspiration One</h3>
              <p className="mt-5 font-semibold sm:text-lg text-white">
                "Music gives a soul to the universe, wings to the mind, flight
                to the imagination and life to everything." - Plato
              </p>
              <p className="card-hover-quote mt-10 font-semibold sm:text-lg text-gray-200">
                "Techno is the sound of the future."
              </p>
            </motion.div>
            <motion.div
              className="p-6 rounded-lg card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white">Inspiration Two</h3>
              <p className="mt-5 font-semibold sm:text-lg text-white">
                "Music is the divine way to tell beautiful, poetic things to the
                heart." - Pablo Casals
              </p>
              <p className="card-hover-quote mt-12 font-semibold sm:text-lg text-gray-200">
                "Techno is a feeling, a heartbeat that never stops."
              </p>
            </motion.div>
            <motion.div
              className="p-6 rounded-lg card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white">Inspiration Three</h3>
              <p className="mt-5 font-semibold sm:text-lg text-white">
                "Without music, life would be a mistake." - Friedrich Nietzsche
              </p>
              <p className="card-hover-quote mt-12 sm:text-lg font-semibold text-gray-200">
                "Techno music connects people across the world."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardsSection;
