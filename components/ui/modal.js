'use client';

import Image from 'next/image';

export default function Modal({ children, handleClick }) {
  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50'
      onClick={() => handleClick()}
    >
      <div className='relative p-5 rounded-lg glass'>
        {children}
        <div className='absolute top-5 right-5 z-40 cursor-pointer'>
          <Image src='/icons/close.svg' alt='Close' width={30} height={30} />
        </div>
      </div>
    </div>
  );
}
