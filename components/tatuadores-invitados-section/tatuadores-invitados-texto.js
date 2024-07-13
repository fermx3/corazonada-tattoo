'use client';

import { frameVariants, slideRightVariants } from '@/lib/framer-variants';
import { motion } from 'framer-motion';

export default function TatuadoresInvitadosTexto() {
  return (
    <motion.div
      className='max-w-lg text-black'
      variants={frameVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.h3 className='text-2xl' variants={slideRightVariants}>
        Tatuadores invitados
      </motion.h3>
      <motion.h2
        className='text-6xl mb-3 text-pink-accent'
        variants={slideRightVariants}
      >
        Tatuadores de todo el mundo
      </motion.h2>
      <motion.p variants={slideRightVariants}>
        Contamos con espacio para que diferentes artistas visiten nuestro
        estudio. Puedes chequear los próximos invitados con anticipación y
        acordar una cita previamente .
      </motion.p>
    </motion.div>
  );
}
