import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const certificates = [
  {
    title: "Full Stack Web Development",
    org: "Tech-Kriti IIT-Kanpur",
    date: "June - July 2024",
    link: "/certificates/internship.pdf",
  },
  {
    title: "Course Completion Certificate - MERN Stack Developer",
    org: "Tech-Kriti IIT Kanpur",
    date: "June-July 2024",
    link: "/certificates/cc.pdf",
  },
  {
    title: "E-mail Formatting",
    org: "Tech-Kriti IIT Kanpur",
    date: "July-August 2024",
    link: "/certificates/email.pdf",
  },
  {
    title: "Excel Foramtting",
    org: "Tech-kriti IIT-Kanpur",
    date: "July-August 2024",
    link: "",
  },
];

const Certificates = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
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

        {/* Certificate Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="relative flex bg-white rounded-xl shadow-lg p-4 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              {/* Certificate Text Info */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-600">{cert.org}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>

              {/* Bottom-right Tooltip */}
              {cert.link && (
                <div className="absolute bottom-2 right-3 text-[11px] text-blue-600 bg-blue-100 px-2 py-1 rounded-md shadow-sm">
                  📄 Click to view certificate
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
