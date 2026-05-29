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
<div className="min-h-screen text-white bg-gradient-to-br from-slate-950 via-blue-950 to-black overflow-x-hidden relative">

  <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full animate-pulse"></div>

  <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full animate-pulse"></div>      {/* Navbar */}
<nav className="fixed top-0 left-0 right-0 z-50
bg-slate-950/60
backdrop-blur-xl
backdrop-saturate-150
border-b border-blue-500/20
shadow-lg shadow-blue-500/10">

  <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
      Umar Rashid
    </h1>

    <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm md:text-base">

      <a
        href="#about"
        className="hover:text-blue-400 transition duration-300"
      >
        About
      </a>

      <a
        href="#skills"
        className="hover:text-blue-400 transition duration-300"
      >
        Skills
      </a>

      <a
        href="#services"
        className="hover:text-blue-400 transition duration-300"
      >
        Services
      </a>

      <a
        href="#projects"
        className="hover:text-blue-400 transition duration-300"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="hover:text-blue-400 transition duration-300"
      >
        Contact
      </a>

    </div>

  </div>
<nav className="fixed top-0 left-0 right-0 z-50
bg-slate-950/60
backdrop-blur-xl
backdrop-saturate-150
border-b border-blue-500/20
shadow-lg shadow-blue-500/10">

  <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
      Umar Rashid
    </h1>

    <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm md:text-base">

      <a
        href="#about"
        className="hover:text-blue-400 transition duration-300"
      >
        About
      </a>

      <a
        href="#skills"
        className="hover:text-blue-400 transition duration-300"
      >
        Skills
      </a>

      <a
        href="#services"
        className="hover:text-blue-400 transition duration-300"
      >
        Services
      </a>

      <a
        href="#projects"
        className="hover:text-blue-400 transition duration-300"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="hover:text-blue-400 transition duration-300"
      >
        Contact
      </a>

    </div>

  </div>
</nav>
       

        <div className="flex flex-wrap justify-center gap-5 text-gray-300 text-sm md:text-base">
          <a href="#about" className="hover:text-blue-400 transition duration-300">
            
          </a>

          <a href="#skills" className="hover:text-blue-400 transition duration-300">
            
          </a>

          <a href="#projects" className="hover:text-blue-400 transition duration-300">
            
          </a>

          <a href="#contact" className="hover:text-blue-400 transition duration-300">
            
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 md:py-40">
        <p className="text-gray-400 mb-4 text-sm md:text-base">
          B.Tech CSE Student
        </p>

       <h2 className="text-5xl md:text-8xl font-black leading-tight max-w-5xl bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent animate-pulse">
  Full Stack Developer
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
            className="w-full sm:w-auto"
          >
            <button className="border border-gray-700 px-8 py-3 rounded-2xl hover:bg-gray-900 transition w-full">
              GitHub Profile
            </button>
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
  {["React", "Node.js", "MongoDB", "Express", "Socket.io"].map((tech) => (
    <span
      key={tech}
      className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:scale-110 transition"
    >
      {tech}
    </span>
  ))}
</div>
           </section>

      {/* Stats */}
      <section className="px-6 md:px-24 pb-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
            <h3 className="text-4xl font-bold">3+</h3>
            <p className="text-gray-400">Projects</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6">
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-gray-400">Technologies</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6">
            <h3 className="text-4xl font-bold">2028</h3>
            <p className="text-gray-400">Graduation</p>
          </div>

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
className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"            >
              <img
  src={project.image}
  alt={project.title}
  className="h-64 w-full object-cover rounded-2xl mb-6 border border-blue-500/20"
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
                  className="w-full sm:w-auto"
                >
                  <button className="bg-white text-black px-5 py-3 rounded-xl text-sm font-medium w-full hover:scale-105 transition">
                    Live Demo
                  </button>
                </a>

                <a
                  href={project.github}
                  target="_blank"
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
            className="hover:text-gray-300 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/me-umar-rashid"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            LinkedIn
          </a>
          <a
  href="https://wa.me/919905826142"
  target="_blank"
  rel="noreferrer"
>
  <button className="bg-green-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
    WhatsApp Me
  </button>
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