/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Pastel cute colors
        primary: {
          DEFAULT: '#FF9ECD',
          50: '#FFF5FA',
          100: '#FFE8F3',
          200: '#FFCFE5',
          300: '#FFB5D7',
          400: '#FF9ECD',
          500: '#FF87C3',
          600: '#FF6BB5',
          700: '#FF4FA7',
          800: '#FF3399',
          900: '#E6007A',
        },
        secondary: {
          DEFAULT: '#A8E6CF',
          50: '#F0FDF7',
          100: '#E0FCF0',
          200: '#C1F9E1',
          300: '#A8E6CF',
          400: '#8FD3BD',
          500: '#76C0AB',
          600: '#5DAD99',
          700: '#449A87',
          800: '#2B8775',
          900: '#127463',
        },
        accent: {
          DEFAULT: '#FFD3B6',
          light: '#FFEBD9',
          dark: '#FFBB9D',
        },
        cute: {
          pink: '#FFB3D9',
          lavender: '#E0BBE4',
          mint: '#B4E7CE',
          peach: '#FFDAB9',
          sky: '#B4D7FF',
          lemon: '#FFF9B0',
        },
        kawaii: {
          100: '#FFF9F0',
          200: '#FFF0E6',
          300: '#FFE6DC',
          400: '#FFDCD2',
          500: '#FFD2C8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'heart-beat': 'heartBeat 1.5s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.05)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 158, 205, 0.4)',
        'glow-lg': '0 0 40px rgba(255, 158, 205, 0.5)',
        'cute': '0 4px 20px rgba(255, 182, 217, 0.3)',
        'kawaii': '0 8px 30px rgba(255, 211, 182, 0.4)',
        'soft': '0 2px 15px rgba(168, 230, 207, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}