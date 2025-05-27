/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
    darkMode: 'class',
  theme: {
    screen:{
      'ipadMini': '768px',
  // => @media (min-width: 768px) { ... }
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 4s linear infinite',
        'border': 'border 4s ease infinite',
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
    },
  },
  },
  plugins: [],
}
