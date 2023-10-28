/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'JetBrains Mono Variable', sans-serif",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        show: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        blink: "blink 1000ms infinite",
        show: "show",
      },
    },
  },
  plugins: [],
};
