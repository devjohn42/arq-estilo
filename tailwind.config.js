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
        about: 'url("/about.jpg")',
        service1: 'url("/service1.jpg")',
        service2: 'url("/service2.jpg")',
        service3: 'url("/service3.jpg")',
        service4: 'url("/service4.jpg")',
        project1: 'url("/project1.jpg")',
        project2: 'url("/project2.jpg")',
        project3: 'url("/project3.jpg")',
        project4: 'url("/project4.jpg")',
        project5: 'url("/project5.jpg")',
        project6: 'url("/project6.jpg")',
      },
    },
  },
  plugins: [],
};
