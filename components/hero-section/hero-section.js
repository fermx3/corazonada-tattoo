'use client';

import Button from '../button/button';

import { motion } from 'framer-motion';
import { frameVariants, slideDownVariants } from '@/lib/framer-variants';

export default function HeroSection() {
  return (
    <section className='flex lg:flex-col items-center justify-center relative overflow-hidden flex-col-reverse'>
      <motion.div
        className='relative flex flex-col items-center w-screen lg:absolute text-white lg:p-0 lg:bg-none bg-fachada bg-fixed shadow-inner bg-top lg:bg-center bg-cover bg-no-repeat'
        variants={frameVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='bg-black/30 w-full h-full lg:h-screen flex justify-center flex-col items-center py-20 px-5 z-[1]'>
          <motion.h2
            className='text-3xl text-center w-full drop-shadow-2xl'
            variants={slideDownVariants}
          >
            Corazonada Tattoo
          </motion.h2>
          <motion.h1
            className='text-5xl text-center w-full text-pink-accent mb-5 drop-shadow-2xl'
            variants={slideDownVariants}
          >
            Estudio privado en Playa del Carmen
          </motion.h1>
          <Button href='/#contacto'>Reserva ahora</Button>
        </div>
      </motion.div>
      <div className='shadow-xl w-full'>
        <video
          playsInline
          autoPlay
          loop
          muted
          className='lg:h-screen h-full w-full object-cover'
        >
          <source src='/videos/main.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  );
}
