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
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'slideUp': 'slideUp 0.5s ease-out forwards',
        'slideDown': 'slideDown 0.5s ease-out forwards',
        'slideLeft': 'slideLeft 0.5s ease-out forwards',
        'slideRight': 'slideRight 0.5s ease-out forwards',
        'pulse': 'pulse 2s infinite ease-in-out',
        'spin': 'spin 1s linear infinite',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      transitionTimingFunction: {
        'bounce-start': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'bounce-end': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '105': '1.05',
        '110': '1.1',
      },
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
      },
    },
  },
  plugins: [],
};
