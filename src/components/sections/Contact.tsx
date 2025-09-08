import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer } from "../../utils/animations";
import Button from "../ui/Button";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "vgmbhanuka@gmail.com",
      link: "mailto:vgmbhanuka@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: "+94 71 6720 864",
      link: "tel:+94716720864",
    },
    // {
    //   icon: <MapPin size={24} />,
    //   title: "Location",
    //   content: "San Francisco, CA",
    //   link: "https://maps.google.com",
    // },
  ];

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs
    .sendForm(
      "service_m939fn3",    // Replace with your EmailJS service ID
      "template_1eg4pdo",   // Replace with your EmailJS template ID
      formRef.current!,
      "ei0iwVLeUBTShd-C_"        // Replace with your EmailJS user/public key
    )
    .then(
      (result) => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        formRef.current?.reset();
        setTimeout(() => setIsSubmitted(false), 3000);
      },
      (error) => {
        setIsSubmitting(false);
        alert("Failed to send message. Please try again.");
      }
    );
};

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
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
          <motion.p
            variants={fadeUpVariant}
            className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Contact Me
          </motion.h2>
          <motion.div
            variants={fadeUpVariant}
            className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Have a project in mind? Let's work together!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-5"
          >
            <motion.h3
              variants={fadeUpVariant}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Let's discuss your project
            </motion.h3>
            <motion.p
              variants={fadeUpVariant}
              className="text-gray-600 dark:text-gray-400 mb-8"
            >
              Whether you're looking to collaborate on a project, have a question, or just want to connect, I'd love to hear from you.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <a
                      href={item.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.content}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-10"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                    <Check size={30} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Thank you for your message. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    icon={isSubmitting ? null : <Send size={16} />}
                    fullWidth
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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