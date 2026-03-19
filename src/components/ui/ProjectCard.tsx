import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../../types";
import { ExternalLink, Github, X, Tag } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setShowDetails(true)}
        className="glass border border-white/50 dark:border-white/5 rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover hover:shadow-indigo-200/20 dark:hover:shadow-indigo-900/20 transition-all duration-300 group"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Hover cta */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 rounded-xl glass text-white text-sm font-semibold border border-white/30">
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full glass-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative glass border border-white/40 dark:border-white/10 rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Hero image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 md:h-80 object-cover rounded-t-3xl"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-3xl" />
                {/* Title over image */}
                <div className="absolute bottom-5 left-6 right-14">
                  <h2 className="text-2xl font-black text-white font-heading drop-shadow-lg">
                    {project.title}
                  </h2>
                </div>
                {/* Close button */}
                <button
                  aria-label="Close"
                  className="absolute top-4 right-4 glass border border-white/30 text-white p-2 rounded-xl hover:bg-white/20 transition-colors"
                  onClick={() => setShowDetails(false)}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-7 space-y-5">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={14} className="text-indigo-500" />
                    <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      Technologies Used
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 gradient-bg text-white text-sm font-semibold rounded-xl hover:shadow-glow-indigo transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                  {Array.isArray(project.githubUrl)
                    ? project.githubUrl.map((url, i) => (
                        <a
                          key={i}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 glass-sm border border-gray-200/60 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
                        >
                          <Github size={15} />
                          View Code {project.githubUrl.length > 1 ? i + 1 : ""}
                        </a>
                      ))
                    : project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 glass-sm border border-gray-200/60 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
                        >
                          <Github size={15} />
                          View Code
                        </a>
                      )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
