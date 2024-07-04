import { Kavoon, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import WhatsappButton from '@/components/whatsapp-button/whatsapp-button';

const kavoon = Kavoon({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kavoon',
});

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Corazada Tattoo Studio',
  description: 'Tattoo studio in Playa del Carmen, México',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={`${kavoon.variable} ${poppins.className}`}>
        <Navbar />
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
