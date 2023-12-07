/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,css}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#16a34a',
        dark: '#0f172a',
      },
      screenshot: {
        '2xl':'1320px'
      },
    },
  },
  plugins: [],
};

