'use client';

import Link from 'next/link';

import { AnimatePresence, motion, stagger } from 'framer-motion';

const links = [
  { name: '¿Quiénes somos?', href: '/#quienes-somos' },
  { name: 'Tatuadores invitados', href: '/#tatuadores-invitados' },
  { name: 'Blog', href: '/#blog' },
];

const ulVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, when: 'beforeChildren' },
  },
};

const liVariants = {
  hidden: { y: '-100vw' },
  visible: {
    y: '0',
    transition: { type: 'spring', mass: 0.4, damping: 8 },
  },
  exit: {
    y: '-100vw',
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      duration: 0.2,
    },
  },
};

export default function HomeLinks({ onClick, justLinks }) {
  if (justLinks) {
    return (
      <>
        {links.map((link) => (
          <li key={link.name} className='uppercase'>
            <Link href={link.href} onClick={onClick && onClick}>
              {link.name}
            </Link>
          </li>
        ))}
      </>
    );
  }

  return (
    <AnimatePresence>
      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='flex gap-10 flex-wrap justify-center md:justify-end uppercase mb-10 md:mb-0'
      >
        {links.map((link) => (
          <motion.li
            key={link.name}
            whileHover={{
              scale: 1.05,
              transition: { type: 'spring', mass: 0.4, damping: 8 },
            }}
            whileTap={{ scale: 0.9 }}
            variants={liVariants}
          >
            <Link href={link.href} onClick={onClick && onClick}>
              {link.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
}
