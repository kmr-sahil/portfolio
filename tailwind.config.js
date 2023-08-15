/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'over': ['Overpass', 'sans-serif']
      },
      colors: {
        'l-primary': '#F9F5F6',
        'l-secondary': '#E7E4E5',
        'l-text' : '#18181B',

        'd-primary': '#18181B',
        'd-secondary': '#303036',
        'd-text': '#E4E4E7',
      }
    },
    screens: {
      'tablet': '425px',
      
      'tablet-lg': '580px',

      'laptop': '768px',
      
      'desktop': '1024px',
      
    },
  },
  plugins: [],
}

