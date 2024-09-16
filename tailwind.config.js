/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
      fontSize: {
        xss: '0.625rem',
      },
      colors: {
        honeydew: '#F1FAEE',
        cerulean: '#457B9D',
        lightCerulean: '#A8DADC',
        darkCerulean: '#2f5973',
        berkeleyBlue: '#1D3557',
      },
    },
  },
  plugins: [],
}
