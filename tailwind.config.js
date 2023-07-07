/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lbeige: "#f6f6f9", /* background */
        green: "#6dA274", /* green */
        "dbeige": "#c9afab",/*  navbar */
        ruby: "#000000",
        grey: "#FDB645", /* slightly lighter orange DELETE*/
        "f-blue": "#FCA311",/* orange DELETE */ 
        "opaque-black": "rgba(0,0,0,0.35)",
        text: "#0f0e16", /* text color */
        linkin: "#00b4d8",/* twitter blue */
        lruby: "#c7c4d9", /*blue */
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
