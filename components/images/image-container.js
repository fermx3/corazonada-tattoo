'use client';

import { motion } from 'framer-motion';
import { growVariants } from '../tatuadores-invitados-section/tatuajes-grid';

export default function ImageContainer({ children }) {
  return (
    <motion.div
      className='max-w-lg rounded-3xl shadow-xl'
      variants={growVariants}
      initial='initial'
      whileInView='visible'
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
