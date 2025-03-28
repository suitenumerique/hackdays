import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
  'beige-100': '#F7F5F1',
  'beige-200': '#E4DACD',
  'beige-300': '#CFCCC2',
  'green-300': '#959F9C',
  'green-500': '#596661',
  'green-700': '#31423D',
  'green-800': '#26312D',
  'orange-100': '#F3E8E1',
  'orange-500': '#E0785F',
  'orange-600': '#BC5A3F',
  'orange-800': '#4B291C',
}

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
