/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-beige": "#E8E1D4",
        "red-wine": "#460013",
      },
      fontFamily: {
        gopherBold: ["gopherBold"],
        gopherRegular: ["gopherRegular"],
        hnLight: ["hnLight"],
        hnRoman: ["hnRoman"],
      },
    },
  },
  plugins: [],
};
