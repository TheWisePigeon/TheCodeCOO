/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        "pigeon-blue":"#5C90C1",
        "pigeon-grey":"#95989A",
        "pigeon-green":"#6D9A78",
        "pigeon-orange":"#F9A602",
        "pigeon-purple":"#9B6CCE",
      }
    }
  },
  plugins: []
};