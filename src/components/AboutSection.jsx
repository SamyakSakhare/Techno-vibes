import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHeadphones, FaMusic, FaGlobe } from "react-icons/fa";

function AboutSection() {
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

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const ctaVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariant}
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
        >
          About Techno Vibes
        </motion.h2>
        <motion.p
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariant}
          className="mt-6 text-center text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg"
        >
          Techno Vibes is the ultimate destination for techno enthusiasts. We
          host events featuring top DJs from around the world, offering an
          immersive experience into the world of electronic music. Our mission
          is to create a global community that shares a passion for techno and
          to provide unforgettable experiences through our events.
        </motion.p>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={iconVariant}
            className="flex flex-col items-center"
          >
            <FaHeadphones className="text-4xl text-green-400 mb-4" />
            <h3 className="text-xl font-semibold">Immersive Sound</h3>
            <p className="text-gray-400 text-center max-w-xs">
              Experience sound like never before with state-of-the-art audio
              systems.
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={iconVariant}
            className="flex flex-col items-center"
          >
            <FaMusic className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold">Top DJs</h3>
            <p className="text-gray-400 text-center max-w-xs">
              Dance to the beats of world-renowned DJs who set the stage on
              fire.
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={iconVariant}
            className="flex flex-col items-center"
          >
            <FaGlobe className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold">Global Community</h3>
            <p className="text-gray-400 text-center max-w-xs">
              Connect with fellow techno lovers from around the globe.
            </p>
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={ctaVariant}
          className="mt-12 flex justify-center"
        >
          <a
            href="#join"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Join the Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
