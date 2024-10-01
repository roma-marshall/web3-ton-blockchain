/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'brand': '0 4px 24px rgba(0, 0, 0, 0.16)'
      },
      scale: {
        'brand': '1.02'
      }
    },
  },
  plugins: [],
}