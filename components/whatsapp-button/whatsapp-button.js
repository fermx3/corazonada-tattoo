'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

export default function WhatsappButton() {
  return (
    <motion.div
      className='fixed bottom-5 right-5 z-[1]'
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        ease: 'easeIn',
        duration: 0.1,
        type: 'spring',
        mass: 0.5,
      }}
      whileTap={{
        scale: 0.9,
      }}
      whileHover={{
        scale: 1.05,
      }}
    >
      <Link href='https://wa.me/529841447501' target='_blank'>
        <Image
          src='/icons/whatsapp.svg'
          alt='Whatsapp'
          width={50}
          height={50}
        />
      </Link>
    </motion.div>
  );
}
