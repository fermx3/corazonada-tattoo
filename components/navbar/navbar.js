import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../button/button';

const Navbar = () => {
  return (
    <nav className='sticky top-0 left-0 rigth-0 flex items-center justify-between min-h-20 w-screen px-10 py-5 bg-soft-pink text-black z-50'>
      <div className='logo'>
        <Link href='/'>
          <Image src='/logo.png' width={77} height={77} alt='' />
        </Link>
      </div>
      <ul className='md:flex gap-x-10 hidden'>
        <li>
          <Link href='/#quienes-somos'>¿Quiénes somos?</Link>
        </li>
        <li>
          <Link href='/#tatuadores-invitados'>Tatuadores invitados</Link>
        </li>
        <li>
          <Link href='/#blog'>Blog</Link>
        </li>
      </ul>
      <div className='hidden md:block'>
        <Button href='/#contacto'>Contacto</Button>
      </div>
      <div className='md:hidden inline-block'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 md:hidden'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
