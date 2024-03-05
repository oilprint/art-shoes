/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: { 
      inter: ['Inter', 'sans-serif'],
      lucky: ["Luckiest Guy", "cursive"],  
      },
    },
    colors: {
        light: "#FFFAE4",
        dark:"#0C2439",
        primary: "#296A89",
        accent: "#F89C1F",
        white: "#FFFFFF",
        grey: "#BDC6CB"
      },
    container: {
      
      'padding': '15px',
      'center': true
    },
    screens: {
      'xs': '480px',
      'ss': '620px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1200px',
    },
  },
  plugins: [],
}

