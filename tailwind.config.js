// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
       colors: {
      "light-green": "#E2F5ED",
      "reguler-green": "#01AC68",
      "dark-green": "#007044",
      "placeholder": "#D1D1D1",
      "background_color": "#EDF1F4",
    },
    fontFamily: {
      kurdish: ['Rabar_043', 'sans-serif'],
      arabic: ['AlQuran', 'serif'],

    },},
  },
  plugins: [],
}
