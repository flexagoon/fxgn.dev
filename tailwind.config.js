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
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'black',
            '--tw-prose-headings': 'black',
            '--tw-prose-lead': 'black',
            '--tw-prose-links': 'black',
            '--tw-prose-bold': 'black',
            '--tw-prose-quotes': 'black',
            '--tw-prose-quote-borders': 'black',
            '--tw-prose-captions': 'black',
            '--tw-prose-code': 'black',
            '--tw-prose-pre-code': 'black',
          }
        }
      }
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

