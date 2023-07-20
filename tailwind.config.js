/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-background': 'url("/images/background/search-background.svg")',
      },
      colors: {
        primary: '#590BD8',
        primaryLighter: '#DDD5EA',
        primaryDarker: '#312A4F',
        grayPrimary: '#717171',
        grayLighter: '#BBBFBF',
      },
      textColor: {
        dark: '#717171',
      },
    },
  },
  plugins: [],
};
