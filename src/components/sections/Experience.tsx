import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "../../utils/animations";
import adlLogo from "../../Asstets/adl.webp";
import cf from "../../Asstets/cf.png";
import { MapPin, Calendar, ChevronRight } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location?: string;
  logoUrl: string;
  color: string;
  responsibilities: string[];
}

const experienceData: Experience[] = [
  {
    id: 2,
    company: "Central Finance Company PLC",
    role: "Associate Software Engineer",
    period: "Sep 2025 – Present",
    location: "Sri Lanka",
    logoUrl: cf,
    color: "from-violet-500/10 to-purple-500/5",
    responsibilities: [
      "Working on Saving System project using Angular 17, Spring Boot",
      "Designed and implemented automated document generation for financial documents and transaction slips using Jaspersoft Studios, reducing manual processing time",
    ],
  },
  {
    id: 1,
    company: "Axiata Digital Labs",
    role: "Intern – Software Engineering",
    period: "Nov 2024 – Aug 2025",
    location: "Sri Lanka",
    logoUrl: adlLogo,
    color: "from-indigo-500/10 to-cyan-500/5",
    responsibilities: [
      "Worked on frontend development using Angular 16, gaining a strong understanding of modern frontend practices.",
      "Developed and executed unit tests to ensure code quality and application stability.",
      "Integrated APIs into projects, collaborating closely with backend teams.",
      "Conducted R&D focused on upgrading projects from Angular 16 to Angular 17 for micro frontend with native federation.",
      "Successfully upgraded Angular 16 micro frontend project into Angular 17.",
    ],
  },
];

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="py-24 bg-gray-50/80 dark:bg-[#0b0c14] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-violet-100/50 dark:bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.p variants={fadeUpVariant} className="text-sm font-bold tracking-[0.2em] uppercase gradient-text mb-3">
            Professional Journey
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 font-heading">
            Experience
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="section-divider" />
          <motion.p variants={fadeUpVariant} className="text-gray-500 dark:text-gray-400 mt-4">
            My professional roles and key achievements
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/50 to-transparent hidden sm:block md:-translate-x-px" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-10"
          >
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={fadeUpVariant}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg shadow-lg shadow-indigo-500/50 hidden sm:block z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`md:w-1/2 glass border border-white/50 dark:border-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-indigo-200/20 dark:hover:shadow-indigo-900/20 transition-all duration-300`}
                >
                  {/* Accent gradient top bar */}
                  <div className={`h-1 w-full gradient-bg`} />

                  {/* Header */}
                  <div className={`p-5 bg-gradient-to-br ${exp.color} border-b border-gray-100/80 dark:border-white/5`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0 p-1">
                        <img
                          src={exp.logoUrl}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold gradient-text">{exp.company}</p>
                        <div className="flex flex-wrap gap-3 mt-1">
                          <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <Calendar size={11} /> {exp.period}
                          </span>
                          {exp.location && (
                            <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                              <MapPin size={11} /> {exp.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="p-5">
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                          <ChevronRight size={14} className="mt-0.5 flex-shrink-0 text-indigo-500" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;