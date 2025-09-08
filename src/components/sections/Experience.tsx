import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "../../utils/animations";
import adlLogo from "../../Asstets/adl.webp"; 
import cf from "../../Asstets/cf.png";


interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  logoUrl: string;
  responsibilities: string[];
}

const experienceData: Experience[] = [
  {
    id: 2,
    company: "Central Finance Company PLC",
    role: "Associate Software Engineer",
    period: "Sep 2025 - present",
    logoUrl: cf,
    responsibilities: [
    ],
  },
  {
    id: 1,
    company: "Axiata Digital Labs",
    role: "Intern - Software Engineering",
    period: "Nov 2022 - Aug 2025",
    logoUrl: adlLogo,
    responsibilities: [
      "Worked on frontend development using Angular 16, gaining a strong understanding of modern frontend practices.",
      "Developed and executed unit tests to ensure code quality and application stability.",
      "Integrated APIs into projects, collaborating closely with backend teams.",
      "Conducted research and development tasks focused on upgrading projects from Angular 16 to Angular 17 for micro frontend with native federation.",
      "Successfully upgraded Angular 16 micro frontend project into Angular 17"
    ],
  },
  
];

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.p
            variants={fadeUpVariant}
            className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2"
          >
            Professional Journey
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Experience
          </motion.h2>
          <motion.div
            variants={fadeUpVariant}
            className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            My professional roles and achievements
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeUpVariant}
              className=" bg-gradient-to-br from-blue-50/60 via-white/80 to-blue-100/60 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Header Section with Logo, Company, Role, and Period */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-600">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 bg-white rounded-md flex items-center justify-center shadow-sm overflow-hidden">
                      {exp.logoUrl ? (
                        <img
                          src={exp.logoUrl}
                          alt={`${exp.company} logo`}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full rounded-md"
                        />
                      ) : (
                        <div className="text-2xl font-bold text-blue-600">
                          {exp.company.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Company, Role, and Period */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Content Section with Responsibilities */}
              <div className="p-6">
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;