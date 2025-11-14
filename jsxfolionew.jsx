
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Cpu, Database, Globe } from 'lucide-react';

export default function SpacePortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'Java', icon: <Code className="w-6 h-6" /> },
    { name: 'C++', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Python', icon: <Code className="w-6 h-6" /> },
    { name: 'React', icon: <Globe className="w-6 h-6" /> },
    { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
    { name: 'OOP', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Full Stack', icon: <Globe className="w-6 h-6" /> },
    { name: 'AI/ML', icon: <Cpu className="w-6 h-6" /> },
  ];

  const projects = [
    {
      title: "High Hat - AI Powered Real-Time Monitoring System",
      description: "A Raspberry Pi powered, AI-driven wearable camera system that detects suspicious hand movements or theft attempts behind a person in real time using computer vision, gesture analysis, and Google Gemini-powered threat interpretation.",
      tech: ["Flask", "Python", "Gemini 2.5 Pro", "MySQL", "ElevenLabs", "Raspberry Pi", "OpenCV", "MediaPipe"],
      features: [
        "Designed distributed system architecture integrating Raspberry Pi for continuous MJPEG video streaming with central Python Flask server",
        "Managed server performance and real-time processing using multi-threaded system with Video Capture Thread and MediaPipe Detection Thread",
        "Orchestrated incident escalation flow with continuous frame tracking and batch image analysis via Gemini API for interpretive threat analysis",
        "Developed full-stack alert mechanism coupling Flask backend threat determination with ElevenLabs TTS for immediate voice alerts",
        "Built frontend to display live video, incident tracking, and threat analysis using REST API consumption"
      ],
      demo: "https://www.youtube.com/watch?v=CCDfH9ludtM",
      github: "https://github.com/MuhammadBilal350/Websiteportfolio"
    },
    {
      title: "Enhanced Car Rental System",
      description: "A comprehensive car rental management system focused on realistic pricing, data accuracy, and efficient management using object-oriented design principles.",
      tech: ["Java", "OOP"],
      features: [
        "Implemented real-world entity classes including Car, Customer, and Rental with full lifecycle management",
        "Applied core OOP concepts: inheritance, polymorphism, and encapsulation to create a modular and scalable application",
        "Designed robust input validation ensuring 99% data accuracy during transactions",
        "Built realistic pricing models based on car type, rental duration, and customer profiles"
      ],
      demo: "#",
      github: "#"
    },
    {
      title: "Hospital Management System",
      description: "A full-stack hospital management application with MySQL database integration for managing patients, doctors, appointments, and medical records with secure access control.",
      tech: ["Java", "MySQL"],
      features: [
        "Implemented relational database schema in MySQL with 10+ tables to store and manage Patients, Doctors, and Appointments",
        "Created Doctors' Portal reducing patient history retrieval time by 40% through direct, secure access to medical records",
        "Developed CRUD operations with 25+ SQL queries ensuring data persistence and integrity for all hospital records",
        "Generated 3 key reports (doctor database, patient demographics, appointment dates) for faster administrative decision-making"
      ],
      demo: "#",
      github: "#"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Animated starfield background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-gray-950"></div>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      {/* Mouse gradient effect */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.2), transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-indigo-500/20 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              MB
            </h1>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-4xl text-center space-y-6">
            <div className="inline-block">
              <h2 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Muhammad Bilal
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-indigo-300">
              Computer Science Student • Full Stack Developer • AI Enthusiast
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A driven Computer Science student specializing in Java, C++, and Object-Oriented Programming. 
              I transform academic theory into meaningful, scalable software solutions with full-stack capabilities 
              in both client-facing design and enterprise service architectures.
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <a href="#projects" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all hover:scale-105 transform">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 border border-indigo-500 hover:bg-indigo-500/20 rounded-full transition-all hover:scale-105 transform">
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I leverage my foundational skills to tackle real-world problems, demonstrated by building fully featured 
                systems around explicit inheritance and polymorphism. My work is built upon a solid focus on quality and efficiency.
              </p>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="bg-indigo-950/30 p-6 rounded-xl border border-indigo-500/20">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-2">99% Data Accuracy</h3>
                  <p className="text-gray-400">Achieved through rigorous input validation in complex systems</p>
                </div>
                <div className="bg-purple-950/30 p-6 rounded-xl border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">25% Query Optimization</h3>
                  <p className="text-gray-400">Decreased data retrieval time through effective indexing strategies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-indigo-500/50 hover:scale-105 transition-all"
                >
                  <div className="text-indigo-400">{skill.icon}</div>
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/50 transition-all"
                >
                  <h3 className="text-2xl font-bold text-indigo-400 mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-950/50 border border-indigo-500/30 rounded-full text-sm text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all hover:scale-105 transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 border border-indigo-500 hover:bg-indigo-500/20 rounded-full transition-all hover:scale-105 transform"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Interested in collaborating or have a project in mind? Let's connect!
            </p>
            <div className="flex gap-6 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all hover:scale-105 transform"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://github.com/MuhammadBilal350"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-indigo-500 hover:bg-indigo-500/20 rounded-full transition-all hover:scale-105 transform"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-indigo-500 hover:bg-indigo-500/20 rounded-full transition-all hover:scale-105 transform"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-indigo-500/20">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>© 2024 Muhammad Bilal. Built with React & Tailwind CSS</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}