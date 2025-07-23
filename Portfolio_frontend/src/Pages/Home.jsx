// import React from 'react';
// import image from '../assets/image.jpeg';

// const Home = () => {
//     return (
//         <section className="min-h-screen flex flex-col justify-center items-center bg-[#c8ffaa] px-6 py-10 sm:flex-row sm:gap-10">

//             {/* Left image */}
//             <div className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300 ease-in-out mb-8 sm:mb-0">
//                 <img
//                     src={image}
//                     alt="Kartik Jhamb"
//                     className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-3xl shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
//                 />
//             </div>

//             {/* Right text box */}
//             <div className="text-white mt-8 sm:mt-0 max-w-2xl text-center sm:text-left">
//                 <h1 className="text-4xl sm:text-5xl font-cursive text-white mb-6">
//                     Kartik Jhamb
//                 </h1>

//                 <p className="text-gray-300 leading-relaxed text-lg sm:text-xl">
//                     Hey there! I'm Kartik — an engineering student and full-stack developer who turns caffeine and code into clean, powerful web apps.
//                     From crafting seamless user interfaces in React to wiring up efficient Node.js backends, I thrive on solving problems with tech.
//                     I've also built hands-on hardware projects using Arduino and sensors, making me a true all-rounder in both code and circuits.
//                     Let's connect, code, and create something awesome!
//                 </p>

//                 <h3 className="mt-4 text-lg sm:text-xl text-yellow-200 font-semibold">
//                     Engineering Student · Full Stack Web Developer · Tech Enthusiast
//                 </h3>

//                 <div className="flex gap-4 mt-6 justify-center sm:justify-start">
//                     {/* Contact Me */}
//                     <a
//                         href="/Contact" // ✅ or use scroll/section id if it's on the same page
//                         className="bg-transparent border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black font-semibold py-2 px-4 rounded-lg transition duration-300"
//                     >
//                         Contact Me
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Home;


import React from 'react';
import image from '../assets/image.jpeg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#c8ffaa] via-[#d9ffe6] to-[#f0fff9] px-6 py-20 flex flex-col sm:flex-row items-center justify-center gap-10">

      {/* Left Image */}
      <motion.div
        initial={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="flex-shrink-0"
      >
        <img
          src={image}
          alt="Kartik Jhamb"
          className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-xl border-4 border-white"
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center sm:text-left"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6 tracking-tight">
          Kartik Jhamb
        </h1>

        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
          Hey there! I'm Kartik — an engineering student & full-stack developer who turns caffeine & code into clean, powerful web apps. I design seamless UIs in React, build robust backends with Node.js, and even tinker with Arduino & sensors. I’m your go-to hybrid of code & circuits.
        </p>

        <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-yellow-600">
          Engineering Student · Full Stack Dev · Hardware Hacker
        </h3>

        <div className="flex justify-center sm:justify-start mt-8">
          <a
            href="/Contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

    </section>
  );
};

export default Home;
