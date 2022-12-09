/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      xsm: "860px",
      sm: "1249px",
      // => @media (min-width: 640px) { ... }

      md: "1250px",
      // => @media (min-width: 768px) { ... }

      lg: "1500px",
      // => @media (min-width: 1024px) { ... }

      xl: "1800px"
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      keyframes: {
        contAnim: {
          "0%": { contrast: "0%" },
          "100%": { contrast: "100%" }
        }
      },
      animation: {
        contrastAnim: "contAnim 2s linear"
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      grass: "#7AC74C",
      electric: "#F7D02C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dark: "#705746",
      dragon: "#6F35FC",
      steel: "#B7B7CE",
      fairy: "#D685AD",
      menu: "#cccaba",
      typeButton: "#000000",
      hp: "#FF0000",
      attack: "#F08030",
      "special-attack": "#6890F0",
      defense: "#F8D030",
      "special-defense": "#78C850",
      speed: "#F85888",
      select: "#A1CEFF"
    }
  },
  plugins: [],
  variants: { extend: { margin: ["first", "last"] } }
}
