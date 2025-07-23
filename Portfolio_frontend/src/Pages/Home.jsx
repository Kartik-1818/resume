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
