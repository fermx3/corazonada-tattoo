'use client';

import { frameVariants, slideDownVariants } from '@/lib/framer-variants';
import BigCard from '../cards/big-card';
import ContactoForm from './contacto-form';

import { motion } from 'framer-motion';

export default function ContactoSection() {
  return (
    <section
      id='contacto'
      className='bg-contacto bg-no-repeat bg-cover flex items-center justify-center py-32'
    >
      <BigCard>
        <motion.div
          variants={frameVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.h2 className='text-pink-accent' variants={slideDownVariants}>
            Contáctanos
          </motion.h2>
          <motion.p
            className='mb-2 text-4xl font-bold'
            variants={slideDownVariants}
          >
            Agenda una cita o pregunta por nuestros servicios.
          </motion.p>
          <motion.p className='mb-6' variants={slideDownVariants}>
            ¿Tienes alguna pregunta o comentario? ¡Escríbenos! Estamos aquí para
            ayudarte.
          </motion.p>
        </motion.div>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>
        <ContactoForm />
      </BigCard>
    </section>
  );
}
