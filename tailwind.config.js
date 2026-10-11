module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: "#F7F4EF",
          100: "#EEE8DE",
          200: "#DED6C9",
          300: "#C6BBAE",
          400: "#958B7F",
          500: "#746B60",
          600: "#5B534A",
          700: "#423B34",
          800: "#2B2621",
          900: "#171412",
          950: "#0D0B09",
        },
        espresso: {
          DEFAULT: "#302A24",
          dark: "#211C18",
          light: "#56483A",
        },
        sand: {
          DEFAULT: "#F2E8D5",
          card: "#FAF6ED",
        },
        brass: {
          DEFAULT: "#806435",
          light: "#D9BE82",
        },
      },
    },
  },
  plugins: [],
}
