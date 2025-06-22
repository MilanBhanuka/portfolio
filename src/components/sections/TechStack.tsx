import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant } from "../../utils/animations";

// Tech stack icons and names
const techStacks = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Nest.js", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Keycloak", icon: "https://openziti.io/icons/logo-keycloak.svg" },
];

const TechStack: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Duplicate the tech stacks for continuous scrolling effect
  const duplicatedTechStacks = [...techStacks, ...techStacks];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.p
            variants={fadeUpVariant}
            className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2"
          >
            My Tech Stack
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Technologies I Work With
          </motion.h2>
          <motion.div
            variants={fadeUpVariant}
            className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Explore the technologies and tools I use to build amazing projects
          </motion.p>
        </motion.div>

        {/* Auto-scrolling tech stack icons */}
        <div className="relative overflow-hidden">
          {/* First row - scrolling left to right */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex space-x-8 mb-8"
          >
            {duplicatedTechStacks.map((tech, index) => (
              <div
                key={`tech1-${index}`}
                className="flex flex-col items-center justify-center w-20 h-28"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow-md p-3 mb-2">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second row - scrolling right to left */}
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex space-x-8"
          >
            {duplicatedTechStacks.reverse().map((tech, index) => (
              <div
                key={`tech2-${index}`}
                className="flex flex-col items-center justify-center w-20 h-28"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow-md p-3 mb-2">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
