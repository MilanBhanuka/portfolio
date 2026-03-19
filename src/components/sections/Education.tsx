import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "../../utils/animations";
import ucsclogo from "../../Asstets/ucsc.jpg";
import esoflogo from "../../Asstets/esoft.jpg";
import rahulalogo from "../../Asstets/rahula.jpg";
import { Calendar, BookOpen } from "lucide-react";

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  logo: string;
  gradient: string;
}

const educationData: Education[] = [
  {
    id: 1,
    institution: "University of Colombo School of Computing",
    degree: "Bachelor of Science in Computer Science",
    period: "2022 – 2025",
    description: "",
    logo: ucsclogo,
    gradient: "from-indigo-500/10 to-cyan-500/5",
  },
  {
    id: 2,
    institution: "ESOFT Metro Campus – Matara",
    degree: "Pearson Assured Diploma in Software Engineering (DiSE)",
    period: "2020 – 2021",
    description: "",
    logo: esoflogo,
    gradient: "from-violet-500/10 to-purple-500/5",
  },
  {
    id: 3,
    institution: "Rahula College Matara",
    degree: "G.C.E. Advanced Level",
    period: "2018 – 2021",
    description: "ICT : A  |  Combined Mathematics : B  |  Physics : C   — Z score 1.5918",
    logo: rahulalogo,
    gradient: "from-cyan-500/10 to-indigo-500/5",
  },
];

const Education: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="py-24 bg-white dark:bg-[#08090f] relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-80 h-80 bg-cyan-100/40 dark:bg-cyan-900/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-violet-100/40 dark:bg-violet-900/10 rounded-full blur-3xl" />
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
            Academic Background
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 font-heading">
            Education
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="section-divider" />
          <motion.p variants={fadeUpVariant} className="text-gray-500 dark:text-gray-400 mt-4">
            My academic journey and qualifications
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeUpVariant}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="glass border border-white/50 dark:border-white/5 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:shadow-indigo-200/20 dark:hover:shadow-indigo-900/20 transition-all duration-300 flex flex-col"
            >
              {/* Gradient top accent */}
              <div className="h-1 gradient-bg" />

              {/* Institution header */}
              <div className={`p-5 bg-gradient-to-br ${edu.gradient} border-b border-gray-100/80 dark:border-white/5`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm overflow-hidden flex items-center justify-center p-1 flex-shrink-0">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold gradient-text uppercase tracking-wide">
                      {edu.institution}
                    </p>
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      <Calendar size={10} /> {edu.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Degree */}
              <div className="p-5 flex-1 flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <BookOpen size={15} className="mt-0.5 flex-shrink-0 text-indigo-500" />
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h3>
                </div>
                {edu.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed bg-gray-50 dark:bg-white/5 rounded-xl p-3">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;