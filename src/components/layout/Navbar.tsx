import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Download } from "lucide-react";
import Button from "../ui/Button";
import cv from "../../Asstets/cv/Milan Bhanuka_CV.pdf";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/5 dark:shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="relative flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-glow-indigo">
              <span className="text-white font-extrabold text-sm tracking-wider font-heading">MB</span>
            </div>
            <span className="hidden sm:block font-heading font-bold text-lg gradient-text">
              Milan Bhanuka
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-1">
              {navLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ y: -1 }}>
                  <a
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/30 group"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 gradient-bg scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a href={cv} download>
                <Button size="sm" icon={<Download size={15} />}>
                  Download CV
                </Button>
              </a>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass border-t border-white/20 dark:border-white/5 mt-2"
          >
            <div className="container mx-auto px-4 py-5 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full gradient-bg" />
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-3 pb-1 border-t border-gray-100 dark:border-white/5">
                <a href={cv} download className="block">
                  <Button icon={<Download size={16} />} fullWidth>
                    Download CV
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;