import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-2 rounded-full text-gray-700 dark:text-gray-200"
      onClick={toggleTheme}
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === "dark" ? 180 : 0,
            opacity: theme === "dark" ? 0 : 1 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Sun size={24} />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === "light" ? -180 : 0,
            opacity: theme === "light" ? 0 : 1 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Moon size={24} />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;