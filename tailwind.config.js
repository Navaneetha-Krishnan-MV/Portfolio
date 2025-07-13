/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      animation: {
        floating: 'floating 3s ease-in-out infinite',
        'ping-large': 'ping-large 1s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'ping-large': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}