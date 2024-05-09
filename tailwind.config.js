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
      fontFamily: { 
        "inter": ['Inter', 'sans-serif'] 
      },
      colors: {
        "terracotta": "#B85633",
        "morkgron": "#657F3E",
        "rod": "#E03545",
        "svart": "#1C1C1C",
        "morkbrun": "#674D41",
        "ljusgron": "#779E4B",
        "rosa": "#E6B2B0",
        "gra": "#DEDEDE",
        "ljusbrun": "#977C71",
        "gul": "#DF9F44",
        "bla": "#CEDBE7",
        "beigebrun": "#CABDB7",
        "vit": "#FAFAFA",
        "semi-transparent": "rgba(9, 9, 9, 0.22)",
      },
    },
  },
  plugins: [
    flowbitePlugin(),
    addDynamicIconSelectors()
  ],
}
