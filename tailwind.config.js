/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edf2fc',
          100: '#d1dff8',
          200: '#b5cdf4',
          300: '#99bbf0',
          400: '#7da9ec',
          500: '#6197e8',
          600: '#4584e4',
          700: '#2972e0',
          800: '#1a5cc9',
          900: '#1a365d',
        },
        secondary: {
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#0dafaf',
          600: '#0d9488',
          700: '#0a7c7c',
          800: '#066666',
          900: '#044444',
        },
        accent: {
          50: '#fff5f0',
          100: '#ffeadb',
          200: '#ffd5b8',
          300: '#ffc195',
          400: '#ffac71',
          500: '#ff984e',
          600: '#ff832b',
          700: '#ff6f08',
          800: '#e05d00',
          900: '#b84c00',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          500: '#eab308',
          900: '#713f12',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};