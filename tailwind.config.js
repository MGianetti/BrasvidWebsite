/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        primary: {
          DEFAULT: 'var(--clr-primary)',
          light: 'var(--clr-primary-light)',
          dimmed: 'var(--clr-primary-dimmed)',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/shape-hero-section.svg')",
        'hb-icon': "url('/hambuguer.svg')",
      },
      zIndex: {
        '-1': '-1',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      scale: {
        65: '0.65',
        35: '0.35',
      },
      height: {
        hero: '33rem',
        'hero-mobile': '30rem',
      },
    },
    variants: {
      extend: {
        backgroundOpacity: ['hover'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
