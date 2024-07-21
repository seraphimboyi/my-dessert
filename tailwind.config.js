/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
      },
      writingMode:{
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
        'horizontal-tb': 'horizontal-tb',
        'sideways-rl': 'sideways-rl',
        'sideways-lr': 'sideways-lr',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.writing-mode-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.writing-mode-vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
        '.writing-mode-horizontal-tb': {
          'writing-mode': 'horizontal-tb',
        },
        '.writing-mode-sideways-rl': {
          'writing-mode': 'sideways-rl',
        },
        '.writing-mode-sideways-lr': {
          'writing-mode': 'sideways-lr',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};