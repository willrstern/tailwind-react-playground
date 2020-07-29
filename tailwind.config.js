/*

  IMPORTANT NOTE!
  sadly, you'll have to restart your server when you make chages to this file :(
  you'll be SUPER frustrated when you forget to do this, FYI

*/

module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    fontFamily: {
      // these fonts are added via google fonts in public/index.html in the head
      // this gives us font-sans, font-header, font-mono classes
      sans: ["Inter", "sans-serif"],
      header: ["DM Sans", "sans-serif"],
      mono: ["IBM Plex Mono", "sans-serif"],
    },
    spacing: {
      // gives me m-sm, p-md, gap-lg, etc
      sm: "20px",
      md: "40px",
      lg: "60px",
      xl: "80px",
    },
    extend: {
      colors: {
        // text-primary, bg-primary, etc
        primary: "#4285F4",
        primaryHover: "#175aca",
        secondary: "rgba(11, 193, 150, 0.8)",
        light: "rgba(30, 99, 203, 0.1)",
      },

      gridTemplateColumns: {
        // this gives us grid-cols-main, sm:grid-cols-main, grid-cols-cards, etc classes
        main: "1fr 400px",
        cards: "1fr 2fr 1fr",
        "cards-sm": "2fr 1fr",
      },
    },
  },
  variants: {},
  plugins: [],
}
