/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    screens: {
      sm: '320px', // Small screen
      md: '481px', // iPads, Tablets
      lg: '769px', // small screen and laptops
      xl: '1025px', // Desktops, large screens
      xxl: '1201px' // Extra Large screen
    },
    extend: {
      spacing: {
        '65': '6.5rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
}