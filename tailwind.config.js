/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#05609A",
        "secondary-blue": "#234961",
        "primary-white": "#FAFAFA",
        "secondary-white": "#EBEBEB",
      },
    },
  },
  plugins: [],
};
