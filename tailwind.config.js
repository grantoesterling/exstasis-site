// tailwind.config.js
const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`
}

const textColor = {
  primary: generateColorClass('text-primary'),
  secondary: generateColorClass('text-secondary'),
  tertiary: generateColorClass('text-tertiary'),
}

const backgroundColor = {
  primary: generateColorClass('bg-primary'),
  secondary: generateColorClass('bg-secondary'),
  tertiary: generateColorClass('bg-tertiary'),
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      millimitre: ['Millimetre', 'sans-serif'],
      ogaki: ['Ogaki', 'sans-serif'],
      sombrablack: ['SombraBlack', 'sans-serif'],
      caslon: ['Caslon', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
      shwarzkopf: ['schwarzkopf-new', 'serif'],
      shwarzkopfOld: ['schwarzkopf-old', 'serif'],
    },

    extend: {
      textColor,
      backgroundColor,
      colors: {
        'back-brown': '#523b35',
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '40px',
        '2xl': '48px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
