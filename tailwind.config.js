/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
  ],
  
  theme: {
    //gradientColorStops: theme =>({
      //...theme('colors'),
      //'primary': '#3490dc',
      //'secondary': '#ffed4a',
      //'danger': '#e3342f',
    //}),
    screens:{
      'sm': {'min': '640px', 'max':'767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      fontFamily: {
        inter: 'inter, serif',
      }
    },
  },
  plugins: [],
}

