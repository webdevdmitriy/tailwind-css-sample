/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./**/*.html`], //в каких файла будет работать
  darkMode: 'selector', // тема сайта, переключается изменением класса
  theme: {
    extend: {
      // Создание собственных значений
      colors: {
        mainColor: '#050C2A',
      },
      padding: {
        big: '50px',
      },
      screens: {
        // брейк пойнты для адаптива
        sm: '480px',
        md: '760px',
        lg: '1028px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}
