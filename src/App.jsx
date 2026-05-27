import chatapp from "./assets/chatapp.png";

export default function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "Secure Chat Application",
      desc: "A responsive real-time messaging application built using Node.js, Express, MongoDB, and Socket.io.",
      live: "https://secure-chat-app-1oe9.onrender.com",
      github: "https://github.com/umarrrashid",
      image: chatapp,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-5 border-b border-gray-800 gap-4 sticky top-0 bg-black/90 backdrop-blur z-50">
        <h1 className="text-3xl font-bold">Umar Rashid</h1>

        <div className="flex flex-wrap justify-center gap-5 text-gray-300 text-sm md:text-base">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 md:py-40">
        <p className="text-gray-400 mb-4 text-sm md:text-base">
          B.Tech CSE Student
        </p>

        <h2 className="text-4xl md:text-7xl font-bold leading-tight max-w-5xl">
          MERN Stack Developer
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl text-base md:text-lg leading-8">
          Passionate about building responsive web applications using React,
          Node.js, Express, and MongoDB.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
          <a href="#projects" className="w-full sm:w-auto">
            <button className="bg-white text-black px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition w-full">
              View Projects
            </button>
          </a>

          <a
            href="https://github.com/umarrrashid"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="border border-gray-700 px-8 py-3 rounded-2xl hover:bg-gray-900 transition w-full">
              GitHub Profile
            </button>
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 md:px-24 py-20 border-t border-gray-900"
      >
        <h3 className="text-3xl md:text-5xl font-bold mb-8">
          About Me
        </h3>

        <p className="text-gray-400 text-base md:text-lg leading-8 max-w-4xl">
          I am a Computer Science student from India focused on full stack web
          development. I enjoy building practical web applications using modern
          technologies like React, Node.js, Express, and MongoDB. Currently
          improving my backend development, UI design, and real-world project
          building skills.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-6 md:px-24 py-20 border-t border-gray-900"
      >
        <h3 className="text-3xl md:text-5xl font-bold mb-12">
          Skills
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl p-5 text-center hover:bg-gray-900 hover:scale-105 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 md:px-24 py-20 border-t border-gray-900"
      >
        <h3 className="text-3xl md:text-5xl font-bold mb-12">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-3xl p-8 hover:bg-gray-900 hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt="Secure Chat App"
                className="h-56 w-full object-cover rounded-2xl mb-6 border border-gray-700"
              />

              <h4 className="text-2xl font-semibold mb-4">
                {project.title}
              </h4>

              <p className="text-gray-400 leading-7 text-base">
                {project.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="bg-white text-black px-5 py-3 rounded-xl text-sm font-medium w-full hover:scale-105 transition">
                    Live Demo
                  </button>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="border border-gray-700 px-5 py-3 rounded-xl text-sm w-full hover:bg-gray-800 transition">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 md:px-24 py-20 border-t border-gray-900"
      >
        <h3 className="text-3xl md:text-5xl font-bold mb-8">
          Contact
        </h3>

        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl">
          Interested in collaborating or discussing projects? Feel free to
          connect with me.
        </p>

        <div className="flex flex-col gap-5 text-lg">
          <a
            href="mailto:meumarrashid@gmail.com"
            className="hover:text-gray-300 transition"
          >
            meumarrashid@gmail.com
          </a>

          <a
            href="https://github.com/umarrrashid"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/me-umar-rashid"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-8 text-center text-gray-500 text-sm px-4">
        © 2026 Umar Rashid. All rights reserved.
      </footer>
    </div>
  );
}