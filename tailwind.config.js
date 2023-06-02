/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lbeige: "#000000", /* black */
        blue: "#FCA311", /* orange */
        "dbeige": "#14213D",/*  blue */
        ruby: "#000000",
        grey: "#FDB645", /* slightly lighter orange */
        "f-blue": "#FCA311",/* orange */
        "opaque-black": "rgba(0,0,0,0.35)",
        text: "#E5E5E5", /* text color */
        linkin: "#00b4d8",/* twitter blue */
        lruby: "#023e8a", /*blue */
        must:  "#0077b6"/* lighter blue */
        
      },
      backgroundImage: (theme) => ({
        "gradient-rainblue":
          "linear-gradient(90deg, #233A6C 14.53%, #233A6C 117.73%)",
      }),
      fontFamily: {
        playfair: ["monospace", "raleway"],
        opensans: ["monospace", "sans-serif"],
      },
      content: {
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
