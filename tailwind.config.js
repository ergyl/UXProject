import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  darkMode: false,
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 24 row grid
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridRow: {
        // Allowing us to have more than span-10 (or 12? default limit in TailwindCSS...)
        'span-17': 'span 17 / span 17',
      },
      colors: {
        "silver-white": "#eeecec",
        "mud-brown": "#4e4034",
        "grass-green": "#9b9551",
        "hot-red": "#c2595d",
        "salmon-pink": "#dba6a7",
        "blackest-black": "#000000"
      },
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
}
