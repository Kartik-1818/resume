import React from "react";
import { FaLaptopCode, FaGraduationCap, FaWrench, FaUserGraduate } from "react-icons/fa";

const SkillsEducation = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-10">
          Skills & Education
        </h1>

        {/* Skills Section */}
        <section className="mb-12 bg-white shadow-lg rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4 text-blue-600">
            <FaWrench className="text-xl sm:text-2xl" />
            <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700 text-lg list-inside list-disc">
            <li>Tech Enthusiast</li>
            <li>Coder</li>
            <li>Love Building Projects</li>
            <li>Editor</li>
            <li>Problem Solver</li>
            <li>Fast Learner</li>
          </ul>
        </section>

        {/* Education Section */}
        <section className="bg-white shadow-lg rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4 text-green-600">
            <FaGraduationCap className="text-xl sm:text-2xl" />
            <h2 className="text-2xl sm:text-3xl font-semibold">Education</h2>
          </div>

          <div className="space-y-6 text-gray-700 text-lg">
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold">Class 10<sup>th</sup> – 99%</p>
              <p>RBSE, Bal Bharti Senior Secondary School</p>
            </div>

            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold">Class 12<sup>th</sup> – 92.8%</p>
              <p>RBSE, Bal Bharti Senior Secondary School</p>
            </div>

            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold">B.Tech - NIT Delhi</p>
              <p>Current CGPA: 9.15</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsEducation;
