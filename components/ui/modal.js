'use client';

import Image from 'next/image';

export default function Modal({ children, handleClick }) {
  return (
    <div
      className='fixed top-0 left-0 w-dvw h-dvh bg-black bg-opacity-50 flex justify-center items-center z-50'
      // onClick={() => handleClick(false)}
    >
      <div className='relative p-5 rounded-lg glass flex w-screen h-100vw w-100vw'>
        {children}
        {/* <div
          className='absolute top-10 right-10 z-50 cursor-pointer bg-white rounded-full'
          onClick={() => handleClick(false)}
        >
          <Image
            src='/icons/close.svg'
            alt='Close'
            width={30}
            height={30}
            className='p-2'
          />
        </div> */}
      </div>
    </div>
  );
}
