/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1112px",
    },
    container: {
      center: true,
    },
    colors: {
      Cyan: "hsl(180, 66%, 49%)",
      Dark_Violet: "hsl(257, 27%, 26%)",
      Red: "hsl(0, 87%, 67%)",
      Gray: "hsl(0, 0%, 75%)",
      Grayish_Violet: "hsl(257, 7%, 63%)",
      Very_Dark_Blue: "hsl(255, 11%, 22%)",
      Very_Dark_Violet: "hsl(260, 8%, 14%)",
      white: "hsl(0, 0%, 100%)",
      bgFeatures: "hsl(230, 25%, 95%)",
    },
    fontFamily: {
      poppins: [`"Poppins", sans-serif`],
    },
    extend: {},
  },
  plugins: [],
}
