import React from "react";
import video from "../assets/video.mp4";

const Projects = () => {
  const projects = [
    {
      title: "PassVault",
      description:
        "A secure and modern password manager web application built using React and Node.js...",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      liveLink: "https://passvault-pi.vercel.app/",
      repoLink: "https://github.com/Kartik-1818/passvault.git",
    },
    {
      title: "JagdambaStore",
      description:
        "A full-featured stationery eCommerce platform developed for Jagdamba Store...",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      liveLink: "https://jagdamba-store.vercel.app/",
      repoLink: "https://github.com/Kartik-1818/Jagdamba_Store.git",
    },
    {
      title: "PasteApp",
      description:
        "Paste App is a lightweight, modern web application for creating and sharing pastes...",
      tech: ["React", "Redux Toolkit", "TailwindCSS"],
      liveLink: "https://paste-pad.vercel.app",
      repoLink: "https://github.com/Kartik-1818/Paste_App.git",
    },
    {
      title: "Ultrasonic Rover",
      description:
        "An Arduino-based smart car combining manual Bluetooth control with autonomous obstacle avoidance...",
      tech: ["Arduino", "HC-05", "UNO", "Sensors"],
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
              className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Show preview video if exists */}
              {project.videoPreview && (
                <div className="mb-4">
                  <video
                    src={project.videoPreview}
                    controls
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              )}

              <h3 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-2">
                {project.title}
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

              <div className="flex gap-4 mt-auto">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
