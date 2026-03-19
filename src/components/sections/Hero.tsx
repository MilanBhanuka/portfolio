import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Button from "../ui/Button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import profileImg from "../../Asstets/profile.jpg";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/MilanBhanuka", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/milanbhanuka/", label: "LinkedIn" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <BackgroundBeamsWithCollision>

        {/* Ambient gradient orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-400/20 dark:bg-indigo-600/15 blur-[80px]"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-400/20 dark:bg-violet-600/15 blur-[80px]"
          />
          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/10 dark:bg-cyan-600/10 blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:pt-0 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="z-10 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-sm border border-indigo-200/60 dark:border-indigo-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base md:text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide uppercase"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black gradient-text text-glow mb-4 leading-tight font-heading"
            >
              Milan Bhanuka
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-6 h-10 flex items-center"
            >
              <span className="mr-2">I'm a</span>
              <span className="gradient-text">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2000,
                    "Software Engineer",
                    2000,
                    "Full Stack Developer",
                    2000,
                  ]}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed"
            >
              I craft beautiful, high-performance digital experiences with a
              focus on clean architecture, stunning design, and delightful user interactions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Find me on
              </span>
              <div className="flex gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-xl glass-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center order-1 lg:order-2 z-10"
          >
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-indigo-300/40 dark:border-indigo-500/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[380px] h-[380px] md:w-[460px] md:h-[460px] rounded-full border border-violet-300/30 dark:border-violet-500/15"
            />

            {/* Glow backdrop */}
            <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full gradient-bg opacity-20 blur-3xl" />

            {/* Profile photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full gradient-bg blur-xl opacity-40" />
              <div className="relative w-full h-full p-1.5 rounded-full gradient-bg shadow-glow-violet">
                <img
                  src={profileImg}
                  alt="Milan Bhanuka"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 top-10 glass px-3 py-2 rounded-xl shadow-card"
              >
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Full Stack</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Developer</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-4 bottom-12 glass px-3 py-2 rounded-xl shadow-card"
              >
                <p className="text-xs font-semibold text-violet-600 dark:text-violet-400">1+ Years</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.5, duration: 1.8, repeat: Infinity, repeatType: "loop" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer z-10"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-current"
            />
          </div>
        </motion.a>

      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Hero;