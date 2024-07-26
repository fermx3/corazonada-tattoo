'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { growVariants } from '../tatuadores-invitados-section/tatuajes-grid';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './carousel/embla-arrows';
import { DotButton, useDotButton } from './carousel/embla-dots';

export default function Modal({ children, handleClick, emblaApi }) {
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <motion.div
      className='fixed top-0 left-0 w-dvw h-dvh flex flex-wrap justify-center items-center z-50'
      variants={growVariants}
      initial='hidden'
      animate='visible'
    >
      <div
        className='fixed top-0 left-0 w-dvw h-dvh glass'
        onClick={handleClick}
      />
      <div className='m-auto z-50 cursor-pointer' onClick={() => handleClick()}>
        <Image
          src='/icons/close.svg'
          alt='Close'
          width={50}
          height={50}
          className='p-2'
        />
      </div>
      {children}
      <div className='embla__controls mt-2'>
        <div className='embla__buttons hidden lg:grid'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
