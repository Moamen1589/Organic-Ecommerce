/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'main': '#6BB252',
      },
      screens: {
        'max-sm': { max: '639px' }, 
        'max-md': { max: '900px' },
        'max-lg': { max: '1023px' }, 
        'max-xl': { max: '1279px' }, 
      },
    },
  },
  plugins: [],
}

