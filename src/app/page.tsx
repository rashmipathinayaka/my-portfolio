'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with Next.js, Stripe integration, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      live: "#"
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration and real-time messaging capabilities.",
      tech: ["Next.js", "OpenAI API", "Tailwind", "Vercel"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      live: "#"
    }
  ]

  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Next.js, TypeScript, Tailwind CSS" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe XD, Responsive Design" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter, Progressive Web Apps" }
  ]

  return (
    <main className="relative">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 p-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-2xl px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold gradient-text"
              >
                Portfolio
              </motion.div>
              <div className="hidden md:flex space-x-8">
                {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ scale: 1.1 }}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Hello, I'm</span>
                <br />
                <span className="gradient-text">John Doe</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Full Stack Developer & UI/UX Designer passionate about creating 
                beautiful, functional digital experiences that make a difference.
              </p>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass px-8 py-4 rounded-xl text-white font-semibold shine-effect glow"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-dark px-8 py-4 rounded-xl text-white font-semibold border border-white/20"
                >
                  Download CV
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 floating">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
            <p className="text-white/80 text-lg">Some of my recent work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden shine-effect"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="glass-dark px-3 py-1 rounded-full text-sm text-white/90">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="text-white/80 hover:text-white"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      className="text-white/80 hover:text-white"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
            <p className="text-white/80 text-lg">What I bring to the table</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-8 text-center shine-effect"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 glass-dark rounded-2xl mb-6">
                  <skill.icon size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>
                <p className="text-white/80">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Let's Connect</h2>
            <p className="text-white/80 text-lg">Ready to start your next project?</p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-white/80 mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Let's discuss how we can work together.
                </p>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:john@example.com"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail size={24} />
                    <span>john@example.com</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors"
                  >
                    <Linkedin size={24} />
                    <span>LinkedIn Profile</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                    <span>GitHub Profile</span>
                  </motion.a>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full glass-dark rounded-xl px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full glass-dark rounded-xl px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full glass-dark rounded-xl px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-blue-400 focus:outline-none resize-none"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full glass px-6 py-3 rounded-xl text-white font-semibold shine-effect glow"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 John Doe. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  )
}