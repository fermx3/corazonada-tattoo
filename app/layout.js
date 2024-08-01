import { Kavoon, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import WhatsappButton from '@/components/whatsapp-button/whatsapp-button';
import Footer from '@/components/footer/footer';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';

const kavoon = Kavoon({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kavoon',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Corazonada Tattoo Studio',
  description: 'Tattoo studio in Playa del Carmen, México',
  metadataBase: new URL('https://www.corazonadatattoo.com/'),
  alternates: {
    canonical: '/',
    // languages: {
    //   'en-US': '/en-US',
    //   'de-DE': '/de-DE',
    // },
  },
  openGraph: {
    images: [`logo.png`],
  },
  robots: 'index, follow',
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbdfe9' },
    { media: '(prefers-color-scheme: dark)', color: '#18381d' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '509020988233938');
            fbq('track', 'PageView');
            `,
        }}
      />
      <GoogleTagManager gtmId='G-SVE9ML1DQN' />
      <body
        className={`${kavoon.variable} ${poppins.className} grid grid-rows-[auto_1fr_auto] min-h-dvh`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
