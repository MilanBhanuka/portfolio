import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "../../utils/animations";

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  logo: string; // Added logo property
}

const educationData: Education[] = [
  {
    id: 1,
    institution: "University of Colombo School of Computing",
    degree: "Bachelor of Science in Computer Science",
    period: "2022 - 2025",
    description: "",
    logo: "/src/Asstets/ucsc.png", 
  },
  {
    id: 2,
    institution: "ESOFT Metro Campus - Matara",
    degree: "Pearson Assured Diploma in Software Engineering (DiSE)",
    period: "2020 - 2021",
    description: "",
    logo: "/src/Asstets/esoft.png", 
  },
  {
    id: 3,
    institution: "Rahula College Matara",
    degree: "G.C.E. Advanced Level",
    period: "2018 - 2021",
    description: "ICT : A | Combined Mathematics : B | Physics : C   - Z score 1.5918",
    logo: "/src/Asstets/rahula.png",
  },
];

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
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
            Academic Background
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Education
          </motion.h2>
          <motion.div
            variants={fadeUpVariant}
            className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            My academic journey and certifications
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeUpVariant}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              {/* Logo watermark in background */}
              {/* <div className="absolute -right-6 -bottom-6 opacity-5">
                <img 
                  src={edu.logo} 
                  alt=""
                  className="w-40 h-40 object-contain"
                />
              </div> */}
              
              {/* Card header with logo */}
              <div className="flex items-center mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="mr-4 flex-shrink-0">
                  <img 
                    src={edu.logo} 
                    alt={`${edu.institution} logo`}
                    className="w-12 h-12 object-contain rounded-md bg-white p-1 shadow-sm"
                  />
                </div>
                <div>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.period}
                  </p>
                </div>
              </div>
              
              {/* Card content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {edu.degree}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;