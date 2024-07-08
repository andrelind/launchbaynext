import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        xwing: ['xwing-miniatures'],
        ships: ['x-wing-ships'],
      },
      colors: {
        dark: '#0E1218',
        lbnred: '#FF3069',
        lbn: {
          DEFAULT: '#FF3069',
          50: '#FFFFFF',
          100: '#FFFCFD',
          200: '#FFC9D8',
          300: '#FF96B3',
          400: '#FF638E',
          500: '#FF3069',
          600: '#FC0045',
          700: '#C90037',
          800: '#960029',
          900: '#63001B',
        },
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
