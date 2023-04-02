/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: 'Helvetica',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '70%',
      '16': '4rem',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    colors: {
      blue:{
        DEFAULT: '#0468B6'
      },
      black:{
        DEFAULT: '#000000',
        100: '#191919'
      },
      grey:{
        DEFAULT: '#8D8C8B',
        100: '#F5F5F5'
      },
      white:{
        DEFAULT: '#FFFFFF',
      }
    },
    extend: {
      boxShadow: {
        primary: '0px 18px 36px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'car': "url('/src/assets/img/car.jpg')",
        'car2': "url('/src/assets/img/car2.jpg')",
        'banner': "url('/src/assets/img/banner.jpg')", 
        'building': "url('/src/assets/img/building.jpg')",
      }
    },
  },
  plugins: [],
}
