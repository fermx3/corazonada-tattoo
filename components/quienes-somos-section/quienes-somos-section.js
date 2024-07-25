'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { growVariants } from '../tatuadores-invitados-section/tatuajes-grid';
import { frameVariants, slideRightVariants } from '@/lib/framer-variants';
import Carousel from './carousel';

export default function QuienesSomosSection() {
  return (
    <section
      className='min-h-screen bg-green-secondary px-5 py-10 flex items-center justify-center flex-wrap lg:flex-row flex-col-reverse gap-10'
      id='quienes-somos'
    >
      <motion.div
        className='max-w-lg'
        variants={growVariants}
        initial='initial'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <Carousel images={['azul.jpg', 'rosa.jpg', 'cafe.jpg', 'fruta.jpg']} />
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
