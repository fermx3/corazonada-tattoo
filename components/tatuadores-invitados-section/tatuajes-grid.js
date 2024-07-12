'use client';

import Image from 'next/image';
import Modal from '../ui/modal';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

export default function TatuajesGrid({ tatuajes, slug }) {
  const [modalOpenIndex, setModalOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const [swipe, setSwipe] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    // setSwipe(null);
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      isLeftSwipe ? handleNext() : isRightSwipe && handlePrev();
  };
  console.log(modalOpenIndex);

  const handleClick = (index) => {
    setIsModalOpen(true);
    setModalOpenIndex(index);
  };

  const handleNext = () => {
    if (modalOpenIndex < tatuajes - 1) {
      setSwipe(null);
      setModalOpenIndex(null);
      setTimeout(() => setModalOpenIndex(modalOpenIndex + 1), 0);
      setSwipe('left');
    }
  };

  const handlePrev = () => {
    if (modalOpenIndex > 0) {
      setSwipe(null);
      setModalOpenIndex(null);
      setTimeout(() => setModalOpenIndex(modalOpenIndex - 1), 0);
      setSwipe('right');
    }
  };

  return (
    <div className='flex flex-wrap gap-5 justify-center'>
      {Array.from({ length: tatuajes }).map((_, i) => (
        <div
          key={i}
          className='h-80 w-80 bg-gray-300 rounded-3xl relative shadow-md hover:shadow-xl cursor-pointer'
          onClick={() => handleClick(i)}
        >
          <Image
            src={`/images/tatuadores/${slug}/${i}.jpg`}
            alt=''
            fill
            className='object-cover rounded-3xl hover:opacity-80 transition-opacity duration-300'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            placeholder='blur'
            blurDataURL={`/images/tatuadores/${slug}/${i}.jpg`}
          />
        </div>
      ))}

      {isModalOpen && (
        <Modal handleClick={setIsModalOpen}>
          <AnimatePresence>
            {(modalOpenIndex === 0 || modalOpenIndex) && (
              <motion.div
                variants={{
                  initialRight: {
                    x: '-100%',
                    opacity: 0,
                    scale: 0.5,
                  },
                  initialLeft: {
                    x: '100%',
                    opacity: 0,
                    scale: 0.5,
                  },
                  visible: { x: 0, opacity: 1, scale: 1, originX: 0 },
                  exitRight: { x: '100%', opacity: 0, scale: 0.5 },
                  exitLeft: { x: '-200%', opacity: 0 },
                }}
                transition={{ duration: 0.2, ease: 'easeIn' }}
                initial={swipe === 'left' ? 'initialLeft' : 'initialRight'}
                animate='visible'
                exit={swipe === 'left' ? 'exitLeft' : 'exitRight'}
                key={modalOpenIndex}
                className='flex absolute'
              >
                <div className='relative md:w-90vh md:h-90vh h-90vw w-90vw rounded-lg'>
                  <Image
                    src={`/images/tatuadores/${slug}/${modalOpenIndex}.jpg`}
                    alt=''
                    fill
                    className='object-cover rounded-lg'
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {modalOpenIndex > 0 && (
            <div className='absolute top-1/2 left-2 bg-pink-accent w-fit h-fit rounded-full cursor-pointer'>
              <div onClick={handlePrev}>
                <Image
                  src='/icons/arrow-left.svg'
                  alt='Anterior'
                  width={40}
                  height={40}
                />
              </div>
            </div>
          )}
          {modalOpenIndex < tatuajes - 1 && (
            <div className=' absolute top-1/2 right-2 bg-pink-accent w-fit h-fit rounded-full cursor-pointer'>
              <div onClick={handleNext}>
                <Image
                  src='/icons/arrow-right.svg'
                  alt='Siguiente'
                  width={40}
                  height={40}
                />
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}
