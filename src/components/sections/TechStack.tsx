import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "../../utils/animations";

const techStacks = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Nest.js", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const TechItem = ({ tech, keyPrefix }: { tech: typeof techStacks[0]; keyPrefix: string }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.08 }}
    transition={{ type: "spring", stiffness: 350, damping: 20 }}
    className="flex flex-col items-center justify-center w-24 gap-2 cursor-pointer group"
  >
    <div className="w-16 h-16 flex items-center justify-center glass border border-white/60 dark:border-white/10 rounded-2xl shadow-card p-3 group-hover:border-indigo-300/60 dark:group-hover:border-indigo-500/30 group-hover:shadow-glow-indigo transition-all duration-300">
      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
    </div>
    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-center leading-tight">
      {tech.name}
    </span>
  </motion.div>
);

const TechStack: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const row1 = [...techStacks.slice(0, 13), ...techStacks.slice(0, 13)];
  const row2 = [...techStacks.slice(13), ...techStacks.slice(13)];

  return (
    <section className="py-24 bg-gray-50/80 dark:bg-[#0b0c14] relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-100/40 dark:bg-cyan-900/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <motion.p variants={fadeUpVariant} className="text-sm font-bold tracking-[0.2em] uppercase gradient-text mb-3">
            My Tech Stack
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 font-heading">
            Technologies I Work With
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="section-divider" />
          <motion.p variants={fadeUpVariant} className="text-gray-500 dark:text-gray-400 mt-4">
            Explore the technologies and tools I use to build amazing projects
          </motion.p>
        </motion.div>

        {/* Marquee rows */}
        <div className="relative overflow-hidden space-y-6">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 dark:from-[#0b0c14] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 dark:from-[#0b0c14] to-transparent z-10 pointer-events-none" />

          {/* Row 1 — scroll left */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex gap-6"
          >
            {row1.map((tech, i) => (
              <TechItem key={`r1-${i}`} tech={tech} keyPrefix="r1" />
            ))}
          </motion.div>

          {/* Row 2 — scroll right */}
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex gap-6"
          >
            {row2.map((tech, i) => (
              <TechItem key={`r2-${i}`} tech={tech} keyPrefix="r2" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
