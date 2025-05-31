import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // if using /app directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19171b",
        secondary: "#060606",
        accent: "#75020F",
        highlight: "#D8001B",
        muted: "#cccccc",
        brand: "#fff200",
        // Add more or rename as you like
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
export default config
