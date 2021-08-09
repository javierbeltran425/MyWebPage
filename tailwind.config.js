module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      zIndex: {
        '-10': '-10',
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  }
}