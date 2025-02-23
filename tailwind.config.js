/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue:'#0F2669',
      },
      fontFamily: {
        custom: ['Arial', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'loop-scroll': 'loop-scroll 15s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(-100%)'},        
        },
      },
     
    },
  },
  plugins: [],
}

