import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "../../utils/animations";
import Button from "../ui/Button";
import { Mail, Phone, Send, Check, Sparkles } from "lucide-react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "vgmbhanuka@gmail.com",
      link: "mailto:vgmbhanuka@gmail.com",
      gradient: "from-indigo-500 to-violet-600",
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      content: "+94 71 6720 864",
      link: "tel:+94716720864",
      gradient: "from-violet-500 to-cyan-500",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_m939fn3",
        "template_1eg4pdo",
        formRef.current!,
        "ei0iwVLeUBTShd-C_"
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          formRef.current?.reset();
          setTimeout(() => setIsSubmitted(false), 4000);
        },
        () => {
          setIsSubmitting(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl glass-sm border border-gray-200/60 dark:border-white/10 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200 text-sm";

  return (
    <section id="contact" className="py-24 bg-gray-50/80 dark:bg-[#0b0c14] relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-10 w-96 h-96 bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-violet-100/50 dark:bg-violet-900/10 rounded-full blur-3xl" />
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
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 font-heading">
            Contact Me
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="section-divider" />
          <motion.p variants={fadeUpVariant} className="text-gray-500 dark:text-gray-400 mt-4">
            Have a project in mind? Let's work together!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left info panel */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={fadeUpVariant}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-heading mb-2">
                Let's discuss your{" "}
                <span className="gradient-text">project</span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Whether you're looking to collaborate, have a question, or just want to connect — I'd love to hear from you.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  variants={fadeUpVariant}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 glass border border-white/50 dark:border-white/5 rounded-2xl shadow-card hover:shadow-glow-indigo transition-all duration-300 group"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-glow-indigo group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {item.title}
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative card */}
            <motion.div
              variants={fadeUpVariant}
              className="p-5 rounded-2xl gradient-bg text-white relative overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/10 rounded-full" />
              <Sparkles size={22} className="mb-3 relative z-10" />
              <p className="text-sm font-semibold relative z-10">Currently open to</p>
              <p className="text-xs text-white/80 mt-1 relative z-10">
                Full-time roles, freelance projects & exciting collaborations
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <div className="glass border border-white/50 dark:border-white/5 rounded-3xl shadow-card p-7 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white shadow-glow-indigo">
                    <Check size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-heading">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center text-sm max-w-xs">
                    Thank you! I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
                        Name
                      </label>
                      <input type="text" id="name" name="name" required placeholder="Milan Bhanuka" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <input type="email" id="email" name="email" required placeholder="you@example.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" required placeholder="Project Inquiry" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project..."
                      className={inputClass}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    icon={isSubmitting ? null : <Send size={16} />}
                    fullWidth
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                        />
                        Sending…
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;