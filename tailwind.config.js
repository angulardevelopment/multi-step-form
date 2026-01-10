/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html, js,ts,jsx,tsx,svelte,scss}", // Add .scss here
  ],
  theme: {
    extend: {},
  },
    plugins: {
    autoprefixer: {},
  },
}