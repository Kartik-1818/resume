import React from "react";
import profileImg from "../assets/image.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f5f7fa] via-[#e3e8ee] to-[#d5dbe4] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profileImg}
            alt="Kartik Jhamb"
            className="rounded-3xl w-72 h-72 sm:w-80 sm:h-80 object-cover shadow-xl border-4 border-white hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-5">
            Hi , I'm <span className="font-semibold text-yellow-600">Kartik Jhamb</span> — an engineering student at <strong>NIT Delhi</strong> and a passionate full-stack developer who bridges clean code with creativity.
          </p>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-5">
            I specialize in the <strong>MERN stack</strong> and enjoy turning concepts into scalable, intuitive applications. I'm also a hardware hobbyist who loves integrating <strong>Arduino</strong> with real-time dashboards.
          </p>

          <ul className="list-disc pl-6 text-gray-700 text-base sm:text-lg space-y-2">
            <li>MERN Stack Dev (MongoDB, Express, React, Node.js)</li>
            <li>Built IoT dashboards for real-time sensor data</li>
            <li>Constant learner & tech explorer</li>
            <li>Open to collaborations & cool projects</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
