/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./blocks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          active: "var(--accent-active)",
        },
        neutral: {
          darkest: "var(--color-neutral-darkest)",
          dark: "var(--color-neutral-dark)",
          medium: "var(--color-neutral-medium)",
          light: "var(--color-neutral-light)",
          lighter: "var(--color-neutral-lighter)",
        },
        "card-background": "var(--card-background)",
        "card-border": "var(--card-border)",
      },
    },
  },
  plugins: [],
};
