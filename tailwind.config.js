/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  mode:'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  colors: {
    default_border: "#30363d",
    muted_border: "#484f58",
    active_border: "#58a6ff",
    dark:"#0d1117"
  },
  backGroundImage:{
    'cover-pic': "url('../assets/field.webp')"
  },
  plugins: [],
};
