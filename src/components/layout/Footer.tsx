import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/MilanBhanuka", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/milanbhanuka/", label: "LinkedIn" },
    { icon: <Mail size={18} />, href: "mailto:vgmbhanuka@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#07080e] border-t border-white/5 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-violet-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Top section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/5">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-glow-indigo">
                <span className="text-white font-extrabold text-sm font-heading">MB</span>
              </div>
              <span className="font-heading font-bold text-lg text-white">Milan Bhanuka</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              A passionate full-stack developer crafting beautiful, functional web experiences with modern technologies.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-950/30 transition-all duration-200"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-5">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 3 }}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:vgmbhanuka@gmail.com"
                className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-indigo-400 transition-colors group"
              >
                <Mail size={14} className="text-indigo-500 group-hover:text-indigo-400" />
                vgmbhanuka@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-500">
                <span className="text-indigo-500 mt-0.5 text-xs">📞</span>
                <div>
                  <p>+94 71 6720 867</p>
                  <p>+94 72 1704 598</p>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-950/40 border border-green-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400 font-medium">Open to opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 text-center sm:text-left flex items-center gap-1.5">
            © {currentYear} Milan Bhanuka. Made with{" "}
            <Heart size={11} className="text-red-500 fill-red-500 inline" />{" "}
            All rights reserved.
          </p>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-indigo-400 transition-colors group"
          >
            Back to top
            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/30 group-hover:bg-indigo-950/30 transition-all">
              <ArrowUp size={13} />
            </div>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;