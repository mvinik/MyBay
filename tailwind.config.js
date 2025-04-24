/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: {
      colors: {
       greenn:"#77B254",
       purple:'#58167a',
       
      },
    },
  },
  plugins: [],
}