/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'prple-wave': "url('/public/images/prple-wave.jpg')",
      }
    },
  },
  plugins: [],
}
