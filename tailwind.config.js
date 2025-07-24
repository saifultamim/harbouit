/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px 0px #00000040",
      },
      backgroundImage: {
        "course-gradient": "linear-gradient(to top, #0088CF, #1C2A39 )",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        richBlue: "#0088CF",
        oceanBlue: "#0F75BC",
        rainbow: "#262262",
        navyBlue: "#06005D",
        lightSilver: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
