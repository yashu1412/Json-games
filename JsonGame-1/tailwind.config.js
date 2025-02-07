/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Adding keyframes for fish animation
      keyframes: {
        moveFishToMiddle: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { 
            transform: 'translateY(0) scale(1.2)',
          },
          '50%': {
            transform: 'translateY(-15px) scale(1.2)',
          }
        }
      },
      
      // Adding animations
      animation: {
        moveFishToMiddle: 'moveFishToMiddle 2s linear forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      // Adding custom background images
      backgroundImage: {
        'common-bg': "url('/src/assets/Background.png')",
        title: "url('/src/assets/Title-image.png')",
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
        cursive: ['cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
