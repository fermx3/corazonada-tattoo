export const frameVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      staggerChildren: 0.2,
      ease: 'easeInOut',
    },
  },
};

export const slideRightVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      type: 'spring',
      mass: 0.4,
    },
  },
};

export const slideDownVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      type: 'spring',
      mass: 0.4,
    },
  },
};
