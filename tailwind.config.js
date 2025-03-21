/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Adding extra-small breakpoint at 480px
      },
    },
  },
  plugins: [],
}
