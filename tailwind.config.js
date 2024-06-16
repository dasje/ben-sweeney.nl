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
        bsHeaderColorOne: "rgba(15,76,92,0.9)",
        bsHeaderColorTwo: "rgba(16,59,92,0.9)",
        bsHeaderColorThree: "rgba(92,31,15,0.9)",
        bsHeaderColorFour: "rgba(37,92,15,0.9)",
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
