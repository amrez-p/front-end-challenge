module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        ImgOne: "url(../../public/images/imgOne.jpg)",
        ImgTwo: "url(../../public/images/imgTwo.jpg)",
        ImgThree: "url(../../public/images/imgThree.jpg)",
        ImgFour: "url(../../public/images/imgFour.jpg)",
        ImgFive: "url(../../public/images/imgFive.jpg)",
      },
      fontFamily: {
        spartan: ["Spartan", "san-serif"],
      },
      fontWeight: {
        normalBold: 500,
      },
      fontSize: {
        md: "14px",
      },
      height: {
        500: "500px",
        800: "800px",
      },
      width: {
        500: "500px",
        800: "800px",
      },
      inset: {
        25: "25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
