import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../button/button';

const Navbar = () => {
  return (
    <nav className='sticky top-0 left-0 rigth-0 flex items-center justify-between min-h-20 w-full px-10 py-5 bg-soft-pink text-black z-50'>
      <div className='logo'>
        <Image src='/logo.png' width={77} height={77} alt='' />
      </div>
      <ul className='flex gap-x-10'>
        <li>
          <Link href='#'>Link 1</Link>
        </li>
        <li>
          <Link href='#'>Link 2</Link>
        </li>
        <li>
          <Link href='#'>Link 3</Link>
        </li>
      </ul>
      <div>
        <Button href='#'>Contact</Button>
      </div>
    </nav>
  );
};

export default Navbar;
