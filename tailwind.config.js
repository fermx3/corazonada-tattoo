/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '90vh': '90vh',
        '90vw': '90vw',
        '100vw': '100vw',
        'fill-navbar': 'calc(100dvh - 5rem)',
        fill: '-webkit-fill-available',
      },
      colors: {
        'soft-pink': '#fbdfe9',
        'pink-primary': '#ef7ca9',
        'pink-accent': '#e61252',
        'yellow-primary': '#ffd644',
        'green-primary': '#18381d',
        'green-secondary': '#7eaa7e',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'estudio-privado': 'url("https://picsum.photos/id/102/1200/800")',
        contacto: 'url("https://picsum.photos/1200/800")',
      },
      gridTemplateColumns: {
        responsive: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
      },
      dropShadow: {
        white: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
  plugins: [],
};
