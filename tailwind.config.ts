import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      "primary-color": "#6D6CE3",
    },
    fontFamily: {
      body: ["Ubuntu"],
    },
    colors: {
      "bubble-gum": "#ff77e9",
      "primary-color": "#6D6CE3",
      "text-color": "#0C273C",
      "second-color": "#2E3E5C",
      "gray-color": "#282C4B",
      "background-color": "#F7F8F9",
      "blue-color-300": "#0C0F93",
      "dark-blue": "#170F49",
      "black-color-300": "#0C0F9308",
      "dark-blue-300": "#0C273C",
      "gray-300": "#F7F7F9",
      "orange-300": "#FFB648",
      white: "#FFFFFF",
    },
  },

  plugins: [],
};
export default config;
