/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens:{
      'esm': '480px',
      // => @media (min-width: 480px) { ... } #
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    fontFamily: {
      primary: 'Raleway',
      body: 'Roboto',
      small: 'Gotham',
    },
    extend: {
      colors: {
        green: '#a7be39',
        gray: '#7a6e66',
        yellow: '#ff9900',
        lightBrown: '#241b24',
        lightGreen:'#D9F2BF',
        midGreen:'#40F299',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

