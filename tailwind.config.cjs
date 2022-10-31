/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      inventorytheme: {
        "primary": "#1B2850",
        "secondary": "#FF9F43",
        "accent": "#FAFBFE",
        "neutral": "#3D4451",
        "base-100": "#FFFFFF",

      },
    }, ],
  },

  plugins: [require("daisyui")],
}