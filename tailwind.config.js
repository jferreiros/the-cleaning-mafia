/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A90929', 
        primaryblue: '#ff4081',
        secondary: '#E4D4B2', 
        blacky: '#000'
      },
    },
  },
  plugins: [],
};
