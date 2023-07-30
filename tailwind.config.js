/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navbarBg: '#111111',
        primary: '#ffcb74',
        rockBg: '#211f4f',
        rockColor: '#2e4d97',
        paperBg: '#1a381d',
        paperColor: '#1bc359',
        scissorsBg: '#50091e',
        scissorsColor: '#9a0e30',
      },
    },
  },
  plugins: [],
}
