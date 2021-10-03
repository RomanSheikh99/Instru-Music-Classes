// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                '96': '96%',
              }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }