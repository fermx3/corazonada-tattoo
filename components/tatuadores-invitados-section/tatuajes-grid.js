'use client';

import Image from 'next/image';
import Modal from '../ui/modal';
import { useState } from 'react';

export default function TatuajesGrid({ tatuajes, slug }) {
  const [modalOpenIndex, setModalOpenIndex] = useState(null);

  const handleClick = (index) => {
    setModalOpenIndex(index);
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
          <div className='relative w-90vw h-90vh rounded-lg'>
            <Image
              src={`/images/tatuadores/${slug}/${modalOpenIndex}.jpg`}
              alt=''
              fill
              className='object-contain rounded-lg'
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
