'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../button/button';
import HomeLinks from './home-links';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className='glass sticky top-0 left-0 rigth-0 flex items-center justify-between min-h-20 w-screen px-10 py-5 bg-soft-pink text-black z-50 flex-wrap'
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden && !isMenuOpen ? 'hidden' : 'visible'}
    >
      <div className='logo'>
        <Link href='/'>
          <Image src='/logo.png' width={77} height={77} alt='' />
        </Link>
      </div>
      <ul className='md:flex gap-x-10 hidden'>
        <HomeLinks />
      </ul>
      <div className='hidden md:block'>
        <Button href='/#contacto'>Contacto</Button>
      </div>
      {isMenuOpen ? (
        <div className='md:hidden inline-block' onClick={handleClick}>
          <Image src='/icons/close.svg' width={24} height={24} alt='' />
        </div>
      ) : (
        <div className='md:hidden inline-block' onClick={handleClick}>
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
      )}
      {isMenuOpen && (
        <div className='h-fill-navbar w-full py-20 flex flex-col text-center justify-center'>
          <ul className='mb-20 text-3xl flex flex-col gap-10'>
            <HomeLinks onClick={handleClick} />
          </ul>
          <Button href='/#contacto' onClick={handleClick}>
            Contacto
          </Button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
