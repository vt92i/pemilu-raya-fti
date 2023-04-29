/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#477167",

          "secondary": "#ac6c56",

          "accent": "#708573",

          "neutral": "#c37f57",

          "base-100": "#3b4b3f",

          "info": "#994b35",

          "success": "#d2bb9c",

          "warning": "#7ea297",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
