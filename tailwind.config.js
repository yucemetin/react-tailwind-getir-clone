/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        sm: '4rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '10rem',
      },
    },
    extend: {
      spacing: {
        '0.1': '0.063rem'
      },
      backgroundImage: {
        "mobile-app-background": "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
      },
      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
      }
    },
  },
  plugins: [],
}