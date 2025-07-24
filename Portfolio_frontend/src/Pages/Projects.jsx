import React from "react";
import video from "../assets/video.mp4";

const Projects = () => {
  const projects = [
    {
      title: "PassVault",
      description:
        "A secure and modern password manager web application built using React and Node.js. PassVault allows users to register, log in, store passwords securely, and manage credentials with ease. Features include encryption, copy-to-clipboard, and intuitive category-wise vault UI – all deployed with seamless frontend-backend integration.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      liveLink: "https://passvault-pi.vercel.app/",
      repoLink: "https://github.com/Kartik-1818/passvault.git",
    },
    {
      title: "JagdambaStore",
      description:
        "A full-featured stationery eCommerce platform developed for Jagdamba Store. It includes a user-facing shopping experience with categories, product pages, and a cart, along with an admin dashboard to manage products, users, and newsletter subscribers. Built with the MERN stack and responsive for all devices.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      liveLink: "https://jagdamba-store.vercel.app/",
      repoLink: "https://github.com/Kartik-1818/Jagdamba_Store.git",
    },
    {
      title: "PasteApp",
      description:
        "Paste App is a lightweight, modern web application that allows users to create, update, manage, and share text snippets (pastes) in real-time. Designed with React, Redux Toolkit, and Tailwind CSS, it offers a clean interface with features similar to Pastebin – but entirely offline/local-storage based.",
      tech: ["React", "Redux Toolkit", "TailwindCSS"],
      liveLink: "https://paste-pad.vercel.app",
      repoLink: "https://github.com/Kartik-1818/Paste_App.git",
    },
    {
      title: "Ultrasonic Rover",
      description:
        "An Arduino-based smart car that combines manual Bluetooth control with autonomous obstacle avoidance. Controlled via an Android app (using HC-05 module), it uses an ultrasonic sensor mounted on a servo to detect and reroute around obstacles in real time. Built with an L293D motor driver, it seamlessly switches between user commands and autonomous navigation.",
      tech: ["Arduino", "HC-05", "UNO", "Sensors"],
      liveLink: { video },
      videoPreview: video,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-yellow-800 mb-12">
          My Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-2">
                {project.title || "Untitled Project"}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm sm:text-base mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-green-100 text-green-700 rounded-full hover:bg-pink-200 hover:shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* [Optional links] */}
              <div className="flex gap-4 mt-4">
                {project.videoPreview ? (
                  <a
                    href={project.videoPreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 shadow-sm"
                  >
                    🎥 Watch Demo
                  </a>
                ) : (
                  <>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-sm"
                      >
                        🔗 Live Demo
                      </a>
                    )}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-sm"
                      >
                        📁 GitHub Repo
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
