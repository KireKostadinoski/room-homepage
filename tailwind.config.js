/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '580px',
      md:'768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        DarkGray: "hsl(0, 0%, 63%)",
        Black: "hsl(0, 0%, 0%)",
        White: "hsl(0, 0%, 100%)",
        VeryDarkGray: "hsl(0, 0%, 27%)",
      },
      fontFamily:{
        sans:['League Spartan', 'sans-serif']
      },
      letterSpacing: {
        'extra-wide0': '0.3em',
        'extra-wide': '0.8em',
      },
      keyframes: {
        moveAndFade: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: () => ({
        hero1mobile: "url('../images/mobile-image-hero-1.jpg')",
        hero2mobile: "url('../images/mobile-image-hero-2.jpg')",
        hero3mobile: "url('../images/mobile-image-hero-3.jpg')",
        hero1desktop: "url('../images/desktop-image-hero-1.jpg')",
        hero2desktop: "url('../images/desktop-image-hero-2.jpg')",
        hero3desktop: "url('../images/desktop-image-hero-3.jpg')",
      }),
    },
    },
  plugins: [],
};
