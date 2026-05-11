/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#38B793',
          light: '#38B7930D', // اللون الخفيف الذي تستخدمينه في الخلفيات
          dark : '#36967c',    // اللون عند الـ hover
        },
      },
    },
  },
  plugins: [],
}

