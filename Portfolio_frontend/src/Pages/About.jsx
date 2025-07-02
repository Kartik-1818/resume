import React from "react";
import profileImg from "../assets/image.jpeg"; // your image path

const About = () => {
  return (
    <section className="min-h-screen bg-[#f0f4f8] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Kartik Jhamb"
            className="rounded-3xl w-72 h-72 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            👋 Hi, I'm <span className="font-semibold text-indigo-600">Kartik Jhamb</span> — an engineering student at <span className="font-medium">NIT Delhi</span> and a passionate <span className="font-medium">full-stack web developer</span>.
            I turn ideas into digital experiences using modern web technologies.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            With expertise in <span className="font-medium">React, Tailwind, Node.js, Express, and MongoDB</span>, I enjoy building both functional backends and beautiful UIs. I also love hardware — especially Arduino + sensor projects that blend code and circuits.
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>🚀 MERN Stack Developer</li>
            <li>🔧 Built real-time IoT apps using Arduino + React Dashboards</li>
            <li>🧠 Always learning & building something cool</li>
            <li>📬 Love to connect with fellow tech enthusiasts</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
