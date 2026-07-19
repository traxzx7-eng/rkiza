import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-tajawal)', 'sans-serif'],
        plex: ['var(--font-ibm-plex)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#275A53', // Brand Dark Teal
          950: '#042f2e',
        },
        accent: {
          400: '#d9b261',
          500: '#C5A059', // Brand Gold
          600: '#b48d42',
        },
        charcoal: {
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
        },
        ivory: '#FDFBF7',
      },
    },
  },
  plugins: [],
};
export default config;
