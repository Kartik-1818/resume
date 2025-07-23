import React, { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://resume-v1hg.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server error. Please try again later.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-yellow-400">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-gray-800 p-8 rounded-lg shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Let's Connect
          </button>

          {status && (
            <p className="text-sm mt-2 text-center text-green-400">{status}</p>
          )}

          <div className="flex gap-2 justify-center text-xl mt-6">
            <a
              href="mailto:kartikjhamb29@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/kartik-jhamb-b68a96326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Kartik-1818"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/kartikj_1718?igsh=MWdycjV3dG9laWh6eQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/918209552235"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp />
            </a>
            <a
              href="tel:+918209552235"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaPhoneAlt />
            </a>
          </div>


        </form>
      </div>
    </section>
  );
};

export default Contact;
