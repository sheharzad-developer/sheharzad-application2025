import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fff1e6",
          500: "#ff7000",
        },
        dark: {
          100: "#000000",
          200: "#0f1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
        },
        light: {
          400: "#858ead",
          500: "#7b8ec8",
          700: "#dce3f1",
          800: "#f4f6f8",
          850: "#fdfdfd",
          900: "#ffffff",
        },
        link: {
          100: "#1da1f2",
        },
      },
      screens: {
        xs: "420px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(232deg, rgba(23, 28, 35, 0.41) 0%, rgba(19, 22, 28, 0.7) 100%)",
      },
      boxShadow: {
        "light-100": "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.1)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.1)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.1)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;
