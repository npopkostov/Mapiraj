/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      animation: {
        "scale-up": "scale-up 0.1s cubic-bezier(0,0,0,0) forwards",
        "pulse-custom": "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite", // Custom pulse animation
      },
      keyframes: {
        "scale-up": {
          "0%": { transform: "scale(0.5)", opacity: "0%" },
          "100%": { transform: "scale(1)", opacity: "100%" },
        },
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
      },
    },
  },
  plugins: [],
};
