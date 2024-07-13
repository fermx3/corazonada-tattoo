'use client';

import { frameVariants, slideDownVariants } from '@/lib/framer-variants';
import BigCard from '../cards/big-card';

import { motion } from 'framer-motion';

export default function EstudioPrivadoSection() {
  return (
    <section className='min-h-dvh bg-estudio-privado bg-no-repeat bg-cover flex items-center justify-center'>
      <BigCard>
        <motion.div
          variants={frameVariants}
          whileInView='visible'
          initial='hidden'
          viewport={{ once: true }}
        >
          <motion.h2
            className='md:text-6xl text-5xl md:text-left text-center mb-5 text-pink-accent'
            variants={slideDownVariants}
          >
            ¿Qué es un estudio privado?
          </motion.h2>
          <motion.p
            className='md:text-left text-center text-md'
            variants={slideDownVariants}
          >
            Es un estudio que se maneja mediante citas previamente acordadas, es
            un ambiente privado con un espacio para que el cliente y el
            profesional puedan construir el diseño que quieran plasmar, un
            espacio seguro en el cual el cliente y el tatuador pueden dedicarle
            el tiempo necesario a cada pieza.
          </motion.p>
        </motion.div>
      </BigCard>
    </section>
  );
}
