/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        // Brand palette: indigo / violet / cyan
        brand: {
          indigo: '#6366f1',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          'indigo-dark': '#4f46e5',
          'violet-dark': '#7c3aed',
          'cyan-dark': '#0891b2',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
        'brand-gradient-r': 'linear-gradient(to right, #6366f1, #8b5cf6)',
        'mesh-dark': `
          radial-gradient(at 27% 37%, hsl(245,70%,20%) 0px, transparent 50%),
          radial-gradient(at 97% 21%, hsl(260,60%,15%) 0px, transparent 50%),
          radial-gradient(at 52% 99%, hsl(190,80%,10%) 0px, transparent 50%)
        `,
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        shimmer: 'shimmer 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(99,102,241,0.5)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 15px rgba(99,102,241,0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(99,102,241,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow-indigo': '0 0 24px rgba(99,102,241,0.4)',
        'glow-violet': '0 0 24px rgba(139,92,246,0.4)',
        'glow-cyan': '0 0 24px rgba(6,182,212,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};