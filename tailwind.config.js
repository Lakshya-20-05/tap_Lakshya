/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './index.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          900: '#0A0A0A',
          800: '#111111',
          700: '#171717',
          600: '#222222',
        },
        paper: {
          DEFAULT: '#FAFAF8',
          100: '#FAFAF8',
          200: '#F2F2EF',
          300: '#E7E7E3',
        },
        ember: {
          DEFAULT: '#F97316',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
        },
      },
    },
  },
  plugins: [],
};
