'use client';

import { motion } from 'framer-motion';
import { growVariants } from '../tatuadores-invitados-section/tatuajes-grid';

export default function Card({ children }) {
  return (
    <motion.div
      className='rounded-3xl shadow-xl bg-white'
      variants={growVariants}
      initial='initial'
      whileInView='visible'
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
