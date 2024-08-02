'use client';

import Image from 'next/image';
import Modal from '../ui/modal';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import useEmblaCarousel from 'embla-carousel-react';

export const growVariants = {
  initial: { opacity: 0, scale: 0, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.1,
      type: 'spring',
      mass: 0.5,
    },
  },
};

export default function TatuajesGrid({ tatuajes, slug }) {
  const [modalOpenIndex, setModalOpenIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [emblaMainRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: modalOpenIndex,
  });

  const handleClick = (index) => {
    setIsModalOpen(!isModalOpen);
    setModalOpenIndex(index);
  };

  return (
    <motion.div
      className='flex flex-wrap gap-5 justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delayChildren: 0.5, staggerChildren: 0.1 }}
    >
      {Array.from({ length: tatuajes }).map((_, i) => (
        <motion.div
          key={i}
          className='h-80 w-80 bg-gray-300 rounded-3xl relative shadow-md hover:shadow-xl cursor-pointer overflow-hidden pulse'
          onClick={() => handleClick(i)}
          whileTap={{ scale: 0.95 }}
          initial={'initial'}
          whileInView={'visible'}
          variants={growVariants}
          viewport={{ once: true }}
        >
          <Image
            src={`/images/tatuadores/${slug}/${i}.jpg`}
            alt=''
            fill
            className='object-cover hover:opacity-80 hover:scale-110 transition-all duration-300'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            placeholder='blur'
            blurDataURL={`/images/tatuadores/${slug}/${i}.jpg`}
          />
        </motion.div>
      ))}
      {isModalOpen && (
        <Modal handleClick={handleClick} emblaApi={emblaApi}>
          <div className='embla__viewport' ref={emblaMainRef}>
            <div className='embla__container'>
              {Array.from({ length: tatuajes }).map((_, index) => (
                <div
                  className='embla__slide xl:basis-[50%!important] lg:basis-[55%!important]'
                  key={index}
                >
                  <div className='w-90vw h-90vw lg:h-[80vh] lg:w-[80vh] relative top-0 left-0 rounded-3xl shadow-xl overflow-hidden mb-10'>
                    <Image
                      src={`/images/tatuadores/${slug}/${index}.jpg`}
                      alt=''
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      placeholder='blur'
                      blurDataURL={`/images/tatuadores/${slug}/${index}.jpg`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </motion.div>
  );
}
