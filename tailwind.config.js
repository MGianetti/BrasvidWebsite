/* eslint-disable unicorn/prefer-module */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        '3xl': '3px 3px 3px rgba(0, 0, 0, 0.8)',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        primary: {
          DEFAULT: 'var(--clr-primary)',
          light: 'var(--clr-primary-light)',
          dark: 'var(--clr-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--clr-secondary)',
          light: 'var(--clr-secondary-light)',
          dark: 'var(--clr-secondary-dark)',
        },
        accent: {
          DEFAULT: 'var(--clr-accent)',
        },
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        6: '6px',
      },
    },
  },
  variants: {
    extend: {
      extend: {
        backgroundOpacity: ['hover'],
      },
    },
  },
  plugins: [],
}
