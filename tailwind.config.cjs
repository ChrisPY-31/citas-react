/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.jsx"], //archivos en los que vamos a estar creando codigo de css
  theme: {                  //busca todos los archivos en las diferentes carpetas y busca todos los archivos de jsx
    extend: {},             //en todos ellos les va aplicar tailwind
  },
  plugins: [],
}
