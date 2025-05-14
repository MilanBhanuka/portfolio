import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpVariant, staggerContainer, itemVariant } from "../../utils/animations";
import { blogPosts } from "../../utils/data";

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
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
            Latest Articles
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My Blog
          </motion.h2>
          <motion.div
            variants={fadeUpVariant}
            className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Insights and tutorials on design and development
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.a
              key={post.id}
              href={post.url}
              variants={itemVariant}
              whileHover={{ y: -10 }}
              className="group block bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 bg-blue-600 text-white text-sm px-3 py-1">
                  {post.category}
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {post.date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;