'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { growVariants } from '../tatuadores-invitados-section/tatuajes-grid';

export default function Modal({ children, handleClick }) {
  return (
    <motion.div
      className='fixed top-0 left-0 w-dvw h-dvh bg-black bg-opacity-50 flex justify-center items-center z-50'
      variants={growVariants}
      initial='hidden'
      animate='visible'
    >
      <div
        className='absolute m-auto md:top-2 top-10 z-50 cursor-pointer bg-white rounded-full'
        onClick={() => handleClick()}
      >
        <Image
          src='/icons/close.svg'
          alt='Close'
          width={30}
          height={30}
          className='p-2'
        />
      </div>
      <div className='relative p-5 rounded-lg glass flex w-screen h-100vw w-100vw'>
        {children}
      </div>
    </motion.div>
  );
}
