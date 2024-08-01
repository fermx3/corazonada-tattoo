'use client';

import Image from 'next/image';
import Button from '../button/button';
import Card from './card';

import { motion } from 'framer-motion';
import { frameVariants, slideDownVariants } from '@/lib/framer-variants';

export default function CardContent({ image, title, desc, url }) {
  return (
    <Card>
      <div className='w-full h-56 relative mb-3'>
        <Image
          src={image}
          alt={`foto de ${title}`}
          fill
          className='object-cover rounded-3xl p-2 object-top'
        />
      </div>
      <motion.div
        className='px-7 pb-5 flex flex-col flex-none gap-5'
        variants={frameVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.p
          className='font-bold text-2xl p-0'
          variants={slideDownVariants}
        >
          {title}
        </motion.p>
        <motion.p variants={slideDownVariants} className='whitespace-pre-line'>
          {desc}
        </motion.p>
        <Button href={url}>Ver más</Button>
      </motion.div>
    </Card>
  );
}
