// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                'logo-img': '4.6rem',
            },
            fontFamily: {
              'poppins': 'Poppins',
            }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }