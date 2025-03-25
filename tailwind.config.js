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
        primary3: "#D6B1FF"
      },
      spacing: {
        18: "72px",
      },
      fontSize: {
        h1: ["72px", "98px"],
        lead1: ["18px","32px"]
      }
    }
  },
  plugins: [],
}

