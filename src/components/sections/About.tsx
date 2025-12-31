import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer, itemVariant } from "../../utils/animations";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";
import Button from "../ui/Button";
import cv from "../../Asstets/cv/Milan Bhanuka_CV.pdf";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cvpdf = cv;

  const skills = [
    "Spring Boot", "Angular", "TypeScript", "React", "MySQL", "Node.js", "Next.js",];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
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
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <img
                  src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/548219604_1994515341344048_6744327875503527470_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGBgA85ho0ojy-cXIMSTfwWooM_ErQWp9Oigz8StBan02fc1FpM8A-yHQPcYrjXYhChqmGRwOkzgRXoGQvvaRea&_nc_ohc=SpGx0yxTZXsQ7kNvwH8dm7B&_nc_oc=Adlg27cwBg5_vauv8TasSlPFdHdi8mwIUl2XvlnIHfogI0ArCl7I775Vm0GFNoixlTbR6opg18wq6x8IXAjHOEMh&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=3wRv9StoSxY4ow-3SHIepA&oh=00_AfkMkSyKxXDv30wIYUSBVljHXg81edQL4FnD-H5qiJWJpA&oe=695AB200"
                  alt="About Me"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-500 dark:border-blue-500 rounded-lg transform translate-x-6 translate-y-6 -z-10"></div>
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
              I'm a full‑stack developer with 1+ years industry experience building production web applications using Spring Boot, Angular. 
              I focus on designing scalable backends, performant frontends, and intuitive user experiences that solve real problems.
            </motion.p>
            <motion.p
              variants={fadeUpVariant}
              className="text-gray-600 dark:text-gray-400 mb-8"
            >
              I enjoy leading projects end‑to‑end, collaborating with designers and product teams,
               and continuously improving systems through testing, refactoring, and automation. 
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
                    className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 px-3 py-1.5 rounded-full text-sm"
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
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <Award className="w-10 h-10 text-blue-600 dark:text-blue-500 mx-auto mb-2" />
                <h5 className="font-bold text-2xl text-gray-900 dark:text-white">1+ Years </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Industry Experience</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-500 mx-auto mb-2" />
                <h5 className="font-bold text-2xl text-gray-900 dark:text-white">5+</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Personal Projects</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <GraduationCap className="w-10 h-10 text-blue-600 dark:text-blue-500 mx-auto mb-2" />
                <h5 className="font-bold text-2xl text-gray-900 dark:text-white">BSc</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Computer Science</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <a href={cvpdf} download>
                <Button icon={<Download size={18} />}>
                      Download CV
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;