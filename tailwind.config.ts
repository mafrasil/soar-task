import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--base)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        input: "var(--input)",
        button: "var(--button)",
        border: "var(--border)",
        primary: "var(--primary)",
        "primary-blue": "var(--primary-blue)",
        "sidebar-text": "var(--sidebar-text)",
        "sidebar-active": "var(--sidebar-active)",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
