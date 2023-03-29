/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lbeige: "#FFFFFF",
        blue: "#E26D5C",
        "dbeige": "#C9CBA3",
        ruby: "#723D46",
        grey: "#FFE1A8",
        "f-blue": "#E26D5C",
        "opaque-black": "rgba(0,0,0,0.35)",
        text: "#472D30",
        linkin: "#6da7e6",
        lruby: "#f08080",
        must: "#C9CBA3"
        
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #c9def4 7.21%, #f5ccd4 45.05%, #b8a4c9 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #EF6351 14.53%, #FFE3E0 117.73%)",
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
