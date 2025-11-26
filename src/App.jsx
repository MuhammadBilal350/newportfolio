import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Cpu, Database, Globe } from 'lucide-react';
import SplashCursor from './SplashCursor';
import RotatingText from './RotatingText';
import PillNav from './PillNav';
import TextPressure from './TextPressure';
import MagneticButton from './MagneticButton';
import BlurFadeIn from './BlurFadeIn';
import AnimatedBorder from './AnimatedBorder';
import Shimmer from './Shimmer';
import TiltCard from './TiltCard';
import ScrollProgress from './ScrollProgress';

export default function SpacePortfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxImages]);

  const skills = [
    { name: 'Java', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12" />, projects: ['Enhanced Car Rental System', 'Hospital Management System'] },
    { name: 'JavaScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />, projects: ['Personal Portfolio Website'] },
    { name: 'Python', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12" />, projects: ['High Hat - AI Powered Real-Time Monitoring System'] },
    { name: 'React', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />, projects: ['Personal Portfolio Website'] },
    { name: 'MySQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-12 h-12" />, projects: ['High Hat - AI Powered Real-Time Monitoring System', 'Hospital Management System'] },
    { name: 'Flask', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-12 h-12 invert" />, projects: ['High Hat - AI Powered Real-Time Monitoring System'] },
    { name: 'Tailwind CSS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-12 h-12" />, projects: ['Personal Portfolio Website'] },
    { name: 'Vite', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" className="w-12 h-12" />, projects: ['Personal Portfolio Website'] },
    { name: 'Gemini API', icon: <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="Gemini API" className="w-12 h-12" />, projects: ['High Hat - AI Powered Real-Time Monitoring System'] },
    { name: 'OOP', icon: <img src="https://cdn-icons-png.flaticon.com/512/2621/2621326.png" alt="OOP" className="w-12 h-12" />, projects: ['Enhanced Car Rental System', 'Hospital Management System'] },
    { name: 'Full Stack', icon: <img src="https://cdn-icons-png.flaticon.com/512/1336/1336494.png" alt="Full Stack" className="w-12 h-12" />, projects: ['High Hat - AI Powered Real-Time Monitoring System', 'Hospital Management System'] },
    { name: 'AI/ML', icon: <img src="https://cdn-icons-png.flaticon.com/512/8637/8637099.png" alt="AI/ML" className="w-12 h-12" />, projects: ['High Hat - AI Powered Real-Time Monitoring System'] },
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
      github: "https://github.com/richard-w1/High-Hat",
      images: [
        "/images/highhat-1.png",
        "/images/highhat-2.png",
        "/images/highhat-3.png",
        "/images/highhat-4.png"
      ]
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
      github: "https://github.com/MuhammadBilal350/Car-Rental_system"
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
      github: "https://github.com/MuhammadBilal350/Hospital-Management-System"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, interactive portfolio website built with React and Vite, featuring a stunning space-themed design with animated backgrounds and smooth transitions. Showcases professional projects, technical skills, and achievements with an engaging user experience.",
      tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Lucide React"],
      features: [
        "Architected component-based React application with reusable UI components and state management using React Hooks for optimal performance",
        "Implemented dynamic starfield animation system generating 100+ animated stars with randomized positioning, sizing, and CSS keyframe animations for immersive visual experience",
        "Integrated WebGL-powered fluid dynamics splash cursor effect with real-time physics simulation using custom shaders for interactive visual feedback on mouse movement",
        "Engineered interactive skill showcase with conditional rendering and hover state management to display project associations through dynamically positioned dropdown menus",
        "Optimized development workflow with Vite's Hot Module Replacement (HMR) reducing reload times by 90% and integrated Tailwind CSS for rapid styling with utility-first approach"
      ],
      demo: "https://billportfoli.netlify.app/",
      github: "https://github.com/MuhammadBilal350/newportfolio"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
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

      {/* Splash Cursor Effect */}
      <SplashCursor />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <PillNav
          logoAlt="Muhammad Bilal"
          items={[
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Featured Projects' },
            { href: '#skills', label: 'Skills' },
            { href: '#contact', label: 'Contact' }
          ]}
          baseColor="#ffffff"
          pillColor="#6366f1"
          hoveredPillTextColor="#6366f1"
          pillTextColor="#ffffff"
          initialLoadAnimation={true}
        />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-4xl text-center space-y-6">
            <div className="inline-block w-full h-32 md:h-40">
              <TextPressure
                text="Muhammad Bilal"
                textColor="#FFFFFF"
                width={false}
                weight={true}
                italic={false}
                alpha={false}
                flex={false}
                stroke={false}
                scale={false}
                minFontSize={48}
                className="mb-4"
              />
            </div>
            <div className="inline-block">
              <AnimatedBorder borderWidth={3} gradientColors={['#6366f1', '#8b5cf6', '#ec4899']}>
                <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-3xl px-10 py-5 backdrop-blur-sm">
                  <p className="text-xl md:text-2xl text-white flex items-center justify-center gap-2 font-semibold">
                    <RotatingText
                    texts={[
                      'Computer Science Student',
                      'Full Stack Developer',
                      'AI Enthusiast'
                    ]}
                    rotationInterval={3000}
                    staggerDuration={0.02}
                    mainClassName="text-white"
                    elementLevelClassName="text-white"
                  />
                </p>
              </div>
              </AnimatedBorder>
            </div>
            <div className="flex gap-4 justify-center pt-6">
              <MagneticButton
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all cursor-pointer"
              >
                View Projects
              </MagneticButton>
              <MagneticButton
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 border border-indigo-500 hover:bg-indigo-500/20 rounded-full transition-all cursor-pointer"
              >
                Get in Touch
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <BlurFadeIn duration={0.8}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I am a passionate Computer Science student at the University of Texas at Dallas, specializing in full-stack development, AI integration, and modern web technologies. My expertise spans Python, Java, JavaScript, React, Flask, MySQL, and cutting-edge frameworks like Vite and Tailwind CSS. I developed High Hat, a sophisticated AI-powered real-time security monitoring system that integrates Raspberry Pi hardware with a Python Flask backend, utilizing MediaPipe for real-time hand gesture detection and Google Gemini 2.5 Pro API for intelligent threat analysis. The system features multi-threaded video processing, incident escalation workflows, and immediate voice alerts through ElevenLabs text-to-speech, with a comprehensive web dashboard for live monitoring and analytics. I also architected and built this interactive portfolio website from the ground up using React and modern JavaScript, implementing dynamic starfield animations with 100+ animated elements, real-time mouse-tracking gradient effects, smooth scroll navigation, hover-activated skill dropdowns, image lightbox galleries with keyboard controls, and fully responsive glassmorphic design optimized with Tailwind CSS and Vite's hot module replacement. Additionally, my experience includes backend systems like a Car Rental platform and a Hospital Management System. I thrive on solving complex technical challenges and creating innovative, user-focused software solutions, ready to make meaningful contributions in an internship or entry-level position.
              </p>
              
              {/* Education Container */}
              <div className="bg-indigo-950/30 p-6 rounded-xl border border-indigo-500/20 mt-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* UTD Logo */}
                  <div className="flex-shrink-0 bg-white rounded-lg p-2">
                    <img 
                      src="/images/logoutdallas.png" 
                      alt="University of Texas at Dallas" 
                      className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    />
                  </div>
                  
                  {/* Education Details */}
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                      <h3 className="text-xl font-bold text-indigo-300">
                        University of Texas at Dallas
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base">
                        Expected Graduation: May 2028
                      </p>
                    </div>
                    <p className="text-lg text-purple-300 mb-3">
                      Bachelor of Science in Computer Science
                    </p>
                    <div className="text-sm text-gray-300">
                      <p className="mb-1"><span className="font-semibold text-indigo-400">Relevant Coursework:</span></p>
                      <p>Data Structures, Software Engineering, Artificial Intelligence, Discrete Math, CS2, Computer Architecture, Calculus 2, Linear Algebra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </BlurFadeIn>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Languages & Concepts
            </h2>
            {/* First 10 items in 5x2 grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
              {skills.slice(0, 10).map((skill, index) => (
                <BlurFadeIn key={index} delay={index * 0.1}>
                  <div className="relative group">
                    <Shimmer className="rounded-xl">
                      <div
                        className="relative bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 flex flex-col items-center gap-3 hover:bg-cyan-400/20 hover:border-cyan-400/50 hover:scale-105 transition-all hover:z-[200]"
                      >
                        <div className="text-indigo-400">{skill.icon}</div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                    </Shimmer>
                    
                    {/* Dropdown on hover - positioned below */}
                    {skill.projects.length > 0 && (
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-gray-800/95 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[200] shadow-xl">
                        <p className="text-xs text-indigo-300 font-semibold mb-2">Used in:</p>
                        <ul className="space-y-1">
                          {skill.projects.map((project, i) => (
                            <li key={i} className="text-xs text-gray-300 flex items-start gap-1">
                              <span className="text-indigo-400 mt-0.5">•</span>
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </BlurFadeIn>
              ))}
            </div>
            
            {/* Last 2 items centered */}
            <div className="flex justify-center gap-6">
              {skills.slice(10).map((skill, index) => (
                <BlurFadeIn key={index + 10} delay={(index + 10) * 0.1}>
                  <div className="relative group">
                    <Shimmer className="rounded-xl">
                      <div
                        className="relative bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 flex flex-col items-center gap-3 hover:bg-cyan-400/20 hover:border-cyan-400/50 hover:scale-105 transition-all hover:z-[200] w-full md:w-auto md:min-w-[180px]"
                      >
                        <div className="text-indigo-400">{skill.icon}</div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                    </Shimmer>
                    
                    {/* Dropdown on hover - positioned below */}
                    {skill.projects.length > 0 && (
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-gray-800/95 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[200] shadow-xl">
                        <p className="text-xs text-indigo-300 font-semibold mb-2">Used in:</p>
                        <ul className="space-y-1">
                          {skill.projects.map((project, i) => (
                            <li key={i} className="text-xs text-gray-300 flex items-start gap-1">
                              <span className="text-indigo-400 mt-0.5">•</span>
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </BlurFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <BlurFadeIn key={index} delay={index * 0.2}>
                  <TiltCard className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/50 transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-indigo-400 mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    </div>
                    
                    {/* Project Images Gallery */}
                    {project.images && project.images.length > 0 && (
                      <div className="md:w-64 flex-shrink-0">
                        <div 
                          onClick={() => openLightbox(project.images, 0)}
                          className="relative group overflow-hidden rounded-lg border border-indigo-500/20 hover:border-indigo-500/50 transition-all cursor-pointer"
                        >
                          <img 
                            src={project.images[0]} 
                            alt={`${project.title} screenshot`}
                            className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          {project.images.length > 1 && (
                            <div className="absolute bottom-2 right-2 bg-gray-900/90 backdrop-blur-sm border border-indigo-500/50 rounded-full px-3 py-1 text-sm text-indigo-300 font-semibold">
                              +{project.images.length - 1}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
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
                        className="px-3 py-1 bg-indigo-950/50 border border-indigo-500/30 rounded-full text-sm text-indigo-300 hover:bg-green-500/20 hover:border-green-400/50 hover:text-green-300 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {index !== 1 && index !== 2 && (
                      <a
                        href={project.demo}
                        target={project.title === "Personal Portfolio Website" ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (project.title === "Personal Portfolio Website") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all hover:scale-105 transform"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 border border-indigo-500 hover:bg-pink-500/20 hover:border-pink-500 rounded-full transition-all hover:scale-105 transform backdrop-blur-sm"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                  </TiltCard>
                </BlurFadeIn>
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
                href="mailto:bilal.aslam12444@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all hover:scale-105 transform"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://github.com/MuhammadBilal350?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-indigo-500 hover:bg-pink-500/20 hover:border-pink-500 rounded-full transition-all hover:scale-105 transform backdrop-blur-sm"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-bilal-a98963371/"
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-indigo-400 transition-colors z-[1001]"
          >
            ×
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white text-4xl hover:text-indigo-400 transition-colors z-[1001]"
          >
            ‹
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white text-4xl hover:text-indigo-400 transition-colors z-[1001]"
          >
            ›
          </button>
          
          <div className="max-w-6xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightboxImages[currentImageIndex]} 
              alt={`Screenshot ${currentImageIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center text-white mt-4">
              {currentImageIndex + 1} / {lightboxImages.length}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
