/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./public/**/*.{html,js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/public/img/hero.jpg')",
      },
    },
  },
  plugins: [],
}

