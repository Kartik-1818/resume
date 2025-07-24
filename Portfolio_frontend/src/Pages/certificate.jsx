import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const certificates = [
  {
    title: "Full Stack Web Development",
    org: "Udemy",
    date: "June 2024",
    link: "/certificates/internship.pdf"
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
      <div className="max-w-6xl mx-auto">
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
              whileHover={{ scale: 1.02 }}
              className="flex items-center bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              {/* Certificate Preview Frame */}
              <div className="w-24 h-32 flex-shrink-0 mr-4 border">
                {cert.link.endsWith(".pdf") ? (
                  <iframe
                    src={cert.link}
                    title={cert.title}
                    className="w-full h-full rounded"
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                    External Link
                  </div>
                )}
              </div>

              {/* Certificate Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-600">{cert.org}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
