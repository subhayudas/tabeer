/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B0000', // Deep maroon
          light: '#B22222',   // Lighter maroon
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold
          light: '#FFD700',   // Lighter gold
        },
        accent: {
          DEFAULT: '#006064', // Deep teal
          light: '#00897B',   // Lighter teal
        },
        neutral: {
          DEFAULT: '#F5F5DC', // Beige
          dark: '#E8E4C9',    // Darker beige
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
    },
  },
  plugins: [],
};
