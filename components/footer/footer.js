import Image from 'next/image';
import HomeLinks from '../navbar/home-links';
import Link from 'next/link';

const year = new Date().getFullYear();

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
            <HomeLinks />
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
            <div className='w-fit'>
              <Link
                href='https://www.instagram.com/corazonadatattoo/'
                target='_blank'
                rel='noreferrer'
                className='hover:underline'
              >
                <Image
                  src='/icons/instagram.svg'
                  width={20}
                  height={20}
                  alt=''
                />
              </Link>
            </div>
            <div className='w-fit'>
              <Link
                href='https://www.facebook.com/corazonadatattoo'
                target='_blank'
                rel='noreferrer'
                className='hover:underline'
              >
                <Image
                  src='/icons/facebook.svg'
                  width={20}
                  height={20}
                  alt=''
                />
              </Link>
            </div>
          </div>
        </div>
        <div className='md:hidden block'>
          <div className='flex flex-col gap-1'>
            <div className='w-full flex'>
              <Link
                href='https://www.instagram.com/corazonadatattoo/'
                target='_blank'
                rel='noreferrer'
                className='hover:underline w-full flex items-center gap-2 my-3'
              >
                <Image
                  src='/icons/instagram.svg'
                  width={40}
                  height={40}
                  alt=''
                />
                <p>Síguenos en Instagram</p>
              </Link>
            </div>
            <div className='w-fit'>
              <Link
                href='https://www.facebook.com/corazonadatattoo'
                target='_blank'
                rel='noreferrer'
                className='hover:underline w-full flex items-center gap-2 my-3'
              >
                <Image
                  src='/icons/facebook.svg'
                  width={40}
                  height={40}
                  alt=''
                />
                <p>Síguenos en Facebook</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between border-white border-t pt-8'>
        <p>{`© ${year} Corazonada Tattoo Studio`}</p>
        <p className='md:mr-20'>Playa del Carmen, México</p>
      </div>
    </footer>
  );
}
