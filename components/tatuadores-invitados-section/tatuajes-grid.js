'use client';

import Image from 'next/image';
import Modal from '../ui/modal';
import { useState } from 'react';

export default function TatuajesGrid({ tatuajes, slug }) {
  const [modalOpenIndex, setModalOpenIndex] = useState(null);

  const handleClick = (index) => {
    setModalOpenIndex(index);
  };

  const handleNext = () => {
    if (modalOpenIndex < tatuajes - 1) {
      setModalOpenIndex(modalOpenIndex + 1);
    }
  };

  const handlePrev = () => {
    if (modalOpenIndex > 0) {
      setModalOpenIndex(modalOpenIndex - 1);
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
          />
        </div>
      ))}
      {(modalOpenIndex === 0 || modalOpenIndex) && (
        <Modal handleClick={setModalOpenIndex}>
          <div className='relative md:w-90vh md:h-90vh h-90vw w-90vw rounded-lg'>
            <Image
              src={`/images/tatuadores/${slug}/${modalOpenIndex}.jpg`}
              alt=''
              fill
              className='object-cover rounded-lg'
            />
          </div>
          {modalOpenIndex > 0 && (
            <div className='absolute top-1/2 left-2 bg-pink-accent w-fit h-fit rounded-full cursor-pointer'>
              <div onClick={handlePrev}>
                <Image
                  src='/icons/arrow-left.svg'
                  alt='Anterior'
                  width={30}
                  height={30}
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
                  width={30}
                  height={30}
                />
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}
