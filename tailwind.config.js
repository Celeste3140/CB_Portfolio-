/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lbeige: "#FAF9F6",
        blue: "#03045e", /* dark blue */
        "dbeige": "#0077b6",/* lighter blue */
        ruby: "#000000",
        grey: "#0077b6",
        "f-blue": "#03045e",/* dark blue */
        "opaque-black": "rgba(0,0,0,0.35)",
        text: "#000000",
        linkin: "#00b4d8",/* twitter blue */
        lruby: "#023e8a", /*blue */
        must:  "#0077b6"/* lighter blue */
        
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #c9def4 7.21%, #f5ccd4 45.05%, #b8a4c9 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #0096c7 14.53%, #000000 117.73%)",
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
