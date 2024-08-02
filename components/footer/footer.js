import Image from 'next/image';
import HomeLinks from '../navbar/home-links';
import Link from 'next/link';
import SocialMediaLink from './social-media-link';

const year = new Date().getFullYear();

const socialMedia = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/corazonada.tattoo.estudio/',
    icon: '/icons/instagram.svg',
  },
  // {
  //   name: 'Facebook',
  //   link: 'https://www.facebook.com/corazonadatattoo',
  //   icon: '/icons/facebook.svg',
  // },
];

export default function Footer() {
  return (
    <footer className='bg-pink-primary text-white text-sm pt-10 pb-8 px-5'>
      <div className='flex md:flex-row flex-col p-10 gap-5 justify-between'>
        <div className='flex flex-col max-w-sm'>
          <Image
            src='/logo-blanco.png'
            width={77}
            height={77}
            alt=''
            className='mb-8'
          />
          <p>
            Somos un estudio de tatuajes que ofrece servicios de diseño
            personalizado, tatuajes de calidad y un ambiente acogedor para
            nuestros clientes.
          </p>
        </div>
        <div className='hidden md:block'>
          <p className='font-bold mb-2'>Explora</p>
          <ul>
            <li className='uppercase'>
              <Link href='/'>Home</Link>
            </li>
            <HomeLinks justLinks />
          </ul>
        </div>
        <div>
          <p className='font-bold mb-2'>Visítanos</p>
          <p>Corazonada Tattoo Studio</p>
          <p>Playa del Carmen, México</p>
        </div>
        <div className='hidden md:block'>
          <p className='font-bold mb-2'>Síguenos</p>
          <div className='flex gap-1'>
            {socialMedia.map((link, index) => (
              <SocialMediaLink key={index} link={link} />
            ))}
          </div>
        </div>
        <div className='md:hidden block'>
          <div className='flex flex-col gap-1'>
            {socialMedia.map((link, index) => (
              <SocialMediaLink key={index} link={link} full />
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between border-white border-t pt-8'>
        <p className='max-w-64 md:max-w-full'>
          {`© ${year} Corazonada Tattoo Studio | by`}{' '}
          <a
            href='http://www.webloom.com.mx'
            target='_blank'
            className='underline'
          >
            webloom
          </a>
        </p>
        <p className='md:mr-20'>Playa del Carmen, México</p>
      </div>
    </footer>
  );
}
