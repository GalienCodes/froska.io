import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display:  ["Poppins", "sans-serif"],
      body:  ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        mf: '990px',
        cr: '500px'
      },

    },
  },
  plugins: [],
}
export default config
