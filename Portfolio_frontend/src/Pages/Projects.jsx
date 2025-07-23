export default function Projects() {
  const projects = [
    {
      title: "PasteApp",
      description:
        "Paste App is a lightweight, modern web application that allows users to create, update, manage, and share text snippets (pastes) in real-time. Designed with React, Redux Toolkit, and Tailwind CSS, it offers a clean interface with features similar to Pastebin – but entirely offline/local-storage based.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Ultrasonic Rover",
      description:
        "An Arduino-based smart car that combines manual Bluetooth control with autonomous obstacle avoidance. Controlled via an Android app (using HC-05 module), it uses an ultrasonic sensor mounted on a servo to detect and reroute around obstacles in real time. Built with an L293D motor driver, it seamlessly switches between user commands and autonomous navigation.",
      tech: ["React", "Arduino", "Express", "MongoDB"],
    },
    {
      title: "Snippet Manager",
      description:
        "A personal snippet manager where developers can save, search, and share useful code snippets with syntax highlighting.",
      tech: ["React", "Node", "MongoDB"],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-yellow-800 mb-12">
          My Projects
        </h2>

        {/* Grid Layout */}
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
              {/* Uncomment if live links are available */}
              {/* <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline"
                >
                  GitHub Repo
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
