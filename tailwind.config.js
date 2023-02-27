/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lbeige: "#EEE2D2",
        blue: "#BAB2B5",
        "d-beige": "#EDC7B7",
        ruby: "#AC3B61",
        grey: "#ededed",
        "f-blue": "#123C69",
        "opaque-black": "rgba(0,0,0,0.35)",
        text: "#123C69"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #c9def4 7.21%, #f5ccd4 45.05%, #b8a4c9 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #c9def4 14.53%, #f5ccd4 69.36%, #b8a4c9 117.73%)",
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
