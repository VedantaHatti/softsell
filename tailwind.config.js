/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // only if you're using App Router
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#6366f1',
          800: '#4f46e5',
        },
        secondary: {
          600: '#ec4899',
        },
        accent: {
          400: '#f472b6',
        },
      },
    },
  },
  plugins: [],
};
