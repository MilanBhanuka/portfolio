import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer, itemVariant } from "../../utils/animations";
import { Download, Award, Briefcase, GraduationCap, Code2 } from "lucide-react";
import Button from "../ui/Button";
import cv from "../../Asstets/cv/Milan Bhanuka_CV.pdf";

const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const skills = [
    "Spring Boot", "Angular", "TypeScript", "React",
    "MySQL", "Node.js", "Next.js", "Docker",
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "1+", label: "Years Industry Exp." },
    { icon: <Briefcase className="w-6 h-6" />, value: "5+", label: "Personal Projects" },
    { icon: <GraduationCap className="w-6 h-6" />, value: "BSc", label: "Computer Science" },
    { icon: <Code2 className="w-6 h-6" />, value: "15+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#08090f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-100/40 dark:bg-violet-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.p variants={fadeUpVariant} className="text-sm font-bold tracking-[0.2em] uppercase gradient-text mb-3">
            Get To Know Me
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 font-heading">
            About Me
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="section-divider" />
          <motion.p variants={fadeUpVariant} className="text-gray-500 dark:text-gray-400 mt-4">
            Get to know more about my journey, skills, and experiences
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative flex justify-center"
          >
            <div className="relative max-w-sm w-full">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-3xl gradient-bg opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl gradient-bg opacity-30" />

              <div className="relative rounded-2xl overflow-hidden p-1 gradient-bg shadow-lg shadow-indigo-500/40">
                <img
                  src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/548219604_1994515341344048_6744327875503527470_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGBgA85ho0ojy-cXIMSTfwWooM_ErQWp9Oigz8StBan02fc1FpM8A-yHQPcYrjXYhChqmGRwOkzgRXoGQvvaRea&_nc_ohc=SpGx0yxTZXsQ7kNvwH8dm7B&_nc_oc=Adlg27cwBg5_vauv8TasSlPFdHdi8mwIUl2XvlnIHfogI0ArCl7I775Vm0GFNoixlTbR6opg18wq6x8IXAjHOEMh&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=3wRv9StoSxY4ow-3SHIepA&oh=00_AfkMkSyKxXDv30wIYUSBVljHXg81edQL4FnD-H5qiJWJpA&oe=695AB200"
                  alt="Milan Bhanuka"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3 variants={fadeUpVariant} className="text-3xl font-bold text-gray-900 dark:text-white font-heading">
              Creative Developer &{" "}
              <span className="gradient-text">Designer</span>
            </motion.h3>

            <motion.p variants={fadeUpVariant} className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a full‑stack developer with 1+ years of industry experience building production
              web applications using <span className="text-indigo-600 dark:text-indigo-400 font-medium">Spring Boot</span> and{" "}
              <span className="text-violet-600 dark:text-violet-400 font-medium">Angular</span>. I focus on designing
              scalable backends, performant frontends, and intuitive user experiences.
            </motion.p>

            <motion.p variants={fadeUpVariant} className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I enjoy leading projects end‑to‑end, collaborating with designers and product teams,
              and continuously improving systems through testing, refactoring, and automation.
            </motion.p>

            {/* Skills */}
            <motion.div variants={fadeUpVariant}>
              <h4 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={itemVariant}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-1.5 rounded-full text-sm font-medium glass-sm border border-indigo-200/50 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUpVariant} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-4 text-center hover:shadow-lg hover:shadow-indigo-300/30 dark:hover:shadow-indigo-900/30 transition-all duration-300 group border border-indigo-100/50 dark:border-indigo-500/10"
                >
                  <div className="text-indigo-500 dark:text-indigo-400 flex justify-center mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="font-black text-xl gradient-text font-heading">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <a href={cv} download>
                <Button icon={<Download size={16} />}>Download CV</Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;