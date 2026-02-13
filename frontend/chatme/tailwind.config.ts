import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#075E54',
        secondary: '#128C7E',
        accent: '#25D366',
        light: '#ECE5DD',
        dark: '#111B21',
        gray: {
          50: '#F7F7F7',
          100: '#EFEFEF',
          200: '#E5E5EA',
          700: '#3A3A3C',
        },
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};

export default config;
