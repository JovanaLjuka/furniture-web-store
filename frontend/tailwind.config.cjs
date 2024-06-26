const colors = require('tailwindcss/colors');
const daisyui = require('daisyui');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    colors: {
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
      grey: {
        300: '#d1d5db',
        400: '#a1a1aa',
        500: '#6b7280',
        600: '#4b5563',
      },
      zinc: {
        300: '#d4d4d8',
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
      rose: {
        300: '#fda4af',
        400: '#fb7185',
      },
      white: {
        50: '#fafaf9',
        100: '#f5f5f4',
      },
      lavander: {
        100: '#D9B8C4',
        200: '#957186',
        300: '#703D57',
        400: '#402A2C',
      },
      khaki: {
        50: '#D9CDC7',
        100: '#B2A198',
        200: '6f5e53',
      },
      taupe: {
        50: '#4C443C',
      },
      blue: {
        50: '#7C98B3',
        100: '#809bd3',
      },
    },
  },

  extend: {
    fontFamily: {
      ojuju: ['Ojuju', 'sans - serif'],
      tenor: ['Tenor Sans', 'sans - serif'],
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [],
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
  },
};
