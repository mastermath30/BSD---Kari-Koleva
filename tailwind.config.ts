import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        canvas: "#f7f6f3",
        ink: "#1c1b19",
        muted: "#5c5a56",
        sage: {
          DEFAULT: "#5a6355",
          deep: "#3d4439",
          footer: "#4a5245",
        },
        /** Soft band behind page titles (portfolio / about / contact). */
        titleBand: "#e8eae5",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        copy: "40rem",
      },
    },
  },
  plugins: [],
};

export default config;
