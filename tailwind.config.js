/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Tan-Nimbus': ['TAN-NIMBUS'],
        'EFCO': ['EFCO'],
        'natsu-regular': ['NATSU-REGULAR'],
        'beachy-regular': ['BEACHY-REGULAR']
      }
    },
  },
  plugins: [],
}

