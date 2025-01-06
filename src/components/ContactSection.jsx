import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function ContactSection() {
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

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariant}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariant}
          className="mt-4 text-gray-300 max-w-2xl mx-auto"
        >
          For inquiries, booking information, or just to say hi, contact us at{" "}
          <a
            href="mailto:info@technovibes.com"
            className="text-blue-400 hover:text-blue-500 transition duration-300"
          >
            info@technovibes.com
          </a>
          . We look forward to connecting with you!
        </motion.p>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={buttonVariant}
          className="mt-8 flex justify-center"
        >
          <a
            href="mailto:info@technovibes.com"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariant}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          <div>
            <h3 className="text-xl font-semibold mb-4">Office Location</h3>
            <p className="text-gray-400">
              123 Techno Street,<br />
              Music City, 56789<br />
              Country
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 mb-4 text-gray-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 mb-4 text-gray-300"
              />
              <textarea
                placeholder="Your Message"
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 mb-4 text-gray-300"
                rows="4"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
