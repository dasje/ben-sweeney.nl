/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      borderRadius: {
        "i-border": "-9999px",
      },
      colors: {
        firstcolor: "#5f0f40",
        secondcolor: "#9a031e",
        thirdcolor: "#fb8b24",
        fourthcolor: "#e36414",
        fifthcolor: "#0f4c5c",
        sixthcolor: "#e0e0de",
        bsCardBackgroundColor: "rgba(15,76,92,0.9)",
        bsCardChildrenBackgroundColor: "rgba(255, 255, 255, 0.50)",
        bsButtonHoverColor: "rgb(22,108,130, 0.8)",
        darkBlue: "rgba(0, 95, 115, 1)",
        midBlue: "rgba(10, 147, 150, 1)",
        paleBlue: "rgba(148, 210, 189, 1)",
        beige: "rgba(233, 216, 166, 1)",
        lightOrange: "rgba(238, 155, 0, 1)",
        midOrange: "rgba(202, 103, 2, 1)",
        darkOrange: "rgba(187, 62, 3, 1)",
        teracotta: "rgba(174, 32, 18, 1)",
        darkTeracotta: "rgba(155, 34, 38, 1)",
        bgBackgroundColorOne: "rgba(24, 78, 119, 0.9)",
        bgBackgroundColorTwo: "rgba(30, 96, 145, 0.9)",
        bgBackgroundColorThree: "rgba(26, 117, 159, 0.9)",
        bgBackgroundColorFour: "rgba(22, 138, 173, 0.9)",
        bgBackgroundColorFive: "rgba(52, 160, 164, 0.9)",
        bgBackgroundColorSix: "rgba(82, 182, 154, 0.9)",
        bgBackgroundColorSeven: "rgba(118, 200, 147, 0.9)",
        bgBackgroundColorEight: "rgba(153, 217, 140, 0.9)",
        bgBackgroundColorNine: "rgba(181, 228, 140, 0.9)",
        bgBackgroundColorTen: "rgba(217, 237, 146, 0.9)",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
