'use client';

import Card from '../cards/card';
import Image from 'next/image';

import { motion } from 'framer-motion';
import {
  frameVariants,
  slideDownVariants,
  slideLeftVariants,
} from '@/lib/framer-variants';

export default function TatuadorCard({ image, name, desc }) {
  return (
    <motion.div
      className='w-80'
      variants={slideLeftVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <Card>
        <div className='relative w-80 h-52'>
          <Image
            src={image}
            alt={name}
            fill
            className='object-cover object-top rounded-3xl p-2'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            placeholder='blur'
            blurDataURL={image}
          />
        </div>
        <motion.div
          className='w-80 p-5'
          variants={frameVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h1 className='text-3xl' variants={slideDownVariants}>
            {name}
          </motion.h1>
          <motion.p variants={slideDownVariants}>{desc}</motion.p>
        </motion.div>
      </Card>
    </motion.div>
  );
}
