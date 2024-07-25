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
        'green-gradient': 'linear-gradient(90deg, #18381d 0%, #7eaa7e 100%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'estudio-privado': 'url("/images/home/sala.jpg")',
        contacto: 'url("/images/home/contacto.png")',
        fachada: 'url("/images/home/fachada.jpg")',
      },
      gridTemplateColumns: {
        responsive: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
        'responsive-sm': 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
      },
      dropShadow: {
        white: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
  plugins: [],
};
