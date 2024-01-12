import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ['Gilroy-Medium', 'sans-serif'],
      body:  ['Gilroy-Medium', 'sans-serif'],

    },
    extend: {
      fontFamily:{
        'Gilroy-Medium':['Gilroy-Medium', 'sans-serif'],
      },
      screens: {
        mf: '990px',
        cr: '500px'
      },

    },
  },
  plugins: [],
}
export default config
