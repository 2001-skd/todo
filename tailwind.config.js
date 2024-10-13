/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'primary': ['Josefin Sans', 'serif'],
      },
      backgroundImage: {
        'desk-dark': "url('./src/assets/images/bg-desktop-dark.jpg')",
        'desk-light': "url('./src/assets/images/bg-desktop-light.jpg')",
        'mob-dark' : "url('./src/assets/images/bg-mobile-dark.jpg')",
        'mob-light' : "url('./src/assets/images/bg-mobile-light.jpg')"
      },

      colors: {
        'dark-bg': '#25273C',
        'light-bg': '#fff',
        'light-text': '#000',
        'dark-text': '#fff',
        'text-gray': '#6b7280',
      },
    },
  },
  plugins: [],
}