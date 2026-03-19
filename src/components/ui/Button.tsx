import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  icon,
  fullWidth = false,
}) => {
  const base =
    "relative rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden select-none";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:from-indigo-600 hover:to-violet-700 hover:shadow-indigo-500/50",
    secondary:
      "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50",
    outline:
      "bg-transparent border-2 border-indigo-500/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50/60 dark:hover:bg-indigo-950/40 hover:border-indigo-500",
    ghost:
      "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5",
  };

  const disabledCls = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  const widthCls = fullWidth ? "w-full" : "";

  return (
    <motion.button
      type={type}
      className={`${base} ${sizes[size]} ${variants[variant]} ${disabledCls} ${widthCls} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.04 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;