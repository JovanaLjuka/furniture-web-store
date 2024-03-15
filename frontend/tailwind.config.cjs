const colors = require('tailwindcss/colors');
const daisyui = require('daisyui')

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        tenor:'Tenor',
      }
    },
    colors:{
brown: {
        50: '#fdf8f6',
        100: '#f2e8e5',
        200: '#eaddd7',
        300: '#e0cec7',
        400: '#d2bab0',
        500: '#bfa094',
        600: '#a18072',
        700: '#977669',
        800: '#846358',
        900: '#43302b',
      },
      gray: {
        300: '#d1d5db',
        400: '#a1a1aa',
        500: '#6b7280',
        600: '#4b5563',
      },
      zinc: {
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
      stone: {
        100: '#f5f5f5',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
      },
    }
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui:{
    themes: [
      {
        mytheme:{
          "bg-color": "#f5f5f5",
        }
      }
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true
  }
};

