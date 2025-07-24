import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const certificates = [
  {
    title: "Full Stack Web Development",
    org: "Udemy",
    date: "June 2024",
    pdf : "/certificates/internship.pdf"
  },
  {
    title: "React JS Certification",
    org: "Coursera",
    date: "April 2024",
    link: "/certificates/cc.pdf",
  },
  {
    title: "Problem Solving (Basic)",
    org: "HackerRank",
    date: "March 2024",
    link: "/certificates/email.pdf",
  },
  {
    title: "AI for Everyone",
    org: "DeepLearning.ai",
    date: "January 2024",
    link: "https://your-certificate-link.com",
  },
];

const Certificates = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            <span className="inline-flex items-center gap-2 text-blue-600">
              <FaAward /> Certificates
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            A curated list of my achievements & certifications.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="block bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-600">{cert.org}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
