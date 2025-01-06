import React from "react";
import { motion } from "framer-motion";

import Richie from "../assets/Richie.jpg";
import CarlCox from "../assets/CarlCox.jpeg";
import JeffMills from "../assets/Jeff Mills.jpg";
import NinaKraviz from "../assets/Nina Kraviz.jpg";
import Charlotte from "../assets/Charlotte.jpg";

function FamousArtistsSection() {
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="famous-artists" className="py-20">
      <div className="container mx-auto px-6">
       
        <motion.h2
          className="sm:text-3xl text-xl font-Tan-Nimbus tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          The Most Famous Techno Artists, Ranked in the World
        </motion.h2>

        <div id="artist-list" className="space-y-12">
          {/* Artist 1 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg flex flex-col lg:flex-row items-center lg:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex-shrink-0 lg:mr-8 sm:mt-20 lg:mb-0">
              <img
                src={Richie}
                alt="Richie Hawtin"
                className="sm:w-60 sm:h-60 w-52 h-52 object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-blue-400  font-EFCO tracking-wider text-xl sm:px-48 sm:mb-10 font-bold mb-4 sm:mb-4">
                1. Richie Hawtin
              </h3>
              <iframe
                className="w-full lg:w-[600px] sm:ml-20 md:ml-0 xl:ml-20 lg:h-[400px]"
                src="https://www.youtube.com/embed/zOgiy-sC9FA"
                title="Richie Hawtin YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="sm:text-xl font-EFCO tracking-widest font-semibold mt-4 bg-gradient-to-r from-[#F2F2F2] via-blue-400 to-white bg-clip-text text-transparent">
                Richie Hawtin is a British-Canadian electronic musician and DJ,
                born on June 4, 1970. He is a leading exponent of minimal
                techno, a style characterized by its simplicity, repetition, and
                emphasis on rhythm. Hawtin’s career spans over three decades,
                during which he has been a driving force in shaping the techno
                scene.
              </p>

              <a
                href="https://en.wikipedia.org/wiki/Richie_Hawtin"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-[#F2F2F2] hover:text-white hover:bg-[#FF4848] rounded mt-4 inline-block"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Artist 2 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg flex flex-col lg:flex-row items-center lg:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex-shrink-0 lg:mr-8 sm:mt-20 lg:mb-0">
              <img
                src={CarlCox}
                alt="Carl Cox"
                className="sm:w-60 sm:h-60 w-52 h-52 object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-blue-400  font-EFCO tracking-wider text-xl sm:px-48 sm:mb-10  font-bold mb-4 sm:mb-4">
                2. Carl Cox
              </h3>
              <iframe
                className="w-full lg:w-[600px] sm:ml-20 md:ml-0 xl:ml-20 lg:h-[400px]"
                src="https://www.youtube.com/embed/vy-k0FopsmY"
                title="Carl Cox YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="sm:text-xl font-EFCO tracking-widest font-semibold mt-4 bg-gradient-to-r from-[#F2F2F2] via-blue-400 to-white bg-clip-text text-transparent">
                Carl Cox is a British house and techno club DJ, radio DJ, and
                record producer born on July 29, 1962, in Oldham, England. With
                a career spanning over four decades, he is widely regarded as
                one of the most dedicated and influential DJs in the world.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Carl_Cox"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F2F2F2] hover:text-white hover:bg-[#FF4848] py-2 px-4 rounded mt-4 inline-block"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Artist 3 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg flex flex-col lg:flex-row items-center lg:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex-shrink-0 lg:mr-8 sm:mt-20 lg:mb-0">
              <img
                src={JeffMills}
                alt="Jeff Mills"
                className="sm:w-60 sm:h-60 w-52 h-52 object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-blue-400  font-EFCO tracking-wider text-xl sm:px-48 sm:mb-10  font-bold mb-4 sm:mb-4">
                3. Jeff Mills
              </h3>
              <iframe
                className="w-full lg:w-[600px] sm:ml-20 md:ml-0 xl:ml-20 lg:h-[400px]"
                src="https://www.youtube.com/embed/8A82l7evtRI"
                title="Jeff Mills YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="sm:text-xl font-EFCO tracking-widest font-semibold mt-4 bg-gradient-to-r from-[#F2F2F2] via-blue-400 to-white bg-clip-text text-transparent">
                Born on June 18, 1963, in Detroit, Michigan, Jeff Mills is a
                renowned American techno DJ, record producer, and composer.
                Early Career Mills began his career as a radio DJ on WJLB, using
                the pseudonym “The Wizard.” His sets featured innovative
                techniques such as beat juggling and scratching, which were
                pre-recorded and later became a hallmark of his live
                performances.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Jeff_Mills"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F2F2F2] hover:text-white hover:bg-[#FF4848] py-2 px-4 rounded mt-4 inline-block"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Artist 4 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg flex flex-col lg:flex-row items-center lg:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex-shrink-0 lg:mr-8 sm:mt-20 lg:mb-0">
              <img
                src={NinaKraviz}
                alt="Nina Kraviz"
                className="sm:w-60 sm:h-60 w-52 h-52 object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-blue-400  font-EFCO tracking-wider text-xl sm:px-48 sm:mb-10  font-bold mb-4 sm:mb-4">
                4. Nina Kraviz
              </h3>
              <iframe
                className="w-full lg:w-[600px] sm:ml-20 md:ml-0 xl:ml-20 lg:h-[400px]"
                src="https://www.youtube.com/embed/61vCNSn4pgg"
                title="Nina Kraviz YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="sm:text-xl font-EFCO tracking-widest font-semibold mt-4 bg-gradient-to-r from-[#F2F2F2] via-blue-400 to-white bg-clip-text text-transparent">
                Nina Kraviz is a Russian DJ, record producer, and singer born
                on October 15, 1981, in Irkutsk. She is known for her unique
                techno sound that blends acid, minimal, and industrial elements.
                Kraviz’s career began in the early 2010s, and she has since
                gained international acclaim for her innovative approach to techno
                music.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Nina_Kraviz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F2F2F2] hover:text-white hover:bg-[#FF4848] py-2 px-4 rounded mt-4 inline-block"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Artist 5 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg flex flex-col lg:flex-row items-center lg:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex-shrink-0 lg:mr-8 sm:mt-20 lg:mb-0">
              <img
                src={Charlotte}
                alt="Charlotte de Witte"
                className="sm:w-60 sm:h-60 w-52 h-52 object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] via-blue-400  font-EFCO tracking-wider text-xl sm:px-48 sm:mb-10  font-bold mb-4 sm:mb-4">
                5. Charlotte de Witte
              </h3>
              <iframe
                className="w-full lg:w-[600px] sm:ml-20 md:ml-0 xl:ml-20 lg:h-[400px]"
                src="https://www.youtube.com/embed/9V6ZAGvCrDc"
                title="Charlotte de Witte YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="sm:text-xl font-EFCO tracking-widest  font-semibold mt-4 bg-gradient-to-r from-[#F2F2F2] via-blue-400 to-white bg-clip-text text-transparent">
                Charlotte de Witte is a Belgian DJ and producer born on July 27,
                1992. Known for her hard-hitting techno and acid tracks, she has
                quickly risen to prominence in the electronic music scene. Her
                performances are known for their intensity and energy, making her
                a favorite among techno fans.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Charlotte_de_Witte"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F2F2F2] hover:text-white hover:bg-[#FF4848] py-2 px-4 rounded mt-4 inline-block"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FamousArtistsSection;
