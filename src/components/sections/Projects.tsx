import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "../../utils/animations";
import { projects } from "../../utils/data";
import ProjectCard from "../ui/ProjectCard";
import { Layers } from "lucide-react";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [filter, setFilter] = useState<string>("all");

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#08090f] relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -right-32 w-96 h-96 bg-violet-100/40 dark:bg-violet-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-32 w-80 h-80 bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <motion.p variants={fadeUpVariant} className="text-sm font-bold tracking-[0.2em] uppercase gradient-text mb-3">
            My Portfolio
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 font-heading">
            Recent Projects
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="section-divider" />
          <motion.p variants={fadeUpVariant} className="text-gray-500 dark:text-gray-400 mt-4">
            Explore my latest work and creative projects
          </motion.p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {["all", ...allTags].map((tag, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setFilter(tag)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === tag
                  ? "gradient-bg text-white shadow-lg shadow-indigo-500/30"
                  : "glass-sm border border-gray-200/60 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {tag === "all" && <Layers size={13} />}
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;