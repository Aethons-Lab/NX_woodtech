/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#8b5e3c",
        gold: "#c68a3a",
        olive: "#7ab027",
        yellow: "#dfdf12",
        cocoa: "#2a1d14",
        bone: "#f6f1ea",
        paper: "#ede5d8",
        muted: "#6b5847",
      },
      fontFamily: {
        serif: ['"Libre Caslon Text"', "Georgia", "serif"],
        sans: ['"Work Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      spacing: {
        128: "32rem",
      },
      maxWidth: {
        container: "1340px",
      },
    },
  },
  plugins: [],
};
