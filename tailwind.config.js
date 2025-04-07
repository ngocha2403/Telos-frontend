/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF12D0",
        primary2: "#8C30F5",
        primary3: "#D6B1FF",
        primary4: "#18191F",
        transparentBlack: "00000050",
        brandcolor: "#D5FAFC",
        labelcolor: "#2EC5CE",
        textcolor: "#18191F",
      },
      spacing: {
        18: "72px",
        7.5: "30px",
      },
      fontFamily: {
        'nanum-pen': ['"Nanum Pen Script"', 'cursive'],
      },
      fontSize: {
        h1: ["72px", "98px"],
        h2: ["48px", "64px"],
        h5: ["24px", "32px"],
        lead1: ["18px","32px"]
      }
    }
  },
  plugins: [],
}

