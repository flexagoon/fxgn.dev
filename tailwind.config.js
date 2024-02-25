let plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        // https://github.com/system-fonts/modern-font-stacks
        'sans': [ '"Inter Variable"', 'Roboto', '"Helvetica Neue"', '"Arial Nova"', '"Nimbus Sans"', 'Arial', 'sans-serif' ],
        'mono': [ 'ui-monospace', '"Cascadia Code"', '"Source Code Pro"', 'Menlo', 'Consolas', '"DejaVu Sans Mono"', 'monospace' ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addBase, addUtilities, addVariant }) {
      addBase({
        '*': { minWidth: '0' }
      })
      addUtilities({
        '.text-display': {
          'font-variation-settings': '"opsz" 32'
        }
      })
      addVariant('mouse', '@media (pointer: fine)');
      addVariant('hover', '@media (hover: hover){&:hover}');
    })
  ],
}

