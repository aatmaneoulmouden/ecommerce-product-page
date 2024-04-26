/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{.html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '18px',
        md: '2rem',
        lg: '4rem',
      },
    },
    fontFamily: {
      'kumbh-sans': ["Kumbh Sans", "sans-serif"],
    },
    colors: {
      // Primary
      'orange': 'hsl(26, 100%, 55%)',
      'pale-orange': 'hsl(25, 100%, 94%)',
      // Neutral
      'very-dark-blue': 'hsl(220, 13%, 13%)',
      'dark-grayish-blue': 'hsl(219, 9%, 45%)',
      'grayish-blue': 'hsl(220, 14%, 75%)',
      'light-grayish-blue': 'hsl(223, 64%, 98%)',
      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 0%)',
    },
    extend: {},
  },
  plugins: [],
}

