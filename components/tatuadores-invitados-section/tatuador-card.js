'use client';

import Card from '../cards/card';
import Image from 'next/image';

import { motion } from 'framer-motion';

export default function TatuadorCard({ image, name, desc }) {
  return (
    <motion.div
      className='w-80'
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    >
      <Card>
        <div className='relative w-80 h-52'>
          <Image
            src={image}
            alt={name}
            fill
            className='object-cover object-top rounded-3xl p-2'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        <motion.div
          className='w-80 p-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 2 }}
        >
          <motion.h1
            className='text-3xl'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {desc}
          </motion.p>
        </motion.div>
      </Card>
    </motion.div>
  );
}
