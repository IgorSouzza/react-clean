module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/presentation/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Roboto', '-apple-system', 'BlinkMacSystemFont'],
        body: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
