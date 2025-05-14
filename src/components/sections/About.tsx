import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer, itemVariant } from "../../utils/animations";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";
import Button from "../ui/Button";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skills = [
    "HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "MongoDB", "UI/UX Design", "Figma",
    "Tailwind CSS", "GraphQL", "AWS", "Git", "REST APIs"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div
        ref={ref}
        className="container mx-auto px-4 md:px-6"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={fadeUpVariant}
            className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Get to know more about my journey, skills, and experiences
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:ml-auto">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.pexels.com/photos/11805196/pexels-photo-11805196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="About Me"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-600 dark:border-blue-500 rounded-lg transform translate-x-6 translate-y-6 -z-10"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={fadeUpVariant}
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Creative Developer & Designer
            </motion.h3>
            <motion.p
              variants={fadeUpVariant}
              className="text-gray-600 dark:text-gray-400 mb-6"
            >
              I'm a passionate full-stack developer with expertise in creating beautiful, 
              functional, and user-centered digital experiences. With 5+ years of 
              experience in web development and design, I love turning complex problems 
              into simple, beautiful, and intuitive designs.
            </motion.p>
            <motion.p
              variants={fadeUpVariant}
              className="text-gray-600 dark:text-gray-400 mb-8"
            >
              My approach combines technical expertise with creative problem-solving. 
              I'm dedicated to continuous learning and staying updated with the latest 
              technologies and design trends to deliver cutting-edge solutions.
            </motion.p>

            {/* Skills */}
            <motion.div
              variants={fadeUpVariant}
              className="mb-8"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                My Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariant}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUpVariant}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
            >
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Award className="w-10 h-10 text-blue-600 dark:text-blue-500 mx-auto mb-2" />
                <h5 className="font-bold text-2xl text-gray-900 dark:text-white">5+</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-500 mx-auto mb-2" />
                <h5 className="font-bold text-2xl text-gray-900 dark:text-white">20+</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <GraduationCap className="w-10 h-10 text-blue-600 dark:text-blue-500 mx-auto mb-2" />
                <h5 className="font-bold text-2xl text-gray-900 dark:text-white">BSc</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Computer Science</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Award className="w-10 h-10 text-blue-600 dark:text-blue-500 mx-auto mb-2" />
                <h5 className="font-bold text-2xl text-gray-900 dark:text-white">3</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Awards</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <Button icon={<Download size={18} />}>
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;