// const { plugin } = require('twrnc');

module.exports = {
  content: ['./**/*.{ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
      colors: {
        primary: {
          500: '#FF8234',
        },
      },
    },
  },
};
