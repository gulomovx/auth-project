/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      screens: {
        'iphone': '430px', // iPhone 14 Pro
        'ultra':'412px', // for ultra
        'galaxy': '360px', // Samsung Galaxy 
      },
    },
  },
  plugins: [],
}

