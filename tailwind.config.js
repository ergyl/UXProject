import flowbitePlugin from 'flowbite/plugin';
import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridRow: {
        'span-18': 'span 18 / span 18',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25'
      },
      colors: {
        "silver-white": "#eeecec",
        "sand-beige": "#dbc9b8",
        "mud-brown": "#4e4034",
        "grass-green": "#9b9551",
        "hot-red": "#c2595d",
        "salmon-pink": "#dba6a7",
        "blackest-black": "#000000"
      },
    },
  },
  plugins: [
    flowbitePlugin(),
    addDynamicIconSelectors()
  ],
}
