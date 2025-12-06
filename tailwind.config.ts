import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#CB1829",
          black: "#000000",
          white: "#FFFFFF",
          gray: "#121212",
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        heading: ['var(--font-oswald)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;