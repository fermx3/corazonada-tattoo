'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

export default function Button({
  children,
  href,
  onClick,
  buttonType,
  handleClick,
}) {
  const customButtonStyles = {
    primary:
      'text-white bg-pink-accent hover:bg-pink-primary focus:ring-4 focus:ring-pink-accent font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none z-10 lg:max-w-max uppercase flex items-center justify-center w-fill',
    secondary:
      'text-pink-accent bg-white border border-pink-accent hover:bg-pink-accent hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none z-10 lg:max-w-max uppercase flex items-center justify-center w-fill',
  };

  if (!href) {
    return (
      <motion.button
        className={customButtonStyles[buttonType] || customButtonStyles.primary}
        onClick={handleClick}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <Link href={href} onClick={onClick && onClick}>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className={customButtonStyles[buttonType] || customButtonStyles.primary}
      >
        {children}
      </motion.div>
    </Link>
  );
}
