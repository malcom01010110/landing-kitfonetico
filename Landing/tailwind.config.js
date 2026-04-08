
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: '#0D7377',
        accent: '#F59E0B',
        success: '#22C55E',
        danger: '#EF4444',
        cream: '#FFF9F0',
        lightTeal: '#E6F7F7',
        dark: '#1A1A2E',
        body: '#4A4A5A',
        gold: '#D4A017',
        warmGold: '#FFF8E7',
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
