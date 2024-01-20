/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      primary: 'Kurale',
      secondary: 'Open Sans',
    },
    colors: {
      black: '#000000',
      jet: '#333333',
      dim: '#666666',
      french: '#BDC3C7',
    },
    extend: {
      backgroundImage: {
        home: 'url("/home.jpg")',
      },
    },
  },
  plugins: [],
};
