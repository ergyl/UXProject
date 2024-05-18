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
      backgroundOpacity: {
        '45': '0.45'
      },
      gridTemplateRows: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridRow: {
        'span-16': 'span 16 / span 16',
        'span-18': 'span 18 / span 16',
        'span-20': 'span 20 / span 20',
        'span-22': 'span 22/ span 22',
        'span-24': 'span 24 / span 24'
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
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      },
      colors: {
        "ljusTerracotta": "#D26C48",
        "terracotta": "#B85633",
        "morkTerracotta": "#A6401C",
        "svart": "#1C1C1C",
        "morkbrun": "#674D41",
        "morkgron": "#657F3E",
        "rod": "#E03545",
        "gra": "#DEDEDE",
        "ljusbrun": "#977C71",
        "ljusgron": "#779E4B",
        "rosa": "#E6B2B0",
        "vit": "#FAFAFA",
        "beige": "#CABDB7",
        "beigebrun": "#B09C93",
        "gul": "#DF9F44",
        "bla": "#CEDBE7",
        "semi-transparent": "rgba(9, 9, 9, 0.22)",
      },
    },
  },
  plugins: [
    flowbitePlugin(),
    addDynamicIconSelectors()
  ],
}
