/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss,css}"],
  theme: {
    extend: {
      colors: {
                        customBlue: '#0F4350',
                        customGreen: '#2EB270',
                        customBlueHover: '#1B5B69',
                        customGreenHover: '#47e797',
                     },
      screens: {
        mid: '1358px'
      },
    },

  },
  plugins: [],
};
