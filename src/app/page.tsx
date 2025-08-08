"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Award,
  Download,
  MapPin,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Gren Lease",
      description:
        "GreenLease is a land leasing and cultivation management platform that connects landowners with the company through a transparent and efficient system.",
      tech: ["PHP", "mysql", "HTML", "CSS", "JavaScript"],
      image:
        "https://cdn.agdaily.com/wp-content/uploads/2018/09/bg-corn_field-001-naramit.jpg",
      github: "https://github.com/rashmipathinayaka/Green-Lease",
      live: "#",
      // featured: false,
    },
    {
      title: "Chalkboard",
      description:
        "Chalkboard is a comprehensive school management system designed to streamline academic administration, enhance teacher-student communication, and simplify everyday tasks for schools.",
      tech: ["React", "MongoDb", "Tailwind"],
      image:
        "https://img.freepik.com/premium-photo/chalkboard-with-chalkboard-books_81048-20102.jpg",
      github: "https://github.com/DilshaniNK/Simple-Student-Management-System",
      live: "#",
      // featured: false,
    },
    {
      title: "LittleSteps",
      description:
        "LittleSteps is a daycare management app that helps parents and caregivers stay connected through real-time updates, activity tracking, and secure communication.",
      tech: ["React", "React Native", "firebase", "PostgreSql", "Tailwind"],
      image: "/images/R.jpeg",
      github: "https://github.com/LittleSteps2025",
      live: "#",
      // featured: false,
    },
    {
      title: "OfficeTalk",
      description:
        "OfficeTalk is a collaborative communication platform designed to streamline team conversations and enhance workplace productivity.",
      tech: ["React Native", "Socket.io", "Node.js", "firebase"],
      image: "/images/OIP.webp",
      github: "#https://github.com/rashmipathinayaka/OfficeTalk",
      live: "#",
      // featured: false,
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      description: "React, JavaScript, Next.js, TypeScript",
      level: 95,
    },
    {
      name: "Backend & Database",
      icon: Database,
      description: "Node.js, PHP, firebase, MySql, PostgreSQL, MongoDB",
      level: 90,
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      description: "React Native, Flutter",
      level: 85,
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "AWS Certified",
      description: "Solutions Architect Professional",
    },
    {
      icon: Code,
      title: "Open Source",
      description: "50+ contributions on GitHub",
    },
    {
      icon: Database,
      title: "Performance",
      description: "Optimized apps by 300%",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="relative">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl floating"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl floating"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Enhanced Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-2xl px-8 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold gradient-text"
              >
                Rashmi Prasadi
              </motion.div>
              <div className="hidden md:flex space-x-8">
                {["About", "Projects", "Skills", "Contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-white/80 hover:text-white transition-all duration-300 font-medium"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="/documents/cv.pdf" // Path to your resume file
                download="Rashmi_CV.pdf" // Optional: Custom filename when downloaded
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-dark px-6 py-2 rounded-xl text-white font-medium border border-white/20 hover:border-blue-400/50 transition-all duration-300 inline-block"
              >
                <Download size={16} className="inline mr-2" />
                Resume
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 mb-6"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">
                  Available for new opportunities
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="gradient-text">Rashmi Prasadi</span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <h2 className="text-2xl lg:text-3xl text-blue-300 font-semibold mb-4">
                  Software Engineer
                </h2>
                <p className="text-xl text-white/80 leading-relaxed">
                  I am a motivated Full Stack Developer passionate about
                  creating efficient and scalable web applications. Currently
                  seeking a software engineering internship to apply my skills,
                  learn from industry professionals, and contribute to impactful
                  projects.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass px-8 py-4 rounded-xl text-white font-semibold shine-effect glow hover:shadow-blue-500/25 transition-all duration-300"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-dark px-8 py-4 rounded-xl text-white font-semibold border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                >
                  <Mail size={16} className="inline mr-2" />
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative max-w-sm mx-auto">
                {/* Clean, minimal image container */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/me.jpg"
                      alt="Rashmi Prasadi - Software Engineer"
                      fill
                      sizes="320px"
                      style={{ objectFit: "cover" }}
                      priority
                      className="hover:scale-105 transition-transform duration-700"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                    {/* Elegant border effect */}
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 ring-inset"></div>
                  </div>

                  {/* Floating elements for visual interest */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-sm opacity-60"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-md opacity-40"></div>
                  <div className="absolute top-1/4 -left-8 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-sm opacity-50"></div>
                </div>

                {/* Minimal floating stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                >
                  <div className="glass px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/10">
                    <div className="flex items-center space-x-6 text-center">
                      <div>
                        <div className="text-lg font-bold text-blue-400">
                          4+
                        </div>
                        <div className="text-xs text-white/70">Projects</div>
                      </div>
                      <div className="w-px h-8 bg-white/20"></div>
                      <div>
                        <div className="text-lg font-bold text-cyan-400">
                          Full Stack
                        </div>
                        <div className="text-xs text-white/70">Developer</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
              Featured Projects
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              A showcase of my recent work, featuring enterprise-level
              applications and innovative solutions that make a real impact.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 mb-12"
          >
            {projects
              // .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass rounded-3xl overflow-hidden shine-effect group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      {/* <span className="glass-dark px-3 py-1 rounded-full text-sm text-yellow-400 font-medium">
                        Featured
                      </span> */}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="glass-dark px-4 py-2 rounded-full text-sm text-white/90 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="glass-dark p-3 rounded-xl text-white/80 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="glass-dark p-3 rounded-xl text-white/80 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>

         
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
              Skills & Expertise
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Comprehensive technical skills backed by years of hands-on
              experience in building production-ready applications.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass rounded-3xl p-8 text-center shine-effect group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 glass-dark rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon size={36} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {skill.name}
                </h3>
                <p className="text-white/80 mb-6">{skill.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-white/70 mb-2">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-dark rounded-2xl p-6 text-center"
              >
                <achievement.icon
                  size={32}
                  className="text-yellow-400 mx-auto mb-4"
                />
                <h4 className="text-lg font-bold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-white/70 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
              Let's Work Together
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can
              create something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:p-12 shine-effect"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  I'm always excited about new opportunities and interesting
                  projects. Whether you're a startup looking to build your MVP
                  or an enterprise needing to scale your platform, let's talk.
                </p>

                <div className="space-y-6">
                  <motion.a
                    href="rashipathinayaka@gmail.com"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-all duration-300 group"
                  >
                    <div className="glass-dark p-3 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="font-medium">
                        rashipathinayaka@gmail.com
                      </div>
                      <div className="text-sm text-white/60">
                        Drop me a line
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/rashmi-pathinayaka-aa950a28b"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-all duration-300 group"
                  >
                    <div className="glass-dark p-3 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <div className="font-medium">LinkedIn Profile</div>
                      <div className="text-sm text-white/60">
                        Let's connect professionally
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/rashmipathinayaka"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-all duration-300 group"
                  >
                    <div className="glass-dark p-3 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                      <Github size={24} />
                    </div>
                    <div>
                      <div className="font-medium">GitHub Profile</div>
                      <div className="text-sm text-white/60">
                        Check out my code
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>

              <div>
                <form
                  action="https://formspree.io/f/xzzvkebl" // ← replace with your own
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="glass-dark rounded-xl px-4 py-4 text-white placeholder-white/60 border border-white/20 focus:border-blue-400 focus:outline-none transition-all duration-300"
                    />
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="glass-dark rounded-xl px-4 py-4 text-white placeholder-white/60 border border-white/20 focus:border-blue-400 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="subject"
                    placeholder="Reason for Contact (Job, Interview, Project...)"
                    className="w-full glass-dark rounded-xl px-4 py-4 text-white placeholder-white/60 border border-white/20 focus:border-blue-400 focus:outline-none transition-all duration-300"
                  />
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    rows={5}
                    name="message"
                    placeholder="Write your message here..."
                    required
                    className="w-full glass-dark rounded-xl px-4 py-4 text-white placeholder-white/60 border border-white/20 focus:border-blue-400 focus:outline-none resize-none transition-all duration-300"
                  ></motion.textarea>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full glass px-6 py-4 rounded-xl text-white font-semibold shine-effect glow hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold gradient-text mb-2">
                Rashmi Prasadi
              </div>
              <p className="text-white/60">
                © 2024 Rashmi Prasadi. Crafted with Next.js and Tailwind CSS.
              </p>
            </div>
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com/rashmipathinayaka" // replace with your GitHub link
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/rashmi-pathinayaka-aa950a28b"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              {/* 
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-white/60 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </motion.a> */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
