'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

export default function Carousel({ images }) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex p-10 gap-2'>
        {images.map((image, index) => (
          <div
            className='min-w-0	flex-[0_0_100%] h-[300] w-[400] rounded-3xl'
            key={index}
          >
            <Image
              src={`/images/home/${image}`}
              alt=''
              width={400}
              height={300}
              className='rounded-3xl shadow-xl'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
