/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkmode:"class",
  theme: {
    extend: {
      colors:{
        darkNight:"#010100",
        night:"#18181B",
        grayNight:"#252528",
        white:"#fff"
      }
    },
  },
  plugins: [require("daisyui")],
}
