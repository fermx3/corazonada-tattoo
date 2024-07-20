'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { growVariants } from '../tatuadores-invitados-section/tatuajes-grid';
import { frameVariants, slideRightVariants } from '@/lib/framer-variants';

export default function QuienesSomosSection() {
  return (
    <section
      className='min-h-screen bg-green-secondary p-10 py-20 flex items-center justify-center flex-wrap lg:flex-row flex-col-reverse gap-20'
      id='quienes-somos'
    >
      <motion.div
        className='max-w-lg rounded-3xl shadow-xl'
        variants={growVariants}
        initial='initial'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <Image
          src='/images/home/azul-1.jpg'
          alt='Logo'
          width={400}
          height={300}
          className='rounded-3xl'
        />
      </motion.div>
      <motion.div
        className='max-w-lg text-white'
        variants={frameVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.h3 className='text-2xl mb-3' variants={slideRightVariants}>
          ¿Quiénes somos?
        </motion.h3>
        <motion.h2
          className='text-6xl mb-3 text-soft-pink'
          variants={slideRightVariants}
        >
          El mejor estudio privado
        </motion.h2>
        <motion.p variants={slideRightVariants}>
          Somos un estudio de tatuajes en Playa del Carmen, México. Nos
          especializamos en tatuajes personalizados y de calidad. Nuestro equipo
          de tatuadores profesionales está listo para ayudarte a plasmar tus
          ideas en tu piel.
        </motion.p>
      </motion.div>
    </section>
  );
}
