import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Button from "../ui/Button";
import { ArrowDownCircle, Github, Linkedin, Twitter } from "lucide-react";
import profileImg from "../../Asstets/profile.jpg";
import {BackgroundBeamsWithCollision} from "../ui/background-beams-with-collision";


const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/MilanBhanuka", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/milanbhanuka/", label: "LinkedIn" },
  ];

  return (
    
    <section
      id="home"
      className="relative min-h-screen flex items-center lg:pt-0 pt-20 overflow-hidden"
    >
      <BackgroundBeamsWithCollision>
      {/* Background with subtle animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: [0.2, 0.3, 0.2],
            y: [0, 10, 0],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-300/20 dark:bg-blue-600/10 blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            x: [0, -10, 0],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-purple-300/20 dark:bg-purple-600/10 blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-3">
            Hello, I'm
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
            Milan Bhanuka
          </h1>
          <div className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-12">
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Frontend Engineer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              repeat={Infinity}
              cursor={true}
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
            I create beautiful, functional, and user-centered digital experiences 
            with a focus on design aesthetics and performance optimization.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center space-x-4">
            <span className="text-gray-700 dark:text-gray-300">Find me on:</span>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="w-full max-w-md aspect-square rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <img
              src={profileImg}
              alt="Milan Bhanuka"
              className="w-full h-full object-cover rounded-full z-10"
            />
          </div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-5 -right-5 md:bottom-10 md:right-10 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg"
          >
            <div className="text-center">
              <p className="font-bold text-3xl md:text-4xl text-gray-900 dark:text-white">5+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Years of Experience</p>
            </div>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 flex flex-col items-center cursor-pointer"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDownCircle size={20} />
      </motion.a>
      </BackgroundBeamsWithCollision>

    </section>
    
  );
};

export default Hero;