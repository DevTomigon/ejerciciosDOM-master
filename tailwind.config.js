/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
      colors: {
        primary: '#FF5733',
        secondary: '#3498DB',
        success: '#27AE60',
        danger: '#E74C3C',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};