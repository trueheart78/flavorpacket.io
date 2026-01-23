module.exports = {
  content: ['./**/*.html'],
  theme: {
    fontFamily: {},
    extend: {},
  },
  variants: {
    extend: {},
    variants: {
      animation: ['motion-safe'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
